export interface RadarNode {
  radius: number;
  angle: number;
  size: number;
  delay: number;
  city: string;
  state: string;
  connections: string;
}

export interface NodeAnimationProps {
  $delay: number;
}

export interface FloatingCardProps {
  $position: 'left' | 'right';
}

export interface ParticleProps {
  $left: number;
  $top: number;
  $size: number;
  $duration: number;
  $delay: number;
}
