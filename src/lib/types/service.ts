export type ServiceResponse = {
  services?: Service[];
  error?: Record<string, any>;
  count: number;
};

export type Service = {
  id: string;
  name: string;
  status: string;
};
