import { ServiceProvider } from "@/context/current-service";
import { getServiceData } from "@/lib/util/get-service-data";

export default async function ServiceLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { serviceId: string };
}) {
  const selectedServiceId = params.serviceId;
  const service = await getServiceData(selectedServiceId);

  return <ServiceProvider value={service}>{children}</ServiceProvider>;
}
