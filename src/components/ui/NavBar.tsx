import {
  useEffect,
  useState,
} from 'react';

import styled from 'styled-components';

import { Container } from './Layout';

type BarProps = {
  $active: boolean;
};

type ToggleProps = {
  $open: boolean;
};

type LineProps = {
  $open: boolean;
  $line: 'top' | 'middle' | 'bottom';
};

type PanelProps = {
  $open: boolean;
};

const Bar = styled.header<BarProps>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;

  padding-top: ${({ $active }) => ($active ? '10px' : '18px')};
  padding-bottom: ${({ $active }) => ($active ? '10px' : '18px')};

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ $active, theme }) =>
    $active ? theme.color.border : 'transparent'};

  background-color: ${({ $active }) =>
    $active ? 'rgba(10, 10, 15, 0.82)' : 'rgba(10, 10, 15, 0)'};

  box-shadow: ${({ $active }) =>
    $active ? '0 18px 70px rgba(0, 0, 0, 0.24)' : 'none'};

  backdrop-filter: ${({ $active }) =>
    $active ? 'blur(20px)' : 'blur(0)'};

  -webkit-backdrop-filter: ${({ $active }) =>
    $active ? 'blur(20px)' : 'blur(0)'};

  transition:
    padding 300ms ease,
    background-color 300ms ease,
    border-color 300ms ease,
    box-shadow 300ms ease,
    backdrop-filter 300ms ease;
`;

const Row = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  min-height: 46px;
`;

const Logo = styled.a`
  display: inline-flex;
  align-items: center;

  gap: 9px;

  color: ${({ theme }) => theme.color.text};

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 1.08rem;
  font-weight: ${({ theme }) => theme.weight.bold};
  letter-spacing: -0.04em;

  transition:
    opacity ${({ theme }) => theme.transition.fast},
    transform ${({ theme }) => theme.transition.fast};

  span {
    color: ${({ theme }) => theme.color.accent};
  }

  &:hover {
    opacity: 0.88;
    transform: translateY(-1px);
  }
`;

const LogoStatus = styled.i`
  display: inline-block;

  width: 7px;
  min-width: 7px;
  height: 7px;

  border-radius: 50%;

  background-color: ${({ theme }) => theme.color.success};

  box-shadow:
    0 0 0 4px rgba(0, 245, 160, 0.06),
    0 0 16px rgba(0, 245, 160, 0.5);
`;

const DesktopLinks = styled.nav`
  position: absolute;
  left: 50%;

  display: flex;
  align-items: center;

  gap: 34px;

  transform: translateX(-50%);

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const NavLink = styled.a`
  position: relative;

  padding-top: 10px;
  padding-bottom: 10px;

  color: ${({ theme }) => theme.color.textMuted};

  font-size: 0.86rem;
  font-weight: ${({ theme }) => theme.weight.medium};

  transition: color ${({ theme }) => theme.transition.fast};

  &::after {
    content: '';

    position: absolute;
    right: 0;
    bottom: 3px;
    left: 0;

    height: 1px;

    background-color: ${({ theme }) => theme.color.accent};

    opacity: 0;
    transform: scaleX(0.2);

    transition:
      opacity ${({ theme }) => theme.transition.fast},
      transform ${({ theme }) => theme.transition.fast};
  }

  &:hover {
    color: ${({ theme }) => theme.color.text};
  }

  &:hover::after {
    opacity: 1;
    transform: scaleX(1);
  }
`;

const DesktopActions = styled.div`
  display: flex;
  align-items: center;

  gap: ${({ theme }) => theme.space(3)};

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const LoginLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: 42px;
  padding-right: ${({ theme }) => theme.space(4)};
  padding-left: ${({ theme }) => theme.space(4)};

  color: ${({ theme }) => theme.color.textMuted};

  font-size: 0.84rem;
  font-weight: ${({ theme }) => theme.weight.medium};

  transition: color ${({ theme }) => theme.transition.fast};

  &:hover {
    color: ${({ theme }) => theme.color.text};
  }
`;

const NavCTA = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 9px;
  min-height: 42px;
  padding-right: ${({ theme }) => theme.space(5)};
  padding-left: ${({ theme }) => theme.space(5)};

  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: ${({ theme }) => theme.radius.pill};

  background-color: ${({ theme }) => theme.color.accent};
  color: #ffffff;

  box-shadow:
    0 12px 32px rgba(124, 92, 255, 0.22),
    inset 0 1px 0 rgba(255, 255, 255, 0.18);

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 0.78rem;
  font-weight: ${({ theme }) => theme.weight.semibold};

  transition:
    transform ${({ theme }) => theme.transition.fast},
    box-shadow ${({ theme }) => theme.transition.base};

  &:hover {
    box-shadow:
      0 18px 46px rgba(124, 92, 255, 0.34),
      inset 0 1px 0 rgba(255, 255, 255, 0.22);

    transform: translateY(-2px);
  }
`;

const MobileMenuButton = styled.button<ToggleProps>`
  position: relative;

  display: none;

  width: 44px;
  height: 44px;
  padding: 0;

  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 13px;

  background-color: ${({ $open }) =>
    $open ? 'rgba(124, 92, 255, 0.08)' : 'rgba(255, 255, 255, 0.025)'};

  color: ${({ theme }) => theme.color.text};

  cursor: pointer;

  @media screen and (max-width: 900px) {
    display: block;
  }
`;

const MenuLine = styled.span<LineProps>`
  position: absolute;
  top: 50%;
  left: 50%;

  width: 18px;
  height: 1px;

  border-radius: 999px;

  background-color: currentColor;

  opacity: ${({ $line, $open }) =>
    $line === 'middle' && $open ? 0 : 1};

  transform: ${({ $line, $open }) => {
    if ($open && $line === 'top') {
      return 'translate(-50%, -50%) rotate(45deg)';
    }

    if ($open && $line === 'bottom') {
      return 'translate(-50%, -50%) rotate(-45deg)';
    }

    if ($line === 'top') {
      return 'translate(-50%, -6px)';
    }

    if ($line === 'bottom') {
      return 'translate(-50%, 5px)';
    }

    return 'translate(-50%, -50%)';
  }};

  transition:
    transform 250ms ease,
    opacity 200ms ease;
`;

const MobilePanel = styled.div<PanelProps>`
  display: none;

  @media screen and (max-width: 900px) {
    display: ${({ $open }) => ($open ? 'block' : 'none')};
  }
`;

const MobileContent = styled.nav`
  display: flex;
  flex-direction: column;

  gap: 6px;
  padding-top: ${({ theme }) => theme.space(5)};
  padding-bottom: ${({ theme }) => theme.space(4)};

  border-top: 1px solid ${({ theme }) => theme.color.border};
`;

const MobileLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;

  min-height: 50px;
  padding-right: ${({ theme }) => theme.space(4)};
  padding-left: ${({ theme }) => theme.space(4)};

  border-radius: 13px;

  color: ${({ theme }) => theme.color.textMuted};

  font-size: 0.95rem;
  font-weight: ${({ theme }) => theme.weight.medium};

  transition:
    color ${({ theme }) => theme.transition.fast},
    background-color ${({ theme }) => theme.transition.fast};

  &::after {
    content: '↗';

    color: ${({ theme }) => theme.color.textFaint};

    font-family: ${({ theme }) => theme.font.mono};
    font-size: 0.8rem;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.03);
    color: ${({ theme }) => theme.color.text};
  }
`;

const MobileCTA = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: 52px;
  margin-top: ${({ theme }) => theme.space(3)};

  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: ${({ theme }) => theme.radius.pill};

  background-color: ${({ theme }) => theme.color.accent};
  color: #ffffff;

  box-shadow: 0 16px 40px rgba(124, 92, 255, 0.24);

  font-family: ${({ theme }) => theme.font.mono};
  font-size: 0.82rem;
  font-weight: ${({ theme }) => theme.weight.semibold};
`;

const navItems = [
  {
    label: 'Formações',
    href: '#formacoes',
  },
  {
    label: 'Quem somos',
    href: '#quem-somos',
  },
  {
    label: 'Tutores',
    href: '#tutores',
  },
  {
    label: 'Alunos',
    href: '#alunos',
  },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();

    window.addEventListener('scroll', onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen
      ? 'hidden'
      : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const active = scrolled || menuOpen;

  return (
    <Bar $active={active}>
      <Container>
        <Row>
          <Logo
            href="#top"
            aria-label="DevClub - página inicial"
            onClick={closeMenu}
          >
            DevClub<span>/&gt;</span>
            <LogoStatus />
          </Logo>

          <DesktopLinks aria-label="Navegação principal">
            {navItems.map(item => (
              <NavLink
                key={item.href}
                href={item.href}
              >
                {item.label}
              </NavLink>
            ))}
          </DesktopLinks>

          <DesktopActions>
            <LoginLink href="#alunos">
              Resultados
            </LoginLink>

            <NavCTA href="#formacoes">
              Começar agora
            </NavCTA>
          </DesktopActions>

          <MobileMenuButton
            type="button"
            $open={menuOpen}
            aria-label={
              menuOpen
                ? 'Fechar menu de navegação'
                : 'Abrir menu de navegação'
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => {
              setMenuOpen(current => !current);
            }}
          >
            <MenuLine
              $line="top"
              $open={menuOpen}
            />

            <MenuLine
              $line="middle"
              $open={menuOpen}
            />

            <MenuLine
              $line="bottom"
              $open={menuOpen}
            />
          </MobileMenuButton>
        </Row>

        <MobilePanel
          id="mobile-navigation"
          $open={menuOpen}
        >
          <MobileContent aria-label="Navegação mobile">
            {navItems.map(item => (
              <MobileLink
                key={item.href}
                href={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </MobileLink>
            ))}

            <MobileCTA
              href="#formacoes"
              onClick={closeMenu}
            >
              Quero começar agora
            </MobileCTA>
          </MobileContent>
        </MobilePanel>
      </Container>
    </Bar>
  );
}