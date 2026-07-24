import { Rocket } from 'lucide-react';

import {
  CompanyCard as CompanyCardContainer,
  CompanyCategory,
  CompanyInfo,
  CompanyMain,
  CompanyName,
  CompanyStatus,
} from './styles';

import { CompanyLogo } from './CompanyLogo';

import type { Company } from './types';

interface CompanyCardProps {
  company: Company;
}

export function CompanyCard({
  company,
}: CompanyCardProps) {
  return (
    <CompanyCardContainer
      $brandColor={company.color}
      $brandColorRgb={company.colorRgb}
      $featured={company.featured}
    >
      <CompanyMain>
        <CompanyLogo
          name={company.name}
          logo={company.logo}
          color={company.color}
          colorRgb={company.colorRgb}
        />

        <CompanyInfo>
          <CompanyName>{company.name}</CompanyName>
          <CompanyCategory>{company.category}</CompanyCategory>
          <CompanyStatus>
            <span />
            {company.status}
          </CompanyStatus>
        </CompanyInfo>
      </CompanyMain>

      <Rocket
        size={17}
        strokeWidth={1.7}
        aria-hidden="true"
      />
    </CompanyCardContainer>
  );
}
