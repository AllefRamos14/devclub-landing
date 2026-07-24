import {
  Building2,
  Check,
  Code2,
  Network,
  Terminal as TerminalIcon,
  Users,
} from 'lucide-react';

import { AnimatePresence, type MotionValue } from 'framer-motion';

import {
  featuredCompanies,
  innerNodeStyles,
  outerNodeStyles,
  particles,
} from './data';

import { useTalentTerminal } from '../../hooks/useTalentTerminal';
import { CompanyLogo } from './CompanyLogo';

import {
  CenterCard,
  CenterCategory,
  CenterDescription,
  CenterFooter,
  CenterFooterLabel,
  CenterHeader,
  CenterIndex,
  CenterName,
  CenterStatus,
  CodeLine,
  FloatingMetric,
  FloatingMetricLabel,
  FloatingMetricTop,
  FloatingMetricValue,
  OrbitInner,
  OrbitNode,
  OrbitOuter,
  Pagination,
  PaginationDot,
  Particle,
  ParticleLayer,
  Spotlight,
  SystemBar,
  SystemContent,
  SystemDescription,
  SystemIcon,
  SystemLabel,
  SystemMain,
  SystemStatus,
  TalentTerminal as TalentTerminalContainer,
  TerminalCenter,
  TerminalStatus,
  TerminalTitle,
  TerminalTopbar,
} from './styles';

interface TalentTerminalProps {
  prefersReducedMotion: boolean | null;
  terminalY: MotionValue<number>;
}

export function TalentTerminal({
  prefersReducedMotion,
  terminalY,
}: TalentTerminalProps) {
  const {
    terminalRef,
    activeCompany,
    smoothRotateX,
    smoothRotateY,
    smoothSpotlightX,
    smoothSpotlightY,
    handleTerminalMove,
    handleTerminalLeave,
  } = useTalentTerminal({
    prefersReducedMotion,
    companyCount: featuredCompanies.length,
  });

  const selectedCompany = featuredCompanies[activeCompany];

  return (
    <>
      <SystemBar>
        <SystemMain>
          <SystemIcon>
            <Network strokeWidth={1.7} />
          </SystemIcon>

          <SystemContent>
            <SystemLabel>devclub talent network</SystemLabel>
            <SystemDescription>
              Talentos conectados a empresas, produtos e oportunidades reais.
            </SystemDescription>
          </SystemContent>
        </SystemMain>

        <SystemStatus>conexões em tempo real</SystemStatus>
      </SystemBar>

      <TalentTerminalContainer
        ref={terminalRef}
        style={{ y: terminalY }}
        onMouseMove={handleTerminalMove}
        onMouseLeave={handleTerminalLeave}
      >
        <Spotlight
          $brandColorRgb={selectedCompany.colorRgb}
          style={{ x: smoothSpotlightX, y: smoothSpotlightY }}
        />

        <TerminalTopbar>
          <TerminalTitle>
            <TerminalIcon strokeWidth={1.7} />
            career deployment terminal
          </TerminalTitle>
          <TerminalStatus>sistema online</TerminalStatus>
        </TerminalTopbar>

        <ParticleLayer aria-hidden="true">
          {particles.map((particle, index) => (
            <Particle key={`particle-${index}`} {...{
              $left: particle.left,
              $top: particle.top,
              $size: particle.size,
              $delay: particle.delay,
              $duration: particle.duration,
            }} />
          ))}
        </ParticleLayer>

        <OrbitOuter aria-hidden="true">
          {outerNodeStyles.map((nodeStyle, index) => (
            <OrbitNode key={`outer-node-${index}`} style={nodeStyle}>
              <Building2 strokeWidth={1.6} />
            </OrbitNode>
          ))}
        </OrbitOuter>

        <OrbitInner aria-hidden="true">
          {innerNodeStyles.map((nodeStyle, index) => (
            <OrbitNode key={`inner-node-${index}`} style={nodeStyle}>
              <Code2 strokeWidth={1.6} />
            </OrbitNode>
          ))}
        </OrbitInner>

        <TerminalCenter>
          <AnimatePresence mode="wait">
            <CenterCard
              key={selectedCompany.name}
              $brandColor={selectedCompany.color}
              $brandColorRgb={selectedCompany.colorRgb}
              style={{ rotateX: smoothRotateX, rotateY: smoothRotateY }}
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -12 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.42,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <CenterHeader>
                <CenterStatus
                  $brandColor={selectedCompany.color}
                  $brandColorRgb={selectedCompany.colorRgb}
                >
                  {selectedCompany.status}
                </CenterStatus>

                <CenterIndex>
                  0{activeCompany + 1} / 0{featuredCompanies.length}
                </CenterIndex>
              </CenterHeader>

              <CompanyLogo
                name={selectedCompany.name}
                logo={selectedCompany.logo}
                color={selectedCompany.color}
                colorRgb={selectedCompany.colorRgb}
                size="large"
              />

              <CenterCategory $brandColor={selectedCompany.color}>
                {selectedCompany.category}
              </CenterCategory>
              <CenterName>{selectedCompany.name}</CenterName>
              <CenterDescription>{selectedCompany.description}</CenterDescription>

              <CodeLine>
                <TerminalIcon size={14} strokeWidth={1.7} />
                <span>{selectedCompany.code}</span>
                <strong>// success</strong>
              </CodeLine>

              <CenterFooter>
                <CenterFooterLabel>
                  <Check strokeWidth={1.8} />
                  talento em produção
                </CenterFooterLabel>

                <Pagination>
                  {featuredCompanies.map((company, index) => (
                    <PaginationDot
                      key={company.name}
                      $active={index === activeCompany}
                      $brandColor={index === activeCompany ? selectedCompany.color : company.color}
                    />
                  ))}
                </Pagination>
              </CenterFooter>
            </CenterCard>
          </AnimatePresence>
        </TerminalCenter>

        <FloatingMetric $side="left">
          <FloatingMetricTop>
            <Users strokeWidth={1.7} />
            talentos
          </FloatingMetricTop>
          <FloatingMetricValue>+25 mil</FloatingMetricValue>
          <FloatingMetricLabel>pessoas impactadas pela comunidade.</FloatingMetricLabel>
        </FloatingMetric>

        <FloatingMetric $side="right">
          <FloatingMetricTop>
            <Building2 strokeWidth={1.7} />
            empresas
          </FloatingMetricTop>
          <FloatingMetricValue>+300</FloatingMetricValue>
          <FloatingMetricLabel>organizações conectadas aos nossos talentos.</FloatingMetricLabel>
        </FloatingMetric>
      </TalentTerminalContainer>
    </>
  );
}
