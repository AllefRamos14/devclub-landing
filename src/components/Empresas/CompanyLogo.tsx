import {
  CompanyLogoImage,
  CompanyLogoWrapper,
} from './styles';

interface CompanyLogoProps {
  name: string;
  logo: string;
  color: string;
  colorRgb: string;
  size?: 'small' | 'large';
}

export function CompanyLogo({
  name,
  logo,
  color,
  colorRgb,
  size = 'small',
}: CompanyLogoProps) {
  return (
    <CompanyLogoWrapper
      $brandColor={color}
      $brandColorRgb={colorRgb}
      $size={size}
      data-fallback={name.slice(0, 2).toUpperCase()}
      aria-hidden="true"
    >
      <CompanyLogoImage
        src={logo}
        alt=""
        draggable={false}
        loading="lazy"
        onError={event => {
          event.currentTarget.style.display = 'none';
        }}
      />
    </CompanyLogoWrapper>
  );
}
