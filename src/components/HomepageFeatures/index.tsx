import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Unified Theming',
    description: (
      <>
        Supports popular themes like Nord, Dracula, and Gruvbox, styling the entire UI for a cohesive experience.
      </>
    ),
  },
  {
    title: 'External Editor Integration',
    description: (
      <>
        Edit request bodies and headers in your favorite system editor like Vim, Nano, or VS Code.
      </>
    ),
  },
  {
    title: 'Workspaces & Collections',
    description: (
      <>
        Organize API requests into hierarchical collections and manage independent workspaces for different projects.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
