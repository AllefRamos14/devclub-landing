import type { LucideIcon } from 'lucide-react';

export interface FeaturedProps {
  $featured?: boolean;
}

export type ModuleStatus = 'completed' | 'active' | 'locked';

export interface FormationModule {
  id: string;
  number: string;
  title: string;
  description: string;
  duration: string;
  status: ModuleStatus;
}

export interface FinalProject {
  title: string;
  description: string;
  features: string[];
}

export interface Formacao {
  id: string;
  tag: string;
  title: string;
  description: string;
  technologies: string[];
  icon: LucideIcon;
  level: number;
  levelLabel: string;
  featured?: boolean;
  href: string;

  duration: string;
  totalLessons: number;
  progress: number;
  headline: string;
  outcome: string;
  modules: FormationModule[];
  finalProject: FinalProject;
}

export interface FormationCardProps {
  formacao: Formacao;
  index: number;
  onOpen: () => void;
}

export interface FormationExperienceProps {
  formacao: Formacao;
  onClose: () => void;
}