import React from 'react';
import Head from 'next/head';

const title = 'bts-puzzle';
const description = 'just fan game, just enjoy the game';
const image = 'https://user-images.githubusercontent.com/11402468/66451624-43818100-ea98-11e9-8b9e-074ec988eed8.png';
const url = 'https://bts.tammolo.com';

const ogTags = {
  'og:title': title,
  'og:description': description,
  'og:image': image,
  'og:image:type': 'image/png',
  'og:url': url,
  'og:locale': 'en_US',
  'og:site_name': title,
  'og:image:width': 346,
  'og:image:height': 196,
};
const twitterTags = {
  'twitter:card': 'summary',
  'twitter:title': title,
  'twitter:description': description,
  'twitter:image': image,
};

const Hood = () => {
  return (
    <Head>
      <title>BTS Puzzle</title>
      {<>{Object.keys(ogTags).map(key => <meta name={key} content={ogTags[key]}/>)}</>}
      {<>{Object.keys(twitterTags).map(key => <meta name={key} content={twitterTags[key]}/>)}</>}
      <link rel="shortcut icon" href="https://res.cloudinary.com/dgggcrkxq/image/upload/v1566826573/noticon/favicon_j7lf1k.ico"/>
    </Head>
  );
};

export default Hood;
