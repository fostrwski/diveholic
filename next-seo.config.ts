import type { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  titleTemplate: '%s | Diveholic - dive log built for the modern age',
  openGraph: {
    type: 'website',
    locale: 'en_EN',
    url: 'https://diveholic.netlify.app',
    siteName: 'Diveholic',
  },
};

export default config;
