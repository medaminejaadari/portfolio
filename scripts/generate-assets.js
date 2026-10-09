/**
 * Generates favicon.ico, PNG favicons, and og-image.png without extra deps.
 * Run: node scripts/generate-assets.js
 */
const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

// ---- Minimal PNG encoder (grayscale+alpha via zlib, 8-bit RGB) ----
function crc32(buf) {
  let c, crcTable = [];
  for (let n = 0; n < 256; n++) {
    c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    crcTable[n] = c;
  }
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) crc = crcTable[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  return (crc ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const typeBuf = Buffer.from(type, "ascii");
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])));
  return Buffer.concat([len, typeBuf, data, crcBuf]);
}

function encodePNG(width, height, pixels /* RGBA Buffer */) {
  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // color type RGBA
  const raw = Buffer.alloc((width * 4 + 1) * height);
  for (let y = 0; y < height; y++) {
    raw[y * (width * 4 + 1)] = 0; // filter: none
    pixels.copy(raw, y * (width * 4 + 1) + 1, y * width * 4, (y + 1) * width * 4);
  }
  const idat = zlib.deflateSync(raw, { level: 9 });
  return Buffer.concat([
    signature,
    chunk("IHDR", ihdr),
    chunk("IDAT", idat),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

// ---- Minimal ICO: embeds one 32x32 PNG ----
function encodeICO(png32) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(1, 4); // count
  const entry = Buffer.alloc(16);
  entry[0] = 32; // width
  entry[1] = 32; // height
  entry[2] = 0; // colors
  entry[3] = 0; // reserved
  entry.writeUInt16LE(1, 4); // planes
  entry.writeUInt16LE(32, 6); // bpp
  entry.writeUInt32LE(png32.length, 8); // size
  entry.writeUInt32LE(22, 12); // offset (6 + 16)
  return Buffer.concat([header, entry, png32]);
}

// ---- Draw a simple gradient + ring + centered text bars ("JMA") ----
function drawIcon(size) {
  const buf = Buffer.alloc(size * size * 4);
  const set = (x, y, r, g, b, a = 255) => {
    const idx = (y * size + x) * 4;
    buf[idx] = r;
    buf[idx + 1] = g;
    buf[idx + 2] = b;
    buf[idx + 3] = a;
  };

  const c = size / 2 - 0.5;
  const outer = size * 0.42;
  const inner = size * 0.36;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const dx = x - c, dy = y - c;
      const dist = Math.sqrt(dx * dx + dy * dy);
      // background dark navy
      set(x, y, 2, 6, 23);
      // cyan ring
      if (dist <= outer && dist >= inner) set(x, y, 34, 211, 238);
      // letter bars: two vertical bars + top bar (very abstract "J-M-A" block)
      const bx1 = Math.abs(dx - size * 0.12) < size * 0.055;
      const bx2 = Math.abs(dx + size * 0.12) < size * 0.055;
      const barTop = dy < -size * 0.15 && dy > -size * 0.3;
      const barBot = dy > size * 0.05 && dy < size * 0.28;
      const crossMid = Math.abs(dy) < size * 0.05;
      if ((bx1 && barBot) || (bx2 && (barTop || barBot || crossMid)))
        set(x, y, 241, 245, 249);
    }
  }
  return buf;
}

function makePNG(size) {
  return encodePNG(size, size, drawIcon(size));
}

const publicDir = path.join(__dirname, "..", "public");
const appDir = path.join(__dirname, "..", "src", "app");

fs.mkdirSync(publicDir, { recursive: true });

fs.writeFileSync(path.join(appDir, "favicon.ico"), encodeICO(makePNG(32)));
fs.writeFileSync(path.join(publicDir, "favicon.png"), makePNG(32));
fs.writeFileSync(path.join(publicDir, "favicon-32.png"), makePNG(32));

// OG image 1200x630: dark navy bg with cyan radial glow + name bars
const W = 1200, H = 630;
const og = Buffer.alloc(W * H * 4);
for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    const idx = (y * W + x) * 4;
    const d = Math.sqrt((x - W / 2) ** 2 + (y - H / 2) ** 2);
    const glow = Math.max(0, 1 - d / 500);
    og[idx] = Math.round(2 + 34 * glow);
    og[idx + 1] = Math.round(6 + 100 * glow);
    og[idx + 2] = Math.round(23 + 180 * glow);
    og[idx + 3] = 255;
  }
}
fs.writeFileSync(path.join(publicDir, "og-image.png"), encodePNG(W, H, og));

console.log("Generated: favicon.ico, favicon PNGs, public/og-image.png");
