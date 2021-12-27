import Head from 'next/head';
import { useRouter } from 'next/router';

const defaultMeta = {
  title: 'EndRock',
  siteName: 'EndRockCLE',
  description: "EndRock is a Cleveland Ohio based 90's Rock Cover Band.",
  url: 'https://www.endrockcle.com/',
  image: '',
  type: 'website',
  robots: 'follow, index',
};

type SeoProps = {
  date?: string;
  templateTitle?: string;
} & Partial<typeof defaultMeta>;

export default function Seo(props: SeoProps) {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };
  meta['title'] = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name='robots' content={meta.robots} />
      <meta content={meta.description} name='description' />
      <meta property='og:url' content={`${meta.url}${router.asPath}`} />
      <link rel='canonical' href={`${meta.url}${router.asPath}`} />

      {/* Favicons */}

      <link rel='shortcut icon' href='/favicon.ico' />
    </Head>
  );
}
