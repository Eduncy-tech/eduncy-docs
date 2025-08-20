import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

const guides = [
  {
    title: "📚 User Guide",
    description:
      "Learn how to use Eduncy effectively with our comprehensive user guide.",
    link: "/docs/user-guide/get-started",
  },
  {
    title: "🛠️ Developer Guide",
    description: "Technical documentation for developers working with Eduncy.",
    link: "/docs/developer-guide/getting-started",
  },
  {
    title: "🔄 Product Updates",
    description: "Stay up to date with the latest features and improvements.",
    link: "/docs/product-updates/latest-updates",
  },
];

function GuideItem({ title, description, link }) {
  return (
    <div className={styles.guideItem}>
      <Link to={link}>
        <Heading as="h2" className={styles.guideTitle}>
          {title}
        </Heading>
      </Link>
      <p>{description}</p>
    </div>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader />
      <main className={styles.mainContent}>
        <div className="container">
          <div className={styles.guidesSection}>
            {guides.map((guide, idx) => (
              <GuideItem key={idx} {...guide} />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
