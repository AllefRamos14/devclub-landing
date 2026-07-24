import type { CSSProperties } from 'react';
import type { LucideIcon } from 'lucide-react';

export interface Milestone {
  year: string;
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  stats?: Array<{
    value: string;
    label: string;
  }>;
  highlight?: boolean;
}

export interface HighlightProps {
  $highlight?: boolean;
}

export interface SpotlightStyle extends CSSProperties {
  '--mouse-x': string;
  '--mouse-y': string;
}
