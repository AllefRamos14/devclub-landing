import { Cpu } from 'lucide-react';

import {
  AuthorityDescription,
  AuthorityIntro,
  AuthorityLabel,
  AuthorityPanel as AuthorityPanelContainer,
  AuthorityStat,
  AuthorityStats,
  AuthorityTitle,
  AuthorityValue,
} from './styles';

interface AuthorityPanelProps {
  reducedMotion: boolean | null;
}

export function AuthorityPanel({
  reducedMotion,
}: AuthorityPanelProps) {
  return (
    <AuthorityPanelContainer
      initial={
        reducedMotion
          ? false
          : {
              opacity: 0,
              y: 24,
              scale: 0.99,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        margin: '-80px',
      }}
      transition={{
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <AuthorityIntro>
        <AuthorityLabel>
          <Cpu strokeWidth={1.7} />
          experiência coletiva
        </AuthorityLabel>

        <AuthorityTitle>
          Conhecimento aplicado em produtos reais.
        </AuthorityTitle>
      </AuthorityIntro>

      <AuthorityStats>
        <AuthorityStat>
          <AuthorityValue>+30 anos</AuthorityValue>
          <AuthorityDescription>
            de experiência somada em tecnologia.
          </AuthorityDescription>
        </AuthorityStat>

        <AuthorityStat>
          <AuthorityValue>Produção</AuthorityValue>
          <AuthorityDescription>
            decisões técnicas testadas em projetos reais.
          </AuthorityDescription>
        </AuthorityStat>

        <AuthorityStat>
          <AuthorityValue>Prática</AuthorityValue>
          <AuthorityDescription>
            ensino aplicado desde o primeiro projeto.
          </AuthorityDescription>
        </AuthorityStat>
      </AuthorityStats>
    </AuthorityPanelContainer>
  );
}
