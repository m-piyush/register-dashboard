export interface Company {
  id: number;
  name: string;
  details?: string;
}

export interface CompaniesDirectors {
  id: string;
  name: string;
  company_id: string;
  company_name: string;
  quotes: string;
  rating: number;
  mainheading: string;
  subheading: string;
}

export interface ApiResponse {
  company: Company;
  CompaniesDirectors: CompaniesDirectors[];
}