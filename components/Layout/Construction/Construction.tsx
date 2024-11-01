'use client';
import { useTranslations } from 'next-intl';
import { useInView } from 'react-intersection-observer';

export default function Construction() {
  const t = useTranslations('HomeSection');
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  return (
    <section
      className={`flex flex-col w-full justify-center items-center ${
        inView ? 'animation-text' : 'opacity-0'
      }`}
      ref={ref}
    >
      <h2 className="text-center px-5 sm:px-9 md:px-2 text-2xl md:text-3xl lg:text-4xl max-w-[720px]">
        {t('construction')}
      </h2>
    </section>
  );
}
