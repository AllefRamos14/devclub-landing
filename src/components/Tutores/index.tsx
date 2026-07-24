import { useRef, useState } from 'react';

import {
  BriefcaseBusiness,
  ShieldCheck,
  Users,
} from 'lucide-react';

import {
  LayoutGroup,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';

import { Container, Eyebrow } from '../ui/Layout';

import { AuthorityPanel } from './AuthorityPanel';
import { ExpertiseStrip } from './ExpertiseStrip';
import { FeaturedTutorCard } from './FeaturedTutorCard';
import { SpecialistTutorCard } from './SpecialistTutorCard';
import { TutorProfileModal } from './TutorProfileModal';

import { tutors } from './data';

import {
  EyebrowWrapper,
  GreenLight,
  Header,
  HeaderBadge,
  HeaderBadges,
  HeaderMain,
  HeaderSide,
  Lead,
  PurpleLight,
  SectionBg,
  SpecialistsGrid,
  Title,
  TutorsLayout,
} from './styles';

import type { Tutor } from './types';

export function Tutores() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const [selectedTutor, setSelectedTutor] =
    useState<Tutor | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 25,
    mass: 0.4,
  });

  const titleY = useTransform(
    smoothProgress,
    [0, 0.5],
    prefersReducedMotion ? [0, 0] : [24, -12],
  );

  const featuredTutor = tutors.find(
    (tutor) => tutor.featured,
  );

  const specialistTutors = tutors.filter(
    (tutor) => !tutor.featured,
  );

  return (
    <LayoutGroup id="tutors-layout">
      <SectionBg id="tutores" ref={sectionRef}>
        <PurpleLight />
        <GreenLight />

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
                  margin: '-60px',
                }}
                transition={{
                  duration: 0.55,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Eyebrow>especialistas</Eyebrow>
              </EyebrowWrapper>

              <Title
                style={{ y: titleY }}
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
                  margin: '-70px',
                }}
                transition={{
                  duration: 0.75,
                  delay: 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                Mentores que não apenas ensinam.{' '}
                <span>
                  Eles constroem, lideram e transformam.
                </span>
              </Title>
            </HeaderMain>

            <HeaderSide
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
                delay: 0.16,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Lead>
                Aprenda com profissionais que trabalham com
                tecnologia no mundo real, enfrentam desafios de
                produção e transformam essa experiência em um
                ensino{' '}
                <strong>
                  direto, prático e conectado ao mercado.
                </strong>
              </Lead>

              <HeaderBadges>
                <HeaderBadge>
                  <BriefcaseBusiness strokeWidth={1.7} />
                  mercado real
                </HeaderBadge>

                <HeaderBadge>
                  <ShieldCheck strokeWidth={1.7} />
                  conteúdo validado
                </HeaderBadge>

                <HeaderBadge>
                  <Users strokeWidth={1.7} />
                  suporte próximo
                </HeaderBadge>
              </HeaderBadges>
            </HeaderSide>
          </Header>

          <ExpertiseStrip
            reducedMotion={prefersReducedMotion}
          />

          <TutorsLayout>
            {featuredTutor && (
              <FeaturedTutorCard
                tutor={featuredTutor}
                reducedMotion={prefersReducedMotion}
                onSelect={setSelectedTutor}
              />
            )}

            <SpecialistsGrid>
              {specialistTutors.map((tutor, index) => (
                <SpecialistTutorCard
                  key={tutor.name}
                  tutor={tutor}
                  index={index}
                  reducedMotion={prefersReducedMotion}
                  onSelect={setSelectedTutor}
                />
              ))}
            </SpecialistsGrid>
          </TutorsLayout>

          <AuthorityPanel
            reducedMotion={prefersReducedMotion}
          />
        </Container>
      </SectionBg>

      <TutorProfileModal
        tutor={selectedTutor}
        reducedMotion={prefersReducedMotion}
        onClose={() => setSelectedTutor(null)}
      />
    </LayoutGroup>
  );
}