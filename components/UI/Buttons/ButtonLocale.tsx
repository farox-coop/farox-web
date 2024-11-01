'use client';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { useParams } from 'next/navigation';

interface ButtonLocaleProps {
  language: 'en' | 'es';
}

export default function ButtonLocale({ language }: ButtonLocaleProps) {
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
      className={`lg:relative w-[2.1rem] lg:w-[63px] lg:py-[24px] uppercase text-[16px] lg:text-[22px] font-medium ${
        locale == language
          ? 'bg-white  text-black before:absolute before:top-[-100vh] before:left-0 before:w-full before:h-[100vh] before:bg-white before:content-[""]'
          : 'border border-slate-600 text-slate-600 lg:text-white lg:border-0 bg-transparent hover:text-primary'
      }`}
    >
      {language}
    </button>
  );
}
