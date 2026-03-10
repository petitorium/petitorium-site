import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useThemeConfig, type NavbarLogo} from '@docusaurus/theme-common';
import type {Props} from '@theme/Logo';

import LogoLight from '@site/static/img/logos/08.svg';
import LogoDark from '@site/static/img/logos/08-light.svg';
import styles from './styles.module.css';

function LogoThemedImage({
  logo,
  alt,
  imageClassName,
}: {
  logo: NavbarLogo;
  alt: string;
  imageClassName?: string;
}) {
  const themedImage = (
    <>
      <LogoLight className={`${logo.className || ''} ${styles.logoLight} ${styles.themedImage}`} />
      <LogoDark className={`${logo.className || ''} ${styles.logoDark} ${styles.themedImage}`} />
    </>
  );

  return imageClassName ? (
    <div className={imageClassName}>{themedImage}</div>
  ) : (
    themedImage
  );
}

export default function Logo(props: Props): ReactNode {
  const {
    siteConfig: {title},
  } = useDocusaurusContext();
  const {
    navbar: {title: navbarTitle, logo},
  } = useThemeConfig();

  const {imageClassName, titleClassName, ...propsRest} = props;
  const logoLink = useBaseUrl(logo?.href || '/');

  const fallbackAlt = navbarTitle ? '' : title;

  const alt = logo?.alt ?? fallbackAlt;

  return (
    <Link
      to={logoLink}
      {...propsRest}
      {...(logo?.target && {target: logo.target})}>
      {logo && (
        <LogoThemedImage
          logo={logo}
          alt={alt}
          imageClassName={imageClassName}
        />
      )}
      {navbarTitle != null && <b className={titleClassName}>{navbarTitle}</b>}
    </Link>
  );
}
