export interface Company {
    id: number;
    name: string;
    details?: string;
  }
  
  export interface Director {
    id: Key | null | undefined;
    details: ReactNode;
    company_name: ReactNode;
    headquarters: ReactNode;
    linkedin: string | undefined;
    email: ReactNode;
    phone: ReactNode;
    name: string;
  }
  
  export interface CompanyDetails {
    company: Company;
    directors: Director[];
  }
  