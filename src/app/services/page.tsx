import { Suspense } from "react";
import {
  AwaitingCustomerServicesCard,
  OpenServicesCard,
  AwaitingPartsServicesCard,
  LoadingStatusFallbackCard,
} from "@/components/ui/status-cards";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { BreadcrumbItem } from "@/lib/types/breadcrumb";
import { MOCK_SERVICES_LIST } from "@/lib/api/mock/mock-services-list";
import { ServiceListTable } from "@/components/ui/table/service-list-table";
import { ServicesApi } from "@/lib/api/services-api";

export default async function ServicesHome() {
  const pageCrumbs: BreadcrumbItem[] = [
    { href: "/services", title: "Services" },
  ];

  const services = await ServicesApi.getServiceList();
  return (
    <PageWrapper breadcrumbs={pageCrumbs}>
      <div className="grid grid-cols-3 gap-4">
        <Suspense fallback={<LoadingStatusFallbackCard />}>
          <OpenServicesCard />
        </Suspense>
        <Suspense fallback={<LoadingStatusFallbackCard />}>
          <AwaitingCustomerServicesCard />
        </Suspense>
        <Suspense fallback={<LoadingStatusFallbackCard />}>
          <AwaitingPartsServicesCard />
        </Suspense>
      </div>
      <ServiceListTable
        data={services && services.services ? services.services : []}
        rowsPerPage={10}
      />
    </PageWrapper>
  );
}
