/**
 * Optimizes the profile photo added by the user:
 *  - public/photo.webp  : full portrait, width 720 (About section)
 *  - public/avatar.webp : square crop anchored near top, 480x480 (Hero avatar)
 * Run: node scripts/optimize-photo.js
 */
const sharp = require("sharp");
const path = require("path");

const src = path.join(__dirname, "..", "ChatGPT Image Oct 9, 2026, 07_40_12 PM.png");
const out = path.join(__dirname, "..", "public");

async function main() {
  const meta = await sharp(src).metadata();

  // Full portrait for the About section
  await sharp(src)
    .resize({ width: 720 })
    .webp({ quality: 85 })
    .toFile(path.join(out, "photo.webp"));

  // Square avatar for the Hero — anchored near the top so the face stays in frame
  const size = Math.min(meta.width, meta.height);
  const top = Math.max(0, Math.round((meta.height - size) * 0.15));
  await sharp(src)
    .extract({ left: 0, top, width: size, height: size })
    .resize(480, 480)
    .webp({ quality: 85 })
    .toFile(path.join(out, "avatar.webp"));

  console.log(`Generated public/photo.webp and public/avatar.webp from ${meta.width}x${meta.height} source`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
