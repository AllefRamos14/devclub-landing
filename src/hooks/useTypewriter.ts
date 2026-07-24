import { useEffect, useRef, useState } from 'react';

export interface TypewriterLine {
  text: string;
  /** ms per character; lower = faster */
  speed?: number;
  /** pause after this line finishes, in ms */
  pauseAfter?: number;
}

interface UseTypewriterResult {
  lines: string[];
  currentLineIndex: number;
  isDone: boolean;
}

/**
 * Types out a sequence of lines, one character at a time, and reveals
 * completed lines. Starts only when `start` is true (e.g. on scroll-into-view).
 */
export function useTypewriter(script: TypewriterLine[], start: boolean): UseTypewriterResult {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!start || startedRef.current) return;
    startedRef.current = true;

    let cancelled = false;
    let lineIdx = 0;
    let charIdx = 0;
    const completed: string[] = [];

    function typeChar() {
      if (cancelled) return;
      const line = script[lineIdx];
      if (!line) {
        setIsDone(true);
        return;
      }

      charIdx += 1;
      const partial = line.text.slice(0, charIdx);
      setLines([...completed, partial]);
      setCurrentLineIndex(lineIdx);

      if (charIdx >= line.text.length) {
        completed.push(line.text);
        lineIdx += 1;
        charIdx = 0;
        const pause = line.pauseAfter ?? 300;
        window.setTimeout(typeChar, pause);
        return;
      }

      const speed = line.speed ?? 28;
      // slight natural jitter
      const jitter = Math.random() * 20 - 10;
      window.setTimeout(typeChar, Math.max(8, speed + jitter));
    }

    const kickoff = window.setTimeout(typeChar, 400);
    return () => {
      cancelled = true;
      window.clearTimeout(kickoff);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start]);

  return { lines, currentLineIndex, isDone };
}
