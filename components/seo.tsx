import { DefaultSeo } from "next-seo";

const config = {
  title: "Temoso Chueu",
  description: "Software engineer, and content creator",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://b-r.io",
    site_name: "Kalophain",
    images: [
      {
        url: "https://b-r.io/og.png",
        alt: "Brian Ruiz",
      },
    ],
  },
  twitter: {
    handle: "@kalophain",
    site: "@og.jpg",
    cardType: "summary_large_image",
  },
};

export default function SEO() {
  return <DefaultSeo {...config} />;
}
