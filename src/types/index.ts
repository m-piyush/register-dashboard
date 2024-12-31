export interface Company {
  id: number;
  name: string;
  details?: string;
}

export interface Director {
  id: string;
  name: string;
  details: string;
  company_id: string;
  company_name: string;
  headquarters: string;
  linkedin: string;
  email: string;
  phone: string;
}

export interface CompanyDetails {
  company: Company;
  directors: Director[];
}

export interface ApiResponse {
  company: Company;
  directors: Director[];
};