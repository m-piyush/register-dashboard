import { NextResponse} from 'next/server';
import pool from '@/lib/db';
import {   CompaniesDirectors } from "@/types/index";

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

    
    return NextResponse.json(CompaniesDirectorsResult.rows);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Failed to fetch company details' }, { status: 500 });
  }
};
