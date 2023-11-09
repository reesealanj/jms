import { Service, ServiceResponse } from "../types/service";
import { delay } from "../utils";
import { MOCK_SERVICES_LIST } from "./mock/mock-services-list";

export const ServicesApi = {
  getAllOpenServicesCount: async (): Promise<string> => {
    await delay(4000);
    const servicesOpen = MOCK_SERVICES_LIST.filter((service) => {
      return service.status !== "closed";
    }).length.toString();
    return servicesOpen;
  },
  getServicesPendingCustomerCount: async (): Promise<string> => {
    await delay(2000);
    const servicesPendingCustomerInput = MOCK_SERVICES_LIST.filter(
      (service) => {
        return service.status === "needsCustomerInput";
      }
    ).length.toString();
    return servicesPendingCustomerInput;
  },
  getServicesPendingPartsCount: async (): Promise<string> => {
    await delay(1000);
    const servicesPendingPartsCount = MOCK_SERVICES_LIST.filter((service) => {
      return service.status === "needsParts";
    }).length.toString();
    return servicesPendingPartsCount;
  },
  getServiceList: async (): Promise<ServiceResponse> => {
    await delay(300);
    return {
      services: MOCK_SERVICES_LIST,
      count: MOCK_SERVICES_LIST.length,
    } as ServiceResponse;
  },
  getServiceById: async (id: string): Promise<ServiceResponse> => {
    await delay(200);
    const selectedService = MOCK_SERVICES_LIST.filter((service) => {
      return service.id === id;
    });
    return {
      services: selectedService,
      error:
        selectedService.length > 0
          ? {}
          : { message: `Service not found with ID ${id}` },
      count: selectedService.length,
    };
  },
};
