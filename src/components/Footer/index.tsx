import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

import { useReducedMotion } from 'framer-motion';

import { Container } from '../ui/Layout';

import {
  BackgroundGrid,
  CTAAccent,
  CTAActions,
  CTAInner,
  CTAOrb,
  CTASection,
  CTALead,
  CTATitle,
  Eyebrow,
  FloatingMark,
  PrimaryButton,
  SecondaryButton,
  TopGlow,
  TrustItem,
  TrustRow,
} from './styles';

export function CTAFinal() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <CTASection $noPadBottom>
      <BackgroundGrid />
      <TopGlow />

      <FloatingMark
        style={{
          top: '18%',
          left: '7%',
          fontSize: '3.6rem',
        }}
        animate={
          prefersReducedMotion
            ? undefined
            : {
                y: [0, -16, 0],
                rotate: [0, -3, 0],
              }
        }
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {'{'}
      </FloatingMark>

      <FloatingMark
        style={{
          top: '23%',
          right: '8%',
          fontSize: '3rem',
        }}
        animate={
          prefersReducedMotion
            ? undefined
            : {
                y: [0, 14, 0],
                rotate: [0, 3, 0],
              }
        }
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
      >
        {'}'}
      </FloatingMark>

      <FloatingMark
        style={{
          bottom: '12%',
          left: '11%',
          fontSize: '2.2rem',
        }}
        animate={
          prefersReducedMotion
            ? undefined
            : {
                y: [0, -10, 0],
              }
        }
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      >
        {'</>'}
      </FloatingMark>

      <FloatingMark
        style={{
          bottom: '16%',
          right: '13%',
          fontSize: '2rem',
        }}
        animate={
          prefersReducedMotion
            ? undefined
            : {
                y: [0, 12, 0],
              }
        }
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.5,
        }}
      >
        {'=>'}
      </FloatingMark>

      <Container>
        <CTAInner
          initial={
            prefersReducedMotion
              ? false
              : {
                  opacity: 0,
                  y: 40,
                  scale: 0.985,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <CTAAccent />

          <CTAOrb
            animate={
              prefersReducedMotion
                ? undefined
                : {
                    scale: [1, 1.12, 1],
                    opacity: [0.55, 0.9, 0.55],
                  }
            }
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <Eyebrow
            initial={
              prefersReducedMotion
                ? false
                : {
                    opacity: 0,
                    y: 12,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
          >
            <Sparkles strokeWidth={1.7} />
            seu próximo capítulo começa aqui
          </Eyebrow>

          <CTATitle
            initial={
              prefersReducedMotion
                ? false
                : {
                    opacity: 0,
                    y: 22,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.16,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            Sua próxima carreira começa com uma{' '}
            <span>linha de código.</span>
          </CTATitle>

          <CTALead
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
            }}
            transition={{
              duration: 0.65,
              delay: 0.24,
            }}
          >
            Sem pré-requisitos e sem enrolação. Um caminho
            estruturado, suporte de verdade e prática constante
            para você construir uma carreira em tecnologia.{' '}
            <strong>Comece no seu ritmo.</strong>
          </CTALead>

          <CTAActions
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
            }}
            transition={{
              duration: 0.65,
              delay: 0.32,
            }}
          >
            <PrimaryButton
              href="#formacoes"
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : {
                      y: -3,
                      scale: 1.02,
                    }
              }
              whileTap={
                prefersReducedMotion
                  ? undefined
                  : {
                      scale: 0.98,
                    }
              }
            >
              Quero começar agora
              <ArrowRight strokeWidth={1.8} />
            </PrimaryButton>

            <SecondaryButton
              href="#alunos"
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : {
                      y: -2,
                    }
              }
            >
              Ver histórias de alunos
            </SecondaryButton>
          </CTAActions>

          <TrustRow
            initial={
              prefersReducedMotion
                ? false
                : {
                    opacity: 0,
                  }
            }
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.42,
            }}
          >
            <TrustItem>
              <CheckCircle2 strokeWidth={1.8} />
              acesso imediato
            </TrustItem>

            <TrustItem>
              <CheckCircle2 strokeWidth={1.8} />
              comunidade ativa
            </TrustItem>

            <TrustItem>
              <CheckCircle2 strokeWidth={1.8} />
              conteúdo prático
            </TrustItem>
          </TrustRow>
        </CTAInner>
      </Container>
    </CTASection>
  );
}
