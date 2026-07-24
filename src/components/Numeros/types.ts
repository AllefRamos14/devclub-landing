import type { LucideIcon } from 'lucide-react';

export interface CounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
}

export interface Stat {
  target: number;
  suffix: string;
  prefix: string;
  label: string;
  description: string;
  icon: LucideIcon;
}

export interface StatCardProps {
  stat: Stat;
  index: number;
  reducedMotion: boolean | null;
}

export interface DashboardProps {
  reducedMotion: boolean | null;
}
