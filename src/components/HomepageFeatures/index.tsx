import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  link: string;
  image: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Sonnets',
    link: 'blogs/sonnets',
    image: 'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/missed_chances_k3cq.svg',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Sonnets written from the heart. For the love of...
      </>
    ),
  },
  {
    title: 'Haikus',
    link: 'blogs/haikus',
    image: 'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/In_love_6sq2.svg',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Sweetest thoughts in a few words.
      </>
    ),
  },
  {
    title: 'Love Letters',
    link: 'blogs/love-letters',
    image: 'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/heartbroken_cble.svg',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Unsent love letters, best kept unsent.
      </>
    ),
  },
  {
    title: 'Drafts & Thoughts',
    link: 'blogs/drafts',
    image: 'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/New_entries_re_cffr.svg',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        My personal wall of shame.
      </>
    ),
  },
];

function Feature({title, link, image, Svg, description}: FeatureItem) {
  return (
    <Link to={link} className={clsx('w-full md:w-6/12 lg:w-3/12 p-6 mb-8 md:mb-2')}>
      <div className="text--center">
        <img
          src={image}
          alt={title}
          className="max-h-[10rem]"
        />
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <h3 className="font-semibold text-xl mb-4">{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="flex flex-wrap my-6">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
