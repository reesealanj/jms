import { PageWrapper } from "@/components/layout/page-wrapper";
import { BreadcrumbItem } from "@/lib/types/breadcrumb";

export default function CreateServicePage() {
  const pageCrumbs: BreadcrumbItem[] = [
    { href: "/services", title: "Services" },
    { href: "/services/create", title: "Create a Service" },
  ];

  return <PageWrapper breadcrumbs={pageCrumbs}>Create a service.</PageWrapper>;
}
