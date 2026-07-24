import {
  CheckCircle2,
} from 'lucide-react';

import {
  useReducedMotion,
} from 'framer-motion';

import {
  Container,
  Eyebrow,
} from '../ui/Layout';

import { Dashboard } from './Dashboard';

import {
  Description,
  EyebrowWrapper,
  Glow,
  GridOverlay,
  Header,
  HeaderMain,
  HeaderSide,
  NumbersSection,
  StatusBadge,
  Title,
} from './styles';

export function Numeros() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <NumbersSection id="numeros">
      <GridOverlay />
      <Glow />

      <Container>
        <Header>
          <HeaderMain>
            <EyebrowWrapper
              initial={
                prefersReducedMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 14,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.7,
              }}
              transition={{
                duration: 0.55,
              }}
            >
              <Eyebrow>impacto em números</Eyebrow>
            </EyebrowWrapper>

            <Title
              initial={
                prefersReducedMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 24,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{
                duration: 0.7,
                delay: 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              Resultados que não cabem apenas em{' '}
              <span>linhas de código.</span>
            </Title>
          </HeaderMain>

          <HeaderSide
            initial={
              prefersReducedMotion
                ? false
                : {
                    opacity: 0,
                    y: 18,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.65,
              delay: 0.16,
            }}
          >
            <Description>
              Cada número representa uma pessoa que decidiu começar,
              evoluir e construir uma carreira em tecnologia.{' '}
              <strong>
                O próximo resultado pode ser o seu.
              </strong>
            </Description>

            <StatusBadge>
              <CheckCircle2 strokeWidth={1.8} />
              dados reais da comunidade
            </StatusBadge>
          </HeaderSide>
        </Header>

        <Dashboard reducedMotion={prefersReducedMotion} />
      </Container>
    </NumbersSection>
  );
}
