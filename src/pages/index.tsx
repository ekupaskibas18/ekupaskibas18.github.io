import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import PKG from '../../package.json';

import styles from './index.module.css';

// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <Heading as="h1" className="hero__title">
//           {siteConfig.title}
//         </Heading>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/intro">
//             Docusaurus Tutorial - 5min ⏱️
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className="patterns-hero-bank-note py-8 lg:py-16 text-center relative overflow-hidden dark:bg-gray-800">
        <div className="container">
          <Heading as="h1" className="text-3xl md:text-6xl font-semibold mb-6">
            {siteConfig.title}
          </Heading>
          <p className="text-xl font-light mb-10">{siteConfig.tagline}</p>
          <div className={clsx('flex', styles.buttons)}>
            <Link
              className="btn btn-lg"
              to="blogs/sonnets"
            >
              Start Reading 📖
            </Link>
          </div>
          <div className="mt-4 hidden">Currently <strong>v{PKG.version}</strong></div>
        </div>
      </header>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
