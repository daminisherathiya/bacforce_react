import Head from "next/head";

const Meta = ({ data }) => {
  const { title, description, ogImage } = data;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content="https://bacforce.com/" /> {/*todo*/}
      <link rel="canonical" href="https://bacforce.com/" /> {/*todo*/}
    </Head>
  );
};

export default Meta;
