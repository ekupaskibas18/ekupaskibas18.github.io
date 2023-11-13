import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import PKG from '../../package.json';
import styles from './index.module.css';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">

      <header className="patterns-hero-bank-note py-8 lg:py-16 text-center relative overflow-hidden dark:bg-gray-800">
        <div className="container">
          <h1 className="text-6xl font-light mb-4">{siteConfig.title}</h1>
          <p className="text-xl font-light mb-8">{siteConfig.tagline}</p>
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
