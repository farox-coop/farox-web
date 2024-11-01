import CardService from '@/components/UI/CardService/CardService';

const data = [
  {
    title: 'DataScience, IA, LLMs.',
    icons: ['pandas', 'claude', 'chatgpt'],
  },
  {
    title: 'Backend development',
    icons: ['erlang', 'elixir', 'python', 'nodejs', 'go'],
  },
  {
    title: 'Full-stack development',
    icons: ['nextjs', 'phoenix', 'django', 'flask'],
  },
];

export default function CardsSection() {
  return (
    <article className="flex flex-col farox2xl:flex-row justify-center items-center w-full gap-3 sm:gap-6 mt-16 sm:mt-28">
      {data.map((prop, i) => (
        <CardService
          key={i + prop.title}
          title={prop.title}
          icons={prop.icons}
        />
      ))}
    </article>
  );
}
