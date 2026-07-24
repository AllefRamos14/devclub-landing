import {
  useRef,
  type MouseEvent as ReactMouseEvent,
} from 'react';

import { Target } from 'lucide-react';

import {
  useReducedMotion,
  useScroll,
  useSpring,
} from 'framer-motion';

import { Container, Eyebrow } from '../ui/Layout';

import { ManifestCard } from './ManifestCard';
import { Timeline } from './Timeline';

import {
  BottomIcon,
  BottomMessage,
  BottomText,
  ContentGrid,
  EyebrowWrapper,
  GreenLight,
  IntroColumn,
  Lead,
  PurpleLight,
  SectionBg,
  Title,
} from './styles';

export function QuemSomos() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 70%', 'end 35%'],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.35,
  });

  function handleSpotlight(
    event: ReactMouseEvent<HTMLDivElement>,
  ) {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${mouseX}px`);
    card.style.setProperty('--mouse-y', `${mouseY}px`);
  }

  return (
    <SectionBg
      id="quem-somos"
      ref={sectionRef}
    >
      <PurpleLight />
      <GreenLight />

      <Container>
        <ContentGrid>
          <IntroColumn>
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
                margin: '-60px',
              }}
              transition={{
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Eyebrow>quem somos</Eyebrow>
            </EyebrowWrapper>

            <Title
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
                margin: '-70px',
              }}
              transition={{
                duration: 0.75,
                delay: 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              Uma história construída com{' '}
              <span>código, coragem e transformação.</span>
            </Title>

            <Lead
              initial={
                prefersReducedMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 20,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: '-70px',
              }}
              transition={{
                duration: 0.7,
                delay: 0.14,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              Antes de ensinar programação, existiu uma mudança de carreira,
              meses de estudo e uma primeira oportunidade. O DevClub nasceu
              dessa experiência real e hoje ajuda milhares de pessoas a{' '}
              <strong>escreverem uma nova história.</strong>
            </Lead>

            <ManifestCard
              initial={
                prefersReducedMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 20,
                      scale: 0.985,
                    }
              }
            />
          </IntroColumn>

          <Timeline
            progress={progress}
            prefersReducedMotion={prefersReducedMotion}
            onSpotlight={handleSpotlight}
          />
        </ContentGrid>

        <BottomMessage
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
            margin: '-80px',
          }}
          transition={{
            duration: 0.75,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <BottomText>
            Essa história começou com uma decisão.{' '}
            <span>A próxima transformação pode começar com a sua.</span>
          </BottomText>

          <BottomIcon aria-hidden="true">
            <Target strokeWidth={1.7} />
          </BottomIcon>
        </BottomMessage>
      </Container>
    </SectionBg>
  );
}
