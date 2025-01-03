import { NextResponse} from 'next/server';
import pool from '@/lib/db';
import {   CompaniesDirectors, ApiResponse } from "@/types/index";

export const GET = async () => {

  try {
    const CompaniesDirectorsResult = await pool.query<CompaniesDirectors>(`
      SELECT 
        id,
        name,
        company_id,
        company_name,
        quotes,
        rating,
        mainheading,
        subheading
      FROM companiesdirectors
    `,);

    const response: ApiResponse = {
      CompaniesDirectors: CompaniesDirectorsResult.rows,
    };
    return NextResponse.json(response);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Failed to fetch company details' }, { status: 500 });
  }
};
