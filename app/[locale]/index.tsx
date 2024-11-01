import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const t = useTranslations();
  const router = useRouter();
  const { locale } = router.query;

  return (
    <div>
      <header>
        <h1>{t('welcome')}</h1>
        <p>Current locale: {locale}</p>
      </header>
      <main>{children}</main>
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { locale: 'es' },
    { locale: 'en' },
  ];
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const locale = params?.locale as string;
  const messages = await import(`../../messages/${locale}.json`);
  return {
    props: {
      messages: messages.default,
    },
  };
}