import { useTranslations } from 'next-intl';
import LogoFaroxSVG from '../../SVG/LogoFaroxSVG';
import Link from 'next/link';
import LogoFactticSVG from '../../SVG/LogoFactticSVG';
import LogoPatioCoopSVG from '../../SVG/LogoPatioCoopSVG';
import LogoGithubSVG from '@/components/SVG/LogoGithubSVG';

export default function ContactSection() {
  const t = useTranslations('ContactSection');
  return (
    <section className="flex flex-col justify-center items-center w-full gap-4 mt-[230px] md:mt-[376px] mb-48">
      <div className="w-[260px] h-auto">
        <LogoFaroxSVG />
      </div>
      <p
        id="contact"
        className="text-center text-2xl sm:text-3xl leading-[30px] sm:leading-[44px] w-[360px] sm:w-[420px] mt-24"
      >
        {t('description')} <br />{' '}
        <Link
          href="mailto:info@farox.coop"
          target="_blank"
          className="text-tertiary hover:text-white"
        >
          info@farox.coop
        </Link>
      </p>
      <div className="flex gap-5 lg:gap-50 px-6 sm:px-0 w-full max-w-[54.80rem] h-auto justify-between items-center mt-20">
        <span className="w-[10.5rem] sm:w-[9.75rem] h-auto">
          <Link
            href="https://facttic.org.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            <LogoFactticSVG />
          </Link>
        </span>
        <span className="w-[12.5rem] sm:w-[12rem] h-auto">
          <Link
            href="https://github.com/farox-coop"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            <LogoGithubSVG />
          </Link>
        </span>
        <span className="w-[13.5rem] sm:w-[14rem] h-auto">
          <Link
            href="https://patio.coop/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            <LogoPatioCoopSVG />
          </Link>
        </span>
      </div>
    </section>
  );
}
