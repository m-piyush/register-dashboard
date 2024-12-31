import { Pool } from 'pg';

// Connection string for Render PostgreSQL database
const conString = "postgresql://postgres_hp5e_user:kTdVPIQfMbx56hKQ1cMLLHjjIcrXDGQz@dpg-ctpnhe8gph6c73dftge0-a.oregon-postgres.render.com/postgres_hp5e";

// Create a new pool instance
const pool = new Pool({
  connectionString: conString,
  ssl: {
    rejectUnauthorized: false, // This is required for connecting to Render's managed databases
  },
});

// Example function to test the database connection
const testConnection = async () => {
  try {
    const client = await pool.connect();
    console.log("Connected to the database successfully!");
    client.release();
  } catch (err) {
    console.error("Failed to connect to the database:", err);
  }
};

// Call the test connection function
testConnection();

export default pool;