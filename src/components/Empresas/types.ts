export interface Company {
  name: string;
  slug: string;
  category: string;
  description: string;
  status: string;
  code: string;
  logo: string;
  color: string;
  colorRgb: string;
  contrastColor?: string;
  featured?: boolean;
}

export interface BrandColorProps {
  $brandColor: string;
  $brandColorRgb: string;
}

export interface MarqueeTrackProps {
  $reverse?: boolean;
  $duration: number;
}

export interface CompanyCardProps extends BrandColorProps {
  $featured?: boolean;
}

export interface CompanyLogoWrapperProps extends BrandColorProps {
  $size?: 'small' | 'large';
}

export interface ParticleProps {
  $left: number;
  $top: number;
  $size: number;
  $delay: number;
  $duration: number;
}

export interface FloatingMetricProps {
  $side: 'left' | 'right';
}

export interface CodeItemProps {
  $accent?: boolean;
}

export interface PaginationDotProps {
  $active?: boolean;
  $brandColor: string;
}

export interface TalentTerminalHookOptions {
  prefersReducedMotion: boolean | null;
  companyCount: number;
}
