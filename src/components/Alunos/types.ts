import type { CSSProperties } from 'react';

export interface JourneyStep {
  label: string;
  title: string;
  description: string;
}

export interface Depoimento {
  id: string;
  quote: string;
  name: string;
  role: string;
  previousArea: string;
  time: string;
  modality: string;
  initials: string;
  hue: number;

  image?: string;
  badge: string;
  story: string;
  stack: string[];
  achievements: string[];
  journey: JourneyStep[];
}

export interface SelectedStudent {
  testimonial: Depoimento;
  cardKey: string;
}

export interface MarqueeTrackProps {
  $duration: number;
  $reverse?: boolean;
  $paused?: boolean;
}

export interface HueProps {
  $hue: number;
}

export interface SpotlightStyle extends CSSProperties {
  '--mouse-x': string;
  '--mouse-y': string;
}

export interface TestimonialCardProps {
  testimonial: Depoimento;
  cardKey: string;
  onSelect: (
    testimonial: Depoimento,
    cardKey: string,
  ) => void;
}

export interface StudentCaseModalProps {
  selectedStudent: SelectedStudent | null;
  onClose: () => void;
}