import { PageWrapper } from "@/components/layout/page-wrapper";
import { BreadcrumbItem } from "@/lib/types/breadcrumb";

export default function ViewServicePage({
  params,
}: {
  params: { serviceId: string };
}) {
  const currentServiceId = params.serviceId;

  const pageCrumbs: BreadcrumbItem[] = [
    { href: "/services", title: "Services" },
    { href: `/services/${currentServiceId}`, title: currentServiceId },
  ];

  return (
    <PageWrapper breadcrumbs={pageCrumbs}>
      View this service: {currentServiceId}
    </PageWrapper>
  );
}
