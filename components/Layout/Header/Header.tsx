'use client';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import ButtonLocale from '@/components/UI/Buttons/ButtonLocale';
import LogoFaroxSVG from '../../SVG/LogoFaroxSVG';
// import MenuBurger from '@/components/UI/BurgerMenu/BurgerMenu';

function Header() {
  const t = useTranslations('Header');

  return (
    <header className="bg-transparent z-20 xl:px-1">
      <div className="py-5">
        <div className="px-1 lg:px-0 py-[1%] flex items-center justify-between text-white">
          {/* Logo */}
          <LogoFaroxSVG className="w-[6.56rem] h-[1.63rem] lg:w-[10.25rem] lg:h-[2.5rem]" />
          <div className="w-[56%] flex lg:gap-10 lg:flex-row lg:items-center justify-between lg:w-auto">
            {/* Botones de idioma */}
            <div className="flex justify-center lg:gap-6 lg:order-2 lg:justify-start mr-4 lg:mr-0">
              <ButtonLocale language={'en'} />
              <ButtonLocale language={'es'} />
            </div>
            {/* Menú de navegación */}
            <nav
              id="navbar"
              className="flex items-center justify-center lg:order-1 lg:text-[22px] font-medium"
            >
              <ul className="flex items-center md:gap-10 lg:gap-14">
                <li
                  className="p-1 px-3 min-w-[90px] flex justify-center items-center hover:text-primary 
                  border border-[#5033AD] rounded-[23.5px]"
                >
                  <Link href="#contact">{t('contact')}</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
