import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Le port fidèle utilise des balises <img> classiques (assets aux noms
  // contenant espaces/parenthèses) : pas d'optimisation next/image requise.
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: false },
};

export default nextConfig;
