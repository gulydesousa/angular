const{ writeFileSync, mkdirSync } = require('fs');

// Load environment variables from .env file
require('dotenv').config()

const targetPath = `./src/environments/environment.ts`;

const envConfigFile = `
export const environment = {
  mapbox_key: "${process.env.MAPBOX_KEY}"
};
`;

// Ensure that the directory exists
mkdirSync('src/environments', { recursive: true });

writeFileSync(targetPath, envConfigFile);
