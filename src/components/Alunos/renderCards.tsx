// import { Testimonial } from './Testimonial';
// import type { Depoimento } from './types';

// export function renderCards(
//   items: Depoimento[],
//   rowName: string,
// ) {
//   return items.map((testimonial, index) => (
//     <Testimonial
//       key={`${rowName}-${testimonial.name}-${index}`}
//       testimonial={testimonial}
//       cardKey={`${rowName}-${testimonial.name}-${index}`}
//     />
//   ));
// }

import { Testimonial } from './Testimonial';

import type {
  Depoimento,
  SelectedStudent,
} from './types';

interface RenderCardsOptions {
  items: Depoimento[];
  rowName: string;
  onSelect: (student: SelectedStudent) => void;
}

export function renderCards({
  items,
  rowName,
  onSelect,
}: RenderCardsOptions) {
  return items.map((testimonial, index) => {
    const cardKey = `${rowName}-${testimonial.id}-${index}`;

    return (
      <Testimonial
        key={cardKey}
        testimonial={testimonial}
        cardKey={cardKey}
        onSelect={(selectedTestimonial, selectedCardKey) => {
          onSelect({
            testimonial: selectedTestimonial,
            cardKey: selectedCardKey,
          });
        }}
      />
    );
  });
}