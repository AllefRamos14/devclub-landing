import { Zap } from 'lucide-react';

import { codeItems } from './data';

import {
  CodeItem,
  CodeMarquee as CodeMarqueeContainer,
  CodeTrack,
} from './styles';

export function CodeMarquee() {
  return (
    <CodeMarqueeContainer aria-hidden="true">
      <CodeTrack>
        {[...codeItems, ...codeItems].map((item, index) => (
          <CodeItem
            key={`${item.text}-${index}`}
            $accent={item.accent}
          >
            <Zap size={13} />
            {item.text}
          </CodeItem>
        ))}
      </CodeTrack>
    </CodeMarqueeContainer>
  );
}
