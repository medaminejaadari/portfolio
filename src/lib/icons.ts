import {
  Code2,
  BarChart3,
  BrainCircuit,
  AudioWaveform,
  Database,
  Library,
  Terminal,
  Award,
  Mail,
  Phone,
  MapPin,
  FileText,
  ExternalLink,
  ArrowUp,
  Sun,
  Moon,
  Menu,
  X,
  Send,
  GraduationCap,
  Briefcase,
  Users,
  type LucideIcon,
} from "lucide-react";

// Github / Linkedin brand icons are provided in src/components/social-icons.tsx

export const icons = {
  Code2,
  BarChart3,
  BrainCircuit,
  AudioWaveform,
  Database,
  Library,
  Terminal,
  Award,
  Mail,
  Phone,
  MapPin,
  FileText,
  ExternalLink,
  ArrowUp,
  Sun,
  Moon,
  Menu,
  X,
  Send,
  GraduationCap,
  Briefcase,
  Users,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;

export const getIcon = (name: string): LucideIcon =>
  icons[name as IconName] ?? Code2;
