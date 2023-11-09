import { ServicesApi } from "../api/services-api";

export async function getServiceData(id: string) {
  const serviceResponse = await ServicesApi.getServiceById(id);

  if (serviceResponse.error && serviceResponse.error.message) {
    return undefined;
  }

  if (serviceResponse.count > 0) {
    return serviceResponse.services![0];
  }
}
