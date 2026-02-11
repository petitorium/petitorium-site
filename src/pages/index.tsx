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
              light: useBaseUrl('/img/petitorium_helmet_minimalist_style_transparent.png'),
              dark: useBaseUrl('/img/petitorium_helmet_minimalist_style_transparent.png'),
            }}
            style={{height: '120px', marginBottom: '1.5rem'}}
          />
          <Heading as="h1" className="hero__title" style={{fontFamily: 'Cinzel, serif'}}>
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle" style={{fontFamily: 'Cinzel, serif'}}>{siteConfig.tagline}</p>
          
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
