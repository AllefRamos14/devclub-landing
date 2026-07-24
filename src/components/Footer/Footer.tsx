import {
  BriefcaseBusiness,
  MessageCircle,
  Play,
} from 'lucide-react';

import { Container } from '../ui/Layout';

import { footerColumns } from './data';

import {
  BrandBlock,
  BrandDot,
  ColTitle,
  FooterBottom,
  FooterColumn,
  FooterGrid,
  FooterLink,
  FooterTagline,
  FooterWrap,
  Logo,
  SocialLink,
  SocialRow,
} from './styles';

export function Footer() {
  return (
    <FooterWrap>
      <Container>
        <FooterGrid>
          <BrandBlock>
            <Logo href="#top" aria-label="Ir para o início">
              DevClub<span>/&gt;</span>
              <BrandDot />
            </Logo>

            <FooterTagline>
              Formação prática em programação para quem quer
              construir uma carreira em tecnologia com direção,
              consistência e comunidade.
            </FooterTagline>

            <SocialRow>
              <SocialLink
                href="https://instagram.com/devclub"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
              >
                <MessageCircle strokeWidth={1.7} />
              </SocialLink>

              <SocialLink
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <BriefcaseBusiness strokeWidth={1.7} />
              </SocialLink>

              <SocialLink
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                title="YouTube"
              >
                <Play strokeWidth={1.7} />
              </SocialLink>
            </SocialRow>
          </BrandBlock>

          {footerColumns.map(column => (
            <FooterColumn key={column.title}>
              <ColTitle>{column.title}</ColTitle>

              {column.links.map(link => (
                <FooterLink
                  key={`${column.title}-${link.label}`}
                  href={link.href}
                >
                  {link.label}
                </FooterLink>
              ))}
            </FooterColumn>
          ))}
        </FooterGrid>

        <FooterBottom>
          <span>
            © {new Date().getFullYear()} DevClub. Todos os
            direitos reservados.
          </span>

          <span>
            React · TypeScript · styled-components
          </span>
        </FooterBottom>
      </Container>
    </FooterWrap>
  );
}
