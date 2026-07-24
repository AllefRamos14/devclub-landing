import { useId, useRef } from 'react';

import {
  BadgeCheck,
  Building2,
  Globe2,
  MapPin,
  Radio,
  Satellite,
  Signal,
  Sparkles,
  Users,
  Wifi,
} from 'lucide-react';

import {
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';

import { Container, Eyebrow } from '../../components/ui/Layout';

import {
  particles,
  radarNodes,
  radii,
} from './data';

import {
  CX,
  CY,
  polar,
} from './helpers';

import {
  ClosingEyebrow,
  ClosingMessage,
  ClosingTitle,
  ConnectionLine,
  CoreGlow,
  CoreOrbitInner,
  CoreOrbitOuter,
  CorePanel,
  CorePanelLabel,
  CorePanelTop,
  CorePanelValue,
  EyebrowWrapper,
  FloatingCard,
  FloatingCardHeader,
  FloatingDescription,
  FloatingStatus,
  FloatingValue,
  Header,
  HeaderBadge,
  HeaderBadges,
  HeaderMain,
  HeaderSide,
  Lead,
  LeftAmbient,
  NodeCore,
  NodeGlow,
  NodeLabel,
  NodeValue,
  Particle,
  ParticleLayer,
  RadarCoordinates,
  RadarMotionWrap,
  RadarSection,
  RadarShell,
  RadarStage,
  RadarSvg,
  RadarTopbar,
  RadarTopbarTitle,
  Reflection,
  RightAmbient,
  StatCard,
  StatIcon,
  StatLabel,
  StatsGrid,
  StatusBar,
  StatusContent,
  StatusDescription,
  StatusIcon,
  StatusLabel,
  StatusMain,
  StatusRight,
  StatValue,
  StoryBadge,
  StoryBlock,
  StoryContent,
  StoryIntro,
  StoryLead,
  StoryTitle,
  SweepGroup,
  Title,
} from './styles';

export function Alcance() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const rawId = useId();
  const svgId = rawId.replace(/:/g, '');

  const domeFillId = `${svgId}-dome-fill`;
  const coreOuterId = `${svgId}-core-outer`;
  const coreInnerId = `${svgId}-core-inner`;
  const nodeGlowId = `${svgId}-node-glow`;
  const sweepFadeId = `${svgId}-sweep-fade`;
  const arcFadeId = `${svgId}-arc-fade`;
  const connectionId = `${svgId}-connection`;
  const blurId = `${svgId}-blur`;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    mass: 0.45,
  });

  const titleY = useTransform(
    smoothProgress,
    [0, 0.5],
    prefersReducedMotion ? [0, 0] : [26, -12],
  );

  const radarY = useTransform(
    smoothProgress,
    [0.12, 0.82],
    prefersReducedMotion ? [0, 0] : [30, -18],
  );

  return (
    <RadarSection
      id="alcance"
      ref={sectionRef}
    >
      <LeftAmbient />
      <RightAmbient />

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
              <Eyebrow>rede devclub</Eyebrow>
            </EyebrowWrapper>

            <Title
              style={{
                y: titleY,
              }}
              initial={
                prefersReducedMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 26,
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
                duration: 0.78,
                delay: 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              O talento está em todo lugar.{' '}
              <span>A oportunidade também deveria estar.</span>
            </Title>
          </HeaderMain>

          <HeaderSide
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
              duration: 0.72,
              delay: 0.18,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Lead>
              Não importa a cidade, a profissão anterior ou o ponto de partida.
              Quando conhecimento, comunidade e oportunidade se encontram,{' '}
              <strong>
                novas histórias começam a ser escritas.
              </strong>
            </Lead>

            <HeaderBadges>
              <HeaderBadge>
                <Globe2 strokeWidth={1.7} />
                alcance nacional
              </HeaderBadge>

              <HeaderBadge>
                <Users strokeWidth={1.7} />
                comunidade ativa
              </HeaderBadge>

              <HeaderBadge>
                <Building2 strokeWidth={1.7} />
                mercado conectado
              </HeaderBadge>
            </HeaderBadges>
          </HeaderSide>
        </Header>

        <StatusBar
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
            margin: '-60px',
          }}
          transition={{
            duration: 0.68,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <StatusMain>
            <StatusIcon>
              <Signal strokeWidth={1.7} />
            </StatusIcon>

            <StatusContent>
              <StatusLabel>rede devclub online</StatusLabel>

              <StatusDescription>
                Novas conexões, projetos e oportunidades surgindo agora.
              </StatusDescription>
            </StatusContent>
          </StatusMain>

          <StatusRight>monitoramento em tempo real</StatusRight>
        </StatusBar>

        <RadarShell>
          <RadarTopbar>
            <RadarTopbarTitle>
              <Radio strokeWidth={1.7} />
              mapa de conexões
            </RadarTopbarTitle>

            <RadarCoordinates>
              brasil · 14.2350° s · 51.9253° w
            </RadarCoordinates>
          </RadarTopbar>

          <ParticleLayer aria-hidden="true">
            {particles.map((particle, index) => (
              <Particle
                key={`particle-${index}`}
                $left={particle.left}
                $top={particle.top}
                $size={particle.size}
                $duration={particle.duration}
                $delay={particle.delay}
              />
            ))}
          </ParticleLayer>

          <RadarStage>
            <RadarMotionWrap
              style={{
                y: radarY,
              }}
              initial={
                prefersReducedMotion
                  ? false
                  : {
                      opacity: 0,
                      scale: 0.92,
                    }
              }
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
                margin: '-90px',
              }}
              transition={{
                duration: 1.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <RadarSvg
                viewBox="0 0 1100 520"
                preserveAspectRatio="xMidYMax meet"
                role="img"
                aria-label="Rede nacional de alunos e empresas conectadas pelo DevClub"
              >
                <defs>
                  <radialGradient
                    id={domeFillId}
                    cx="50%"
                    cy="100%"
                    r="85%"
                  >
                    <stop
                      offset="0%"
                      stopColor="#8A6BFF"
                      stopOpacity="0.34"
                    />

                    <stop
                      offset="34%"
                      stopColor="#6247CC"
                      stopOpacity="0.16"
                    />

                    <stop
                      offset="70%"
                      stopColor="#332966"
                      stopOpacity="0.05"
                    />

                    <stop
                      offset="100%"
                      stopColor="#0A0A0F"
                      stopOpacity="0"
                    />
                  </radialGradient>

                  <radialGradient
                    id={coreOuterId}
                    cx="50%"
                    cy="50%"
                    r="50%"
                  >
                    <stop
                      offset="0%"
                      stopColor="#D3CBFF"
                      stopOpacity="0.66"
                    />

                    <stop
                      offset="100%"
                      stopColor="#7C5CFF"
                      stopOpacity="0"
                    />
                  </radialGradient>

                  <radialGradient
                    id={coreInnerId}
                    cx="50%"
                    cy="50%"
                    r="50%"
                  >
                    <stop
                      offset="0%"
                      stopColor="#FFFFFF"
                      stopOpacity="1"
                    />

                    <stop
                      offset="43%"
                      stopColor="#D9D2FF"
                      stopOpacity="0.94"
                    />

                    <stop
                      offset="100%"
                      stopColor="#7C5CFF"
                      stopOpacity="0"
                    />
                  </radialGradient>

                  <radialGradient
                    id={nodeGlowId}
                    cx="50%"
                    cy="50%"
                    r="50%"
                  >
                    <stop
                      offset="0%"
                      stopColor="#F1EEFF"
                      stopOpacity="1"
                    />

                    <stop
                      offset="100%"
                      stopColor="#8A6BFF"
                      stopOpacity="0"
                    />
                  </radialGradient>

                  <linearGradient
                    id={sweepFadeId}
                    x1="0%"
                    y1="100%"
                    x2="0%"
                    y2="0%"
                  >
                    <stop
                      offset="0%"
                      stopColor="#C8BFFF"
                      stopOpacity="0.62"
                    />

                    <stop
                      offset="100%"
                      stopColor="#B8AEFF"
                      stopOpacity="0"
                    />
                  </linearGradient>

                  <linearGradient
                    id={arcFadeId}
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop
                      offset="0%"
                      stopColor="#3A3560"
                      stopOpacity="0"
                    />

                    <stop
                      offset="50%"
                      stopColor="#685EAA"
                      stopOpacity="0.72"
                    />

                    <stop
                      offset="100%"
                      stopColor="#3A3560"
                      stopOpacity="0"
                    />
                  </linearGradient>

                  <linearGradient
                    id={connectionId}
                    x1="0%"
                    y1="100%"
                    x2="50%"
                    y2="0%"
                  >
                    <stop
                      offset="0%"
                      stopColor="#7C5CFF"
                      stopOpacity="0.85"
                    />

                    <stop
                      offset="100%"
                      stopColor="#D7D0FF"
                      stopOpacity="0.2"
                    />
                  </linearGradient>

                  <filter
                    id={blurId}
                    x="-50%"
                    y="-50%"
                    width="200%"
                    height="200%"
                  >
                    <feGaussianBlur stdDeviation="0.65" />
                  </filter>
                </defs>

                <path
                  d={`M ${CX - 420} ${CY} A 420 420 0 0 1 ${
                    CX + 420
                  } ${CY} Z`}
                  fill={`url(#${domeFillId})`}
                />

                {radii.map((radius, index) => (
                  <path
                    key={radius}
                    d={`M ${
                      CX - radius
                    } ${CY} A ${radius} ${radius} 0 0 1 ${
                      CX + radius
                    } ${CY}`}
                    fill="none"
                    stroke={`url(#${arcFadeId})`}
                    strokeWidth={index === radii.length - 1 ? 1 : 0.75}
                    opacity={0.5 + index * 0.1}
                    filter={`url(#${blurId})`}
                  />
                ))}

                {[30, 60, 90, 120, 150].map((angle) => {
                  const point = polar(420, angle);

                  return (
                    <line
                      key={angle}
                      x1={CX}
                      y1={CY}
                      x2={point.x}
                      y2={point.y}
                      stroke="#36305B"
                      strokeWidth={0.65}
                      opacity={angle === 90 ? 0.76 : 0.48}
                    />
                  );
                })}

                <line
                  x1={CX - 445}
                  y1={CY}
                  x2={CX + 445}
                  y2={CY}
                  stroke="#3A355D"
                  strokeWidth={0.9}
                  opacity={0.78}
                />

                {radarNodes.map((node) => {
                  const point = polar(node.radius, node.angle);

                  return (
                    <ConnectionLine
                      key={`line-${node.city}`}
                      x1={CX}
                      y1={CY}
                      x2={point.x}
                      y2={point.y}
                      stroke={`url(#${connectionId})`}
                      strokeWidth={0.9}
                      opacity={0.42}
                      $delay={node.delay}
                    />
                  );
                })}

                <SweepGroup>
                  <path
                    d={`M ${CX} ${CY} L ${
                      CX - 28
                    } ${CY - 418} A 420 420 0 0 1 ${
                      CX + 58
                    } ${CY - 414} Z`}
                    fill={`url(#${sweepFadeId})`}
                    opacity={0.63}
                  />

                  <line
                    x1={CX}
                    y1={CY}
                    x2={CX + 15}
                    y2={CY - 417}
                    stroke="#E1DCFF"
                    strokeWidth={0.9}
                    opacity={0.52}
                  />
                </SweepGroup>

                {radarNodes.map((node) => {
                  const point = polar(node.radius, node.angle);

                  return (
                    <g key={`${node.city}-${node.state}`}>
                      <NodeGlow
                        cx={point.x}
                        cy={point.y}
                        r={node.size * 3.8}
                        fill={`url(#${nodeGlowId})`}
                        $delay={node.delay}
                      />

                      <NodeCore
                        cx={point.x}
                        cy={point.y}
                        r={node.size}
                        fill="#FFFFFF"
                        $delay={node.delay}
                      />

                      <NodeLabel
                        x={point.x + 12}
                        y={point.y - 11}
                      >
                        {node.city} · {node.state}
                      </NodeLabel>

                      <NodeValue
                        x={point.x + 12}
                        y={point.y + 1}
                      >
                        {node.connections} conexões
                      </NodeValue>
                    </g>
                  );
                })}

                <CoreGlow
                  cx={CX}
                  cy={CY}
                  r={88}
                  fill={`url(#${coreOuterId})`}
                />

                <CoreOrbitOuter>
                  <circle
                    cx={CX}
                    cy={CY}
                    r={54}
                    fill="none"
                    stroke="#9A86FF"
                    strokeWidth={0.9}
                    strokeDasharray="8 14"
                    opacity={0.5}
                  />

                  <circle
                    cx={CX}
                    cy={CY - 54}
                    r={3}
                    fill="#FFFFFF"
                  />
                </CoreOrbitOuter>

                <CoreOrbitInner>
                  <circle
                    cx={CX}
                    cy={CY}
                    r={40}
                    fill="none"
                    stroke="#C9BFFF"
                    strokeWidth={0.7}
                    strokeDasharray="3 8"
                    opacity={0.55}
                  />

                  <circle
                    cx={CX + 40}
                    cy={CY}
                    r={2.5}
                    fill="#A993FF"
                  />
                </CoreOrbitInner>

                <circle
                  cx={CX}
                  cy={CY}
                  r={31}
                  fill={`url(#${coreInnerId})`}
                />

                <circle
                  cx={CX}
                  cy={CY}
                  r={9}
                  fill="#FFFFFF"
                />

                <circle
                  cx={CX}
                  cy={CY}
                  r={3}
                  fill="#7C5CFF"
                />
              </RadarSvg>
            </RadarMotionWrap>
          </RadarStage>

          <FloatingCard
            $position="left"
            initial={
              prefersReducedMotion
                ? false
                : {
                    opacity: 0,
                    x: -22,
                    scale: 0.96,
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <FloatingCardHeader>
              <MapPin strokeWidth={1.7} />
              presença nacional
            </FloatingCardHeader>

            <FloatingValue>26 estados</FloatingValue>

            <FloatingDescription>
              Alunos conectados em capitais e cidades do interior.
            </FloatingDescription>

            <FloatingStatus>rede ativa</FloatingStatus>
          </FloatingCard>

          <FloatingCard
            $position="right"
            initial={
              prefersReducedMotion
                ? false
                : {
                    opacity: 0,
                    x: 22,
                    scale: 0.96,
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.48,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <FloatingCardHeader>
              <Building2 strokeWidth={1.7} />
              mercado
            </FloatingCardHeader>

            <FloatingValue>+300</FloatingValue>

            <FloatingDescription>
              Empresas conectadas à comunidade DevClub.
            </FloatingDescription>

            <FloatingStatus>novas oportunidades</FloatingStatus>
          </FloatingCard>

          <CorePanel
            initial={
              prefersReducedMotion
                ? false
                : {
                    opacity: 0,
                    y: 20,
                    scale: 0.94,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.58,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <CorePanelTop>
              <Satellite strokeWidth={1.7} />
              devclub network
            </CorePanelTop>

            <CorePanelValue>+25 mil</CorePanelValue>

            <CorePanelLabel>
              histórias, talentos e novas possibilidades conectadas.
            </CorePanelLabel>
          </CorePanel>

          <Reflection />
        </RadarShell>

        <StoryBlock
          initial={
            prefersReducedMotion
              ? false
              : {
                  opacity: 0,
                  y: 26,
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
            duration: 0.78,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <StoryIntro>
            <StoryBadge>
              <BadgeCheck strokeWidth={1.7} />
              alcance nacional
            </StoryBadge>

            <StoryTitle>
              Uma decisão pode começar em qualquer lugar.
            </StoryTitle>
          </StoryIntro>

          <StoryContent>
            <StoryLead>
              De norte a sul, pessoas estão transformando curiosidade em
              conhecimento, conhecimento em projetos e projetos em novas
              carreiras.{' '}
              <strong>
                A distância deixou de limitar até onde alguém pode chegar.
              </strong>
            </StoryLead>

            <StatsGrid>
              <StatCard>
                <StatIcon>
                  <Users strokeWidth={1.7} />
                </StatIcon>

                <StatValue>+25 mil</StatValue>

                <StatLabel>
                  histórias conectadas
                </StatLabel>
              </StatCard>

              <StatCard>
                <StatIcon>
                  <Building2 strokeWidth={1.7} />
                </StatIcon>

                <StatValue>+300</StatValue>

                <StatLabel>
                  empresas na rede
                </StatLabel>
              </StatCard>

              <StatCard>
                <StatIcon>
                  <Wifi strokeWidth={1.7} />
                </StatIcon>

                <StatValue>24h</StatValue>

                <StatLabel>
                  comunidade online
                </StatLabel>
              </StatCard>
            </StatsGrid>

            <ClosingMessage
              initial={
                prefersReducedMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 20,
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
                margin: '-70px',
              }}
              transition={{
                duration: 0.72,
                delay: 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <ClosingEyebrow>
                <Sparkles strokeWidth={1.7} />
                você está aqui
              </ClosingEyebrow>

              <ClosingTitle>
                A próxima conexão pode ser a sua.
              </ClosingTitle>
            </ClosingMessage>
          </StoryContent>
        </StoryBlock>
      </Container>
    </RadarSection>
  );
}
