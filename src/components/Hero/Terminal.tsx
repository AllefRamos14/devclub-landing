import { motion } from "framer-motion";

import { renderTokens } from "./tokenizer";

import {
  BorderLight,
  BuildContent,
  BuildIcon,
  BuildResult,
  CodeRow,
  CommandLine,
  Cursor,
  Dots,
  JourneySteps,
  LineNo,
  LiveDot,
  OutputCommand,
  OutputPanel,
  ProgressBar,
  ProgressTrack,
  TerminalBody,
  TerminalLabel,
  TerminalStatus,
  TerminalTitleBar,
  TerminalWindow,
  TerminalWrapper,
} from "./styles";

interface TerminalProps {
  lines: string[];
  isDone: boolean;
  progress: number;
}

export function Terminal({
  lines,
  isDone,
  progress,
}: TerminalProps) {
  return (
<TerminalWrapper>
    <TerminalWindow
      $active={!isDone}
      initial={{
        opacity: 0,
        scale: 0.95,
        y: 24,
        filter: "blur(6px)",
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.8,
        delay: 0.2,
        ease: [0.16, 1, 0.3, 1],
      }}
      aria-label="Terminal apresentando a trajetória profissional do fundador da DevClub"
    >
      <BorderLight aria-hidden="true" />

      <TerminalTitleBar>
        <Dots aria-hidden="true">
          <span />
          <span />
          <span />
        </Dots>

        <TerminalLabel>
          <LiveDot $active={!isDone} aria-hidden="true" />

          <span>
            <strong>trajetória.ts</strong>

            <small> — devclub</small>
          </span>
        </TerminalLabel>

        <TerminalStatus $done={isDone}>
          {isDone ? "compiled" : "writing"}
        </TerminalStatus>
      </TerminalTitleBar>

      <ProgressTrack aria-hidden="true">
        <ProgressBar $progress={progress} />
      </ProgressTrack>

      <CommandLine aria-hidden="true">
        <span>~/devclub</span>
        <strong>$</strong>
        <span>open trajetória.ts</span>
      </CommandLine>

      <TerminalBody aria-live="polite">
        {lines.map((line, index) => {
          const isCurrentLine = !isDone && index === lines.length - 1;

          return (
            <CodeRow
              key={`${index}-${line}`}
              initial={{
                opacity: 0,
                y: 5,
                filter: "blur(4px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <LineNo aria-hidden="true">{index + 1}</LineNo>

              {renderTokens(line)}

              {isCurrentLine && <Cursor aria-hidden="true" />}
            </CodeRow>
          );
        })}
      </TerminalBody>

      <JourneySteps
        initial={{
          opacity: 0,
          y: 8,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
          delay: 0.85,
        }}
      >
        <div>
          <i aria-hidden="true" />
          <strong>origem</strong>
          <span>eletricista</span>
        </div>

        <div>
          <i aria-hidden="true" />
          <strong>transformação</strong>
          <span>programador</span>
        </div>

        <div>
          <i aria-hidden="true" />
          <strong>impacto</strong>
          <span>25 mil alunos</span>
        </div>
      </JourneySteps>

      {isDone && (
        <OutputPanel
          initial={{
            opacity: 0,
            y: -8,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.55,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <OutputCommand>
            <span>~/devclub</span>
            <strong>$</strong>
            <span>npm run build:future</span>
          </OutputCommand>

          <BuildResult
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 10,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.65,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <BuildIcon>
              <motion.span
                initial={{
                  scale: 0,
                  rotate: -25,
                }}
                animate={{
                  scale: 1,
                  rotate: 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 240,
                  damping: 16,
                  delay: 0.65,
                }}
              >
                ✓
              </motion.span>
            </BuildIcon>

            <BuildContent>
              <span>TRAJETÓRIA COMPILADA</span>

              <strong>
                Uma decisão pode mudar toda a sua carreira.
              </strong>

              <small>o próximo capítulo começa com você</small>
            </BuildContent>
          </BuildResult>
        </OutputPanel>
      )}
    </TerminalWindow>
  </TerminalWrapper>
  );
}
