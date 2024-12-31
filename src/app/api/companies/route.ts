import { NextResponse } from 'next/server';
import pool from '@/lib/db'; // Adjust the import path as needed

export async function GET() {


  try {
    const result = await pool.query('SELECT id, name FROM companies')
    console.log("Db connected");

    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Failed to fetch companies' }, { status: 500 });
  }
}

