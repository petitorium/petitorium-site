import React from 'react';
import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import InstallTabs from '@site/src/components/InstallTabs';

import styles from './index.module.css';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.heroContent)}>
        <div className={styles.heroLeft}>
          <ThemedImage
            alt="Petitorium Logo"
            sources={{
              light: useBaseUrl('/img/logos/08-light.svg'),
              dark: useBaseUrl('/img/logos/08.svg'),
            }}
            style={{height: '200px', marginBottom: '0.2rem'}}
          />
          <Heading as="h1" className="hero__title" style={{fontFamily: 'Cinzel, serif', color: 'var(--petitorium-logo-color-hero)'}}>
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle" style={{fontFamily: 'Cinzel, serif', color: 'var(--petitorium-logo-color-hero)'}}>{siteConfig.tagline}</p>
          
          <InstallTabs />

          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              View Documentation
            </Link>
          </div>
        </div>
        <div className={styles.heroRight}>
          <img 
            src={useBaseUrl('/img/petitorium_main.png')} 
            alt="Petitorium App Screenshot" 
            className={styles.heroImage}
            style={{ width: '150%' }}
          />
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
