import React from "react";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

export interface CategoryCardProps {
  title: string;
  description: string;
  to: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export default function CategoryCard({
  title,
  description,
  to,
  icon: Icon,
}: CategoryCardProps): JSX.Element {
  return (
    <Link to={to} className={styles.categoryCard}>
      <Icon className={styles.icon} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </Link>
  );
}
