import { ReactNode } from "react";
import { BreadcrumbItem } from "./breadcrumb";

export type PageWrapperProps = {
  breadcrumbs?: BreadcrumbItem[];
  children: ReactNode;
};
