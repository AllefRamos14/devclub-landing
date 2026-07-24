// import {
//   type MouseEvent as ReactMouseEvent,
// } from 'react';

// import {
//   ArrowUpRight,
//   BadgeCheck,
//   BriefcaseBusiness,
//   Clock3,
//   Laptop2,
//   Quote as QuoteIcon,
//   Star,
// } from 'lucide-react';

// import type {
//   SpotlightStyle,
//   TestimonialCardProps,
// } from './types';

// import {
//   Author,
//   AuthorAvatar,
//   AuthorAvatarWrapper,
//   AuthorContent,
//   AuthorName,
//   AuthorRole,
//   AvatarGlow,
//   CardArrow,
//   CardDivider,
//   CardHeader,
//   CardNoise,
//   MetaList,
//   MetaPill,
//   QuoteSymbol,
//   QuoteText,
//   Rating,
//   TestimonialCard,
//   VerificationBadge,
// } from './styles';

// export function Testimonial({
//   testimonial,
//   cardKey,
// }: TestimonialCardProps) {
//   function handleMouseMove(
//     event: ReactMouseEvent<HTMLElement>,
//   ) {
//     const card = event.currentTarget;
//     const rect = card.getBoundingClientRect();

//     const mouseX = event.clientX - rect.left;
//     const mouseY = event.clientY - rect.top;

//     card.style.setProperty('--mouse-x', `${mouseX}px`);
//     card.style.setProperty('--mouse-y', `${mouseY}px`);
//   }

//   return (
//     <TestimonialCard
//       key={cardKey}
//       onMouseMove={handleMouseMove}
//       style={
//         {
//           '--mouse-x': '50%',
//           '--mouse-y': '50%',
//         } as SpotlightStyle
//       }
//     >
//       <CardNoise />

//       <CardHeader>
//         <VerificationBadge>
//           <BadgeCheck strokeWidth={1.8} />
//           história verificada
//         </VerificationBadge>

//         <CardArrow
//           data-card-arrow="true"
//           aria-hidden="true"
//         >
//           <ArrowUpRight strokeWidth={1.7} />
//         </CardArrow>
//       </CardHeader>

//       <Rating aria-label="Avaliação máxima de cinco estrelas">
//         {Array.from({ length: 5 }).map((_, index) => (
//           <Star
//             key={`${testimonial.name}-star-${index}`}
//             strokeWidth={1.7}
//           />
//         ))}
//       </Rating>

//       <QuoteSymbol aria-hidden="true">
//         <QuoteIcon strokeWidth={1.7} />
//       </QuoteSymbol>

//       <QuoteText>{testimonial.quote}</QuoteText>

//       <CardDivider />

//       <Author>
//         <AuthorAvatarWrapper>
//           <AvatarGlow $hue={testimonial.hue} />

//           <AuthorAvatar
//             data-avatar="true"
//             $hue={testimonial.hue}
//           >
//             {testimonial.initials}
//           </AuthorAvatar>
//         </AuthorAvatarWrapper>

//         <AuthorContent>
//           <AuthorName>{testimonial.name}</AuthorName>
//           <AuthorRole>{testimonial.role}</AuthorRole>
//         </AuthorContent>
//       </Author>

//       <MetaList>
//         <MetaPill data-meta-pill="true">
//           <BriefcaseBusiness strokeWidth={1.7} />
//           antes: {testimonial.previousArea}
//         </MetaPill>

//         <MetaPill data-meta-pill="true">
//           <Clock3 strokeWidth={1.7} />
//           {testimonial.time}
//         </MetaPill>

//         <MetaPill data-meta-pill="true">
//           <Laptop2 strokeWidth={1.7} />
//           {testimonial.modality}
//         </MetaPill>
//       </MetaList>
//     </TestimonialCard>
//   );
// }

import {
  type KeyboardEvent,
  type MouseEvent as ReactMouseEvent,
} from 'react';

import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Clock3,
  Laptop2,
  Quote as QuoteIcon,
} from 'lucide-react';

import type {
  SpotlightStyle,
  TestimonialCardProps,
} from './types';

import {
  Author,
  AuthorAvatar,
  AuthorAvatarWrapper,
  AuthorContent,
  AuthorName,
  AuthorRole,
  AvatarGlow,
  CardArrow,
  CardDivider,
  CardHeader,
  CardNoise,
  CareerArrow,
  CareerLabel,
  CareerPath,
  CareerStage,
  CareerValue,
  MetaList,
  MetaPill,
  OpenHint,
  QuoteSymbol,
  QuoteText,
  TestimonialCard,
  VerificationBadge,
} from './styles';

export function Testimonial({
  testimonial,
  cardKey,
  onSelect,
}: TestimonialCardProps) {
  function handleMouseMove(
    event: ReactMouseEvent<HTMLElement>,
  ) {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${mouseX}px`);
    card.style.setProperty('--mouse-y', `${mouseY}px`);
  }

  function handleOpen() {
    onSelect(testimonial, cardKey);
  }

  function handleKeyDown(
    event: KeyboardEvent<HTMLElement>,
  ) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleOpen();
    }
  }

  return (
    <TestimonialCard
      layoutId={`student-card-${cardKey}`}
      onClick={handleOpen}
      onKeyDown={handleKeyDown}
      onMouseMove={handleMouseMove}
      role="button"
      tabIndex={0}
      aria-haspopup="dialog"
      aria-label={`Abrir história de ${testimonial.name}`}
      style={
        {
          '--mouse-x': '50%',
          '--mouse-y': '50%',
        } as SpotlightStyle
      }
    >
      <CardNoise />

      <CardHeader>
        <VerificationBadge>
          <BadgeCheck strokeWidth={1.8} />
          {testimonial.badge}
        </VerificationBadge>

        <CardArrow
          data-card-arrow="true"
          aria-hidden="true"
        >
          <ArrowUpRight strokeWidth={1.7} />
        </CardArrow>
      </CardHeader>

      <Author>
        <AuthorAvatarWrapper>
          <AvatarGlow $hue={testimonial.hue} />

          <AuthorAvatar
            layoutId={`student-avatar-${cardKey}`}
            data-avatar="true"
            $hue={testimonial.hue}
          >
            {testimonial.image ? (
              <img
                src={testimonial.image}
                alt=""
                loading="lazy"
                decoding="async"
              />
            ) : (
              testimonial.initials
            )}
          </AuthorAvatar>
        </AuthorAvatarWrapper>

        <AuthorContent>
          <AuthorName
            layoutId={`student-name-${cardKey}`}
          >
            {testimonial.name}
          </AuthorName>

          <AuthorRole>{testimonial.role}</AuthorRole>
        </AuthorContent>
      </Author>

      <CareerPath>
        <CareerStage>
          <CareerLabel>Antes</CareerLabel>
          <CareerValue>{testimonial.previousArea}</CareerValue>
        </CareerStage>

        <CareerArrow aria-hidden="true">
          <ArrowRight strokeWidth={1.6} />
        </CareerArrow>

        <CareerStage>
          <CareerLabel>Hoje</CareerLabel>
          <CareerValue>{testimonial.role}</CareerValue>
        </CareerStage>
      </CareerPath>

      <QuoteSymbol aria-hidden="true">
        <QuoteIcon strokeWidth={1.7} />
      </QuoteSymbol>

      <QuoteText>{testimonial.quote}</QuoteText>

      <CardDivider />

      <MetaList>
        <MetaPill data-meta-pill="true">
          <BriefcaseBusiness strokeWidth={1.7} />
          nova carreira
        </MetaPill>

        <MetaPill data-meta-pill="true">
          <Clock3 strokeWidth={1.7} />
          {testimonial.time}
        </MetaPill>

        <MetaPill data-meta-pill="true">
          <Laptop2 strokeWidth={1.7} />
          {testimonial.modality}
        </MetaPill>
      </MetaList>

      <OpenHint>
        conhecer a história
        <ArrowUpRight strokeWidth={1.7} />
      </OpenHint>
    </TestimonialCard>
  );
}