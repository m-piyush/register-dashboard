import { NextResponse,NextRequest } from 'next/server';
import pool from '@/lib/db'; 
import { Company, Director, ApiResponse } from "@/types/index";

export const GET = async (req: NextRequest, { params }:  { params:Promise<{ id: string }> }) => {
  const { id } = await params; 
  try {
    // Fetch company details
    const companyResult = await pool.query<Company>('SELECT * FROM companies WHERE id = $1', [id]);
    const directorsResult = await pool.query<Director>(`
      SELECT 
        id, 
        name, 
        details, 
        company_id, 
        company_name, 
        headquarters, 
        linkedin, 
        email, 
        phone 
      FROM directors 
      WHERE company_id = $1
    `, [id]);

    if (companyResult.rows.length === 0) {
      return NextResponse.json({ error: 'Company not found' }, { status: 404 });
    }

    // Return company details and directors
    const response: ApiResponse = {
      company: companyResult.rows[0],
      directors: directorsResult.rows,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Failed to fetch company details' }, { status: 500 });
  }
};
