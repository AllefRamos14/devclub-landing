import {
  firstRow,
  secondRow,
} from './data';

import { CompanyCard } from './CompanyCard';

import {
  MarqueeArea,
  MarqueeTrack,
  MarqueeViewport,
} from './styles';

import type { Company } from './types';

function renderCompanies(
  companies: Company[],
  rowId: string,
) {
  return [...companies, ...companies].map((company, index) => (
    <CompanyCard
      key={`${rowId}-${company.name}-${index}`}
      company={company}
    />
  ));
}

export function CompanyMarquee() {
  return (
    <MarqueeArea>
      <MarqueeViewport>
        <MarqueeTrack $duration={36}>
          {renderCompanies(firstRow, 'first-row')}
        </MarqueeTrack>
      </MarqueeViewport>

      <MarqueeViewport>
        <MarqueeTrack $reverse $duration={40}>
          {renderCompanies(secondRow, 'second-row')}
        </MarqueeTrack>
      </MarqueeViewport>
    </MarqueeArea>
  );
}
