"use client";

import { ServicesApi } from "@/lib/api/services-api";
import { Service, ServiceResponse } from "@/lib/types/service";
import { createContext, useContext, useState } from "react";

const ServiceContext = createContext<{
  service: Service | undefined;
  updateSelectedService: (value: string) => void;
}>({
  service: undefined,
  updateSelectedService: (value: string) => {},
});

export function ServiceProvider(props: {
  value: Service | undefined;
  children: React.ReactNode;
}) {
  const [currentService, setCurrentService] = useState<Service | undefined>(
    props.value
  );

  async function updateCurrentService(id: string) {
    const newService = await ServicesApi.getServiceById(id);
    if (
      newService &&
      !newService?.error?.msg &&
      newService?.services &&
      newService.services.length > 0
    ) {
      setCurrentService(newService.services[0]);
    }
  }

  return (
    <ServiceContext.Provider
      value={{
        service: currentService,
        updateSelectedService: updateCurrentService,
      }}
    >
      {props.children}
    </ServiceContext.Provider>
  );
}

export function useService() {
  const context = useContext(ServiceContext);
  if (!context) {
    throw new Error(
      "useService failure: service context must be used inside a ServiceProvider"
    );
  }
  return context;
}
