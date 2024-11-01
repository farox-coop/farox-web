import { useTranslations } from 'next-intl';
import { ChevronDownSVG } from '../../SVG/IconsSVG';
// import ButtonLocaleResponsive from '@/components/UI/Buttons/ButtonLocaleResponsive';
import classes from './HomeSection.module.css';

export default function HomeSection() {
  const t = useTranslations('HomeSection');

  return (
    <section className="flex flex-col justify-center items-center text-white py-4 w-full gap-20 min-h-[80vh] lg:min-h-screen">
      <h1 className="text-[2.6rem] leading-[2.8rem] sm:text-5xl md:text-6xl lg:text-8xl text-center">
        {t('title_1')}{' '}
        <span className="text-primary font-bold">{t('title_2')}</span>
        <br />
        <span className="text-primary font-bold">{t('title_3')}</span>
      </h1>

      {/* Botones cuadrados para pantallas pequeñas (< 1024px) */}
      {/* <div className="fixed right-0 top-1/2 transform -translate-y-1/2 flex flex-col">
        <ButtonLocaleResponsive language="en" />
        <ButtonLocaleResponsive language="es" />
      </div> */}

      <h2 className="hidden sm:block text-center text-2xl md:text-3xl lg:text-4xl max-w-[740px] mt-10">
        <span>
          {t('about')}
          <br />
          <span>{t('about_2')}</span>
        </span>
      </h2>
      <h2 className="text-center text-2xl block sm:hidden">
        <span>
          {t('about')} {t('about_2')}
        </span>
      </h2>
      <div className={classes['animate-bounce-once']}>
        <ChevronDownSVG />
      </div>
    </section>
  );
}
