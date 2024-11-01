'use client';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useInView } from 'react-intersection-observer';

export default function AboutSection() {
  const t = useTranslations('ContactSection');
  const { locale } = useParams();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const titleText = t('title');
  const coloredText =
    locale === 'en'
      ? titleText.split('software experts')
      : titleText.split('software');

  return (
    <section className="flex flex-col justify-center items-center w-full">
      <h4
        className={`text-center text-balance leading-[40px] px-1 text-3xl md:text-6xl lg:text-[64px] md:leading-[75px] max-w-[850px] ${
          inView ? 'animation-text' : 'opacity-0'
        }`}
        ref={ref}
      >
        {coloredText[0]}
        <span className="text-primary">
          {locale === 'en' ? 'software experts' : 'software'}
        </span>
        {coloredText[1]}
      </h4>
    </section>
  );
}
