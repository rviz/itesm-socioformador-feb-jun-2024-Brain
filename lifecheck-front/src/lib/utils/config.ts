import { loadEnvConfig } from '@next/env';

// loadEnvConfig(process.env.PWD);
const projectDir = process.env.PWD;
loadEnvConfig(projectDir);
