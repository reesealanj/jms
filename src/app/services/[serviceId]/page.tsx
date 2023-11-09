import { PageWrapper } from "@/components/layout/page-wrapper";
import { BreadcrumbItem } from "@/lib/types/breadcrumb";
import CollapsableServiceActions from "../components/collabsable-service-actions";
import CollapsableCustomerInformation from "../components/collapsable-customer-info";
import CollapsableServiceSummary from "../components/collapsable-service-summary";
import CollapsableHistoryFeed from "../components/history/collapsable-history-feed";
import CollapsableLaborLog from "../components/labor-log/collapsable-labor-log";
import BoatOverview from "../components/overview/boat";
import MotorOverview from "../components/overview/motor/motor-overview";
import TrailerOverview from "../components/overview/trailer";
import CollapsablePartsLog from "../components/parts/collapsable-parts-log";
import ReadonlyViewAlert from "../components/readonly-view-alert";

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
      <section key="1" className="w-full flex">
        <div className="w-1/3 border-r border-zinc-200 dark:border-zinc-800 overflow-auto">
          <div className="p-4 space-y-2">
            <CollapsableServiceSummary />
            <CollapsableCustomerInformation />
            <CollapsableServiceActions />
            <>
              <h2 className="text-xl font-bold">Overview</h2>
              <BoatOverview />
              <MotorOverview />
              <TrailerOverview />
            </>
          </div>
        </div>
        <div className="w-2/3">
          <div className="p-4 space-y-4">
            <ReadonlyViewAlert />
            <h2 className="text-2xl font-bold">Ticket Details</h2>
            <CollapsableLaborLog />
            <CollapsablePartsLog />
            <CollapsableHistoryFeed />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
