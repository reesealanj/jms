import { PageWrapper } from "@/components/layout/page-wrapper";
import { BreadcrumbItem } from "@/lib/types/breadcrumb";

export default function EditServicePage({
  params,
}: {
  params: { serviceId: string };
}) {
  const currentServiceId = params.serviceId;

  const pageCrumbs: BreadcrumbItem[] = [
    { href: "/services", title: "Services" },
    { href: `/services/${currentServiceId}`, title: currentServiceId },
    { href: `/services/${currentServiceId}/edit`, title: "Edit" },
  ];

  return (
    <PageWrapper breadcrumbs={pageCrumbs}>
      Edit this service: {currentServiceId}
    </PageWrapper>
  );
}
