import type { LucideIcon } from 'lucide-react';
import type { CSSProperties } from 'react';

export interface TutorMetric {
  value: string;
  label: string;
}

export interface TutorJourneyItem {
  period: string;
  title: string;
  description: string;
}

export interface Tutor {
  initials: string;
  image?: string;
  hue: number;
  name: string;
  role: string;
  bio: string;
  longBio: string;
  icon: LucideIcon;
  experience: string;
  specialty: string;
  technologies: string[];
  highlights: string[];
  journey: TutorJourneyItem[];
  metrics?: TutorMetric[];
  featured?: boolean;
}

export interface FeaturedProps {
  $featured?: boolean;
}

export interface HueProps {
  $hue: number;
}

export interface SpotlightStyle extends CSSProperties {
  '--mouse-x': string;
  '--mouse-y': string;
}

export interface TutorCardProps {
  tutor: Tutor;
  index: number;
  reducedMotion: boolean | null;
  onSelect: (tutor: Tutor) => void;
}

export interface TutorProfileModalProps {
  tutor: Tutor | null;
  reducedMotion: boolean | null;
  onClose: () => void;
}