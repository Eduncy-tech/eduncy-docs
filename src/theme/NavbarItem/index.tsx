import React from "react";
import NavbarItem from "@theme-original/NavbarItem";
import { useLocation, useHistory } from "@docusaurus/router";
import type { Props } from "@theme/NavbarItem";

export default function NavbarItemWrapper(props: Props) {
  const location = useLocation();
  const history = useHistory();

  const getTargetPath = (sidebarId: string) => {
    const mapping = {
      helpCenterSidebar: "help-center",
      developerGuideSidebar: "developer-guide",
      productUpdatesSidebar: "product-updates",
    };
    return `/docs/${mapping[sidebarId] || sidebarId.toLowerCase()}`;
  };

  if (props.type === "docSidebar" && props.sidebarId) {
    const targetPath = getTargetPath(props.sidebarId);

    return (
      <NavbarItem
        {...props}
        onClick={(e: React.MouseEvent) => {
          if (location.pathname.startsWith(targetPath)) {
            e.preventDefault();
            history.push("/");
          }
          // Call the original onClick if it exists
          props.onClick?.(e as React.MouseEvent<HTMLAnchorElement, MouseEvent>);
        }}
      />
    );
  }

  return <NavbarItem {...props} />;
}
