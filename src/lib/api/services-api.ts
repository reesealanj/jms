import { delay } from "../utils";

export const ServicesApi = {
  getAllOpenServices: async (): Promise<string> => {
    await delay(4000);
    return '5';
  },
  getServicesPendingCustomer: async (): Promise<string> => {
    await delay(2000);
    return '1';
  },
  getServicesPendingParts: async (): Promise<string> => {
    await delay(1000);
    return '4';
  }
}