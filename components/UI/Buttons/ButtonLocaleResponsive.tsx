'use client';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { useParams } from 'next/navigation';

interface ButtonLocaleResponsiveProps {
  language: 'en' | 'es';
}

export default function ButtonLocaleResponsive({
  language,
}: ButtonLocaleResponsiveProps) {
  const [, startTransition] = useTransition();
  const router = useRouter();
  const { locale } = useParams();

  const handleClick = () => {
    startTransition(() => {
      router.replace(`/${language}`);
    });
  };

  return (
    <button
      onClick={handleClick}
      className={`p-6 md:p-8 lg:hidden text-[1.2rem] md:text-[1.5rem] w-10 h-10 md:w-13 md:h-13 flex items-center justify-center
      ${locale === language ? 'bg-white text-black' : 'bg-black text-white'}`}
    >
      {language.toUpperCase()}
    </button>
  );
}
