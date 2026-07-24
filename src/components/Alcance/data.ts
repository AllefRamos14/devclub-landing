import type { RadarNode } from './types';

export const radii = [100, 190, 290, 420];

export const radarNodes: RadarNode[] = [
  {
    radius: 100,
    angle: 62,
    size: 3.2,
    delay: 0,
    city: 'São Paulo',
    state: 'SP',
    connections: '4.821',
  },
  {
    radius: 190,
    angle: 32,
    size: 4.5,
    delay: 0.9,
    city: 'Salvador',
    state: 'BA',
    connections: '1.744',
  },
  {
    radius: 190,
    angle: 152,
    size: 3,
    delay: 2.1,
    city: 'Curitiba',
    state: 'PR',
    connections: '1.362',
  },
  {
    radius: 290,
    angle: 105,
    size: 3.6,
    delay: 1.5,
    city: 'Brasília',
    state: 'DF',
    connections: '1.589',
  },
  {
    radius: 290,
    angle: 18,
    size: 3,
    delay: 2.8,
    city: 'Recife',
    state: 'PE',
    connections: '1.284',
  },
  {
    radius: 420,
    angle: 58,
    size: 4,
    delay: 0.5,
    city: 'Fortaleza',
    state: 'CE',
    connections: '1.103',
  },
  {
    radius: 420,
    angle: 137,
    size: 2.8,
    delay: 3.4,
    city: 'Manaus',
    state: 'AM',
    connections: '842',
  },
];

export const particles = Array.from({ length: 34 }, (_, index) => ({
  left: (index * 29) % 100,
  top: 18 + ((index * 17) % 76),
  size: 1 + (index % 3),
  duration: 5 + (index % 6),
  delay: (index % 8) * 0.65,
}));
