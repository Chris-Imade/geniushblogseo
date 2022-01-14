import Head from 'next/head';

const Meta = ({ title, excerpt, author }) => (
  <Head>
    <title>{ title }</title>
    <meta name="description" content={excerpt} />
    <meta property="og:type" content="blog website" />
    <meta name="og:title" property="og:title" content="" />
    <meta name="og:description" property="og:description" content="" />
    <meta property="og:site_name" content="" />
    <meta property="og:url" content="" />
    <meta name="twitter:card" content="Genius hub blog" />
    <meta name="twitter:title" content="Genius hub" />
    <meta name="twitter:description" content={excerpt} />
    <meta name="author" content={author} />
  </Head>
);

export default Meta;
