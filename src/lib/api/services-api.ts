import { delay } from "../utils";

export const ServicesApi = {
  getAllOpenServices: async (): Promise<string> => {
    await delay(2000);
    return '5';
  },
  getServicesPendingCustomer: async (): Promise<string> => {
    await delay(2300);
    return '1';
  }
}