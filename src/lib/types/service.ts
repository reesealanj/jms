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

type Customer = {
  id: string;
};

type Motor = {
  id: string;
};

type Trailer = {
  id: string;
};

type Part = {
  id: string;
};

type Labor = {
  id: string;
};

type Boat = {
  id: string;
  motors: Motor[];
  trailer: Trailer;
};

type ServiceComment = {
  id: string;
  content: string;
  createdAt: string;
  isInternal: boolean;
};

type finalService = {
  id: string;
  status: string;
  customerComments: ServiceComment[];
  comments: ServiceComment[];
  customer: Customer;
  boat: Boat;
  parts: Part[];
  labor: Labor[];
};
