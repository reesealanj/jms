import { PageWrapper } from "@/components/layout/page-wrapper";
import { BreadcrumbItem } from "@/lib/types/breadcrumb";
import CollapsableHistoryFeed from "@/app/services/components/history/collapsable-history-feed";
import CollapsableLaborLog from "@/app/services/components/labor-log/collapsable-labor-log";
import UnsavedChangesAlert from "@/app/services/components/unsaved-changes-alert";
import CollapsableServiceActions from "@/app/services/components/collabsable-service-actions";
import CollapsableCustomerInformation from "@/app/services/components/collapsable-customer-info";
import CollapsableServiceSummary from "@/app/services/components/collapsable-service-summary";
import CollapsablePartsLog from "@/app/services/components/parts/collapsable-parts-log";
import BoatOverview from "../../components/overview/boat";
import MotorOverview from "../../components/overview/motor/motor-overview";
import TrailerOverview from "../../components/overview/trailer";
import NoChangesAlert from "../../components/no-changes-alert";

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
      <section key="1" className="w-full flex">
        <div className="w-1/3 border-r border-zinc-200 dark:border-zinc-800 overflow-auto">
          <div className="p-4 space-y-2">
            <CollapsableServiceSummary />
            <CollapsableCustomerInformation editable />
            <CollapsableServiceActions editable />
            <>
              <h2 className="text-xl font-bold">Overview</h2>
              <BoatOverview editable />
              <MotorOverview editable />
              <TrailerOverview editable />
            </>
          </div>
        </div>
        <div className="w-2/3">
          <div className="p-4 space-y-4">
            <NoChangesAlert />
            <UnsavedChangesAlert />
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
