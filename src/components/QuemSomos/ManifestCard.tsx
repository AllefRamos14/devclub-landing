import { Sparkles } from 'lucide-react';
import type { MotionProps } from 'framer-motion';

import {
  ManifestCard as ManifestCardContainer,
  ManifestDivider,
  ManifestHeader,
  ManifestInner,
  ManifestLabel,
  ManifestMeta,
  ManifestText,
  MetaItem,
  MetaLabel,
  MetaValue,
  Status,
} from './styles';

interface ManifestCardProps {
  initial: MotionProps['initial'];
}

export function ManifestCard({
  initial,
}: ManifestCardProps) {
  return (
    <ManifestCardContainer
      initial={initial}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        margin: '-60px',
      }}
      transition={{
        duration: 0.7,
        delay: 0.23,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <ManifestInner>
        <ManifestHeader>
          <ManifestLabel>
            <Sparkles strokeWidth={1.8} />
            experiência real
          </ManifestLabel>
    
          <Status>em evolução</Status>
        </ManifestHeader>
    
        <ManifestText>
          Uma formação criada por quem viveu a transição e transformou
          os obstáculos do caminho em um método de ensino{' '}
          <strong>prático, humano e conectado ao mercado.</strong>
        </ManifestText>
    
        <ManifestDivider />
    
        <ManifestMeta>
          <MetaItem>
            <MetaValue>Prática</MetaValue>
            <MetaLabel>desde o início</MetaLabel>
          </MetaItem>
    
          <MetaItem>
            <MetaValue>Comunidade</MetaValue>
            <MetaLabel>durante a jornada</MetaLabel>
          </MetaItem>
        </ManifestMeta>
      </ManifestInner>
    </ManifestCardContainer>
  );
}
