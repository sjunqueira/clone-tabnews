import { up } from "infra/migrations/1745408278475_test-migration";
import runner from "node-pg-migrate";

import { join } from 'node:path';

export default async function migrations(request, response) {
  const defaultMigrationsOptions = {
    databaseUrl: process.env.DATABASE_URL,
    migrationsTable: "pgmigrations",
    noLock: true,
    dryRun: true,
    verbose: true,
    dir: join('infra', 'migrations'),
    direction: 'up'
  };

  if (request.method === 'GET') {
    const pendingMigrations = await runner(defaultMigrationsOptions);
    return response.status(200).json(pendingMigrations);
  }
  else if (request.method === 'POST') {
    const migratedMigrations = await runner({
      ...defaultMigrationsOptions,
      dryRun: false,
    });

    if (migratedMigrations.length > 0) {
      return response.status(201).json(migratedMigrations);
    } else {
      return response.status(200).json(migratedMigrations);
    }
  }

  return response.status(405).end();
}
