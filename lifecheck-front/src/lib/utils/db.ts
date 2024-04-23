import { drizzle } from 'drizzle-orm/aws-data-api/pg';
import { RDSDataClient } from '@aws-sdk/client-rds-data';
import config from '../../../drizzle.config';

const rdsClient = new RDSDataClient({
  region: config.dbCredentials.region,
});

export const db = drizzle(rdsClient, config.dbCredentials);