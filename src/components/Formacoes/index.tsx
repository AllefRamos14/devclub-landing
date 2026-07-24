import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

import { Container, Eyebrow } from '../ui/Layout';

import { formacoes } from './data';
import { FormationCard } from './FormationCard';
import { FormationExperience } from './FormationExperience';

import type { Formacao } from './types';

import {
  FormationsSection,
  Grid,
  Header,
  HeaderInfo,
  HeaderInfoLabel,
  HeaderInfoText,
  HeaderMain,
  Lead,
  Title,
} from './styles';

export function Formacoes() {
  const [selectedFormation, setSelectedFormation] =
    useState<Formacao | null>(null);

  function handleOpenFormation(formacao: Formacao) {
    setSelectedFormation(formacao);
  }

  function handleCloseFormation() {
    setSelectedFormation(null);
  }

  useEffect(() => {
    if (!selectedFormation) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        handleCloseFormation();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedFormation]);

  return (
    <>
      <FormationsSection id="formacoes">
        <Container>
          <Header
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <HeaderMain>
              <Eyebrow>trilhas de estudo</Eyebrow>

              <Title>
                Uma formação para cada <span>ponto de partida.</span>
              </Title>

              <Lead>
                Não importa se você nunca escreveu uma linha de código ou se já
                programa e quer subir de nível. Existe uma jornada pensada para
                o seu momento profissional.
              </Lead>
            </HeaderMain>

            <HeaderInfo>
              <HeaderInfoLabel>aprendizado direcionado</HeaderInfoLabel>

              <HeaderInfoText>
                Escolha sua trilha e avance com{' '}
                <strong>projetos, suporte e direcionamento</strong> para o
                mercado.
              </HeaderInfoText>
            </HeaderInfo>
          </Header>

          <Grid>
            {formacoes.map((formacao, index) => (
              <FormationCard
                key={formacao.id}
                formacao={formacao}
                index={index}
                onOpen={() => handleOpenFormation(formacao)}
              />
            ))}
          </Grid>
        </Container>
      </FormationsSection>

      <AnimatePresence mode="wait">
        {selectedFormation && (
          <FormationExperience
            key={selectedFormation.id}
            formacao={selectedFormation}
            onClose={handleCloseFormation}
          />
        )}
      </AnimatePresence>
    </>
  );
}