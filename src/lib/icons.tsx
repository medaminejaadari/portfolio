import {
  AudioWaveform,
  Award,
  BarChart3,
  BrainCircuit,
  Code2,
  Database,
  Library,
  Terminal,
  type LucideIcon,
} from "lucide-react";

// Maps icon names used in `src/data/portfolio.ts` to Lucide components.
const iconMap: Record<string, LucideIcon> = {
  AudioWaveform,
  Award,
  BarChart3,
  BrainCircuit,
  Code2,
  Database,
  Library,
  Terminal,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Code2;
}
