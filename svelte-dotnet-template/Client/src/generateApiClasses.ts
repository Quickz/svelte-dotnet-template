import { config } from "./config.js";
import { execSync } from 'child_process';

const command = `npx swagger-typescript-api -p "${config.apiEndpoint}/swagger/v1/swagger.json" -o ./src/`;
const result = execSync(command, { encoding: 'utf-8' });
console.log(command);
console.log(result);
