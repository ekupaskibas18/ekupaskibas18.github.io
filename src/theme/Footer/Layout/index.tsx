import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import type {Props} from '@theme/Footer/Layout';

export default function FooterLayout({
  style,
  links,
  logo,
  copyright,
}: Props): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark',
      })}
    >
      <div className="container max-w-screen-2xl mx-auto px-6">
        <div className="flex flex-wrap mb-10">
          <div className="flex-initial flex justify-start items-end">
            {/* @ts-ignore */}
            <h2 className="text-2xl font-bold mb-0 text-white">{siteConfig?.customFields?.email}</h2>
          </div>
          <div className="flex-1" />
        </div>

        {links}
        {(logo || copyright) && (
          <div className="footer__bottom text--center">
            {logo && <div className="margin-bottom--sm">{logo}</div>}
            {copyright}
          </div>
        )}
      </div>
    </footer>
  );
}
