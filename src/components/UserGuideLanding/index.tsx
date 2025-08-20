import React from "react";
import CategoryCard from "../CategoryCard";
import {
  FaRocket,
  FaChartLine,
  FaComments,
  FaGraduationCap,
  FaUserTie,
  FaInfoCircle,
  FaPlug,
  FaUsers,
  FaUserLock,
} from "react-icons/fa";

const categories = [
  {
    title: "Get Started",
    description: "Essential information to help you get started with Eduncy.",
    to: "/docs/user-guide/get-started",
    icon: FaRocket,
  },
  {
    title: "Sales Hub",
    description: "Track leads, deals, and tasks in one place.",
    to: "/docs/user-guide/sales-hub",
    icon: FaChartLine,
  },
  {
    title: "Chatting Hub",
    description: "Manage all chats and messages centrally.",
    to: "/docs/user-guide/chatting-hub",
    icon: FaComments,
  },
  {
    title: "Admission Hub",
    description: "Handle applications and students with ease.",
    to: "/docs/user-guide/admission-hub",
    icon: FaGraduationCap,
  },
  {
    title: "Agent Hub",
    description: "Effortlessly oversee agents and sub-agents.",
    to: "/docs/user-guide/agent-hub",
    icon: FaUserTie,
  },
  {
    title: "Info Hub",
    description: "Browse programs, scholarships, campuses, and more.",
    to: "/docs/user-guide/info-hub",
    icon: FaInfoCircle,
  },
  {
    title: "Apps & Integrations",
    description: "Plug into WhatsApp, Facebook, Instagram quickly.",
    to: "/docs/user-guide/apps-integrations",
    icon: FaPlug,
  },
  {
    title: "Employees Management",
    description: "Organize employees and teams simply.",
    to: "/docs/user-guide/employees-management",
    icon: FaUsers,
  },
  {
    title: "Organization Access",
    description: "Set roles, permissions, and assignment rules.",
    to: "/docs/user-guide/organization-access",
    icon: FaUserLock,
  },
];

export default function UserGuideLanding(): JSX.Element {
  return (
    <div className="container margin-top--lg margin-bottom--lg">
      <div className="row">
        <div className="col col--8 col--offset-2">
          <h1>User Guide</h1>
          <p className="margin-bottom--lg">
            Welcome to the Eduncy User Guide. Here you'll find comprehensive
            documentation about all features and functionalities of the
            platform.
          </p>
          <div className="margin-bottom--lg">
            {categories.map((category, idx) => (
              <CategoryCard key={idx} {...category} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
