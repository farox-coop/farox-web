import { useState } from 'react';
import { useTranslations } from 'next-intl';
import styles from './BurgerMenu.module.css';

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const t = useTranslations('Header');

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className={`lg:hidden ${styles.menu} ${isOpen ? styles.opened : ''}`}
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-label="Main Menu"
      >
        <svg width={50} height={50} viewBox="0 0 100 100">
          <path
            className={`${styles.line} ${styles.line1}`}
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          />
          <path className={`${styles.line} ${styles.line2}`} d="M 20,50 H 80" />
          <path
            className={`${styles.line} ${styles.line3}`}
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          />
        </svg>
      </button>

      <nav
        className={`lg:hidden absolute top-full left-0 right-0 bg-[#030207] text-white 
        ${isOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}
        transition-[max-height,opacity] duration-500 ease-in-out overflow-hidden`}
      >
        <ul className="flex flex-col gap-6 text-center py-4">
          <li>
            <a href="#home" className="text-lg hover:text-[#5033AD]">
              {t('home')}
            </a>
          </li>
          <li>
            <a
              href="https://github.com/farox-coop"
              target="_blank"
              className="text-lg hover:text-[#5033AD]"
            >
              GitHub
            </a>
          </li>
          <li>
            <a href="#contact" className="text-lg hover:text-[#5033AD]">
              {t('contact')}
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default BurgerMenu;
