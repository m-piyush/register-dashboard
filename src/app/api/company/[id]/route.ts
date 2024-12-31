import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    // Fetch company details
    const companyResult = await pool.query('SELECT * FROM companies WHERE id = $1', [id]);
    const directorsResult = await pool.query(
      `
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
      `,
      [id]
    );

    if (companyResult.rows.length === 0) {
      return NextResponse.json({ error: 'Company not found' }, { status: 404 });
    }

    // Return company details and directors
    return NextResponse.json({
      company: companyResult.rows[0],
      directors: directorsResult.rows,
    });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Failed to fetch company details' }, { status: 500 });
  }
}
