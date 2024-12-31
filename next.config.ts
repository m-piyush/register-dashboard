import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  "compilerOptions": {
    "typeRoots": ["node_modules/@types"]
  }
  
};

export default nextConfig;
