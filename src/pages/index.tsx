import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

const features = [
  {
    title: "Sales Hub",
    description: "Track leads, deals, and tasks in one place.",
    icon: "📈",
    link: "/docs/category/sales-hub",
  },
  {
    title: "Chatting Hub",
    description: "Manage all chats and messages centrally.",
    icon: "💬",
    link: "/docs/category/chatting-hub",
  },
  {
    title: "Admission Hub",
    description: "Handle applications and students with ease.",
    icon: "🎓",
    link: "/docs/category/admission-hub",
  },
  {
    title: "Agent Hub",
    description: "Effortlessly oversee agents and sub-agents.",
    icon: "👔",
    link: "/docs/category/agent-hub",
  },
  {
    title: "Info Hub",
    description: "Browse programs, scholarships, campuses, and more.",
    icon: "ℹ️",
    link: "/docs/category/info-hub",
  },
  {
    title: "Apps & Integrations",
    description: "Plug into WhatsApp, Facebook, Instagram quickly.",
    icon: "🔌",
    link: "/docs/category/apps-integrations",
  },
  {
    title: "Employees Management",
    description: "Organize employees and teams simply.",
    icon: "👥",
    link: "/docs/category/employees-management",
  },
  {
    title: "Organization Access",
    description: "Set roles, permissions, and assignment rules.",
    icon: "🔒",
    link: "/docs/category/organization-access",
  },
];

function FeatureCard({ title, description, icon, link }) {
  return (
    <div className={styles.col}>
      <div
        className={styles.card}
        onClick={() => (window.location.href = link)}
      >
        <div className={styles.icon}>{icon}</div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
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
          <div className={styles.row}>
            {features.map((feature, idx) => (
              <FeatureCard key={idx} {...feature} />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
