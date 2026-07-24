export const CX = 550;
export const CY = 500;

export function polar(radius: number, angleDeg: number) {
  const angle = (angleDeg * Math.PI) / 180;

  return {
    x: CX - radius * Math.cos(angle),
    y: CY - radius * Math.sin(angle),
  };
}
