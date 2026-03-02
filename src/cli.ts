#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Command, CommandError } from '@dephub/command';
import { logger } from '@dephub/logger';

import { readFile } from './core/read.js';
import { description, name, version } from './utils/pkg.js';

const VALID_ENCODINGS = [
  'utf8',
  'utf-8',
  'utf16le',
  'latin1',
  'base64',
  'base64url',
  'hex',
  'ascii',
] as const;

const cmd = new Command()
  .name(name.split('/')[1] ?? 'read')
  .version(version)
  .description(description)
  .argument('filePath', 'Path to the file to read')
  .option('encoding', {
    description: `File encoding (default: utf8). Supported: ${VALID_ENCODINGS.join(', ')}`,
    optional: true,
  })
  .handler(async ({ args: { filePath }, options: { encoding = 'utf8' } }) => {
    if (!VALID_ENCODINGS.includes(encoding as any)) {
      logger.error(
        `Invalid encoding: ${encoding}. Must be one of: ${VALID_ENCODINGS.join(
          ', ',
        )}`,
      );
      process.exit(1);
    }

    try {
      const content = await readFile(filePath, encoding as BufferEncoding);
      process.stdout.write(content);
    } catch (err: any) {
      logger.error(`Failed to read ${filePath}: ${err.message}`);
      process.exit(1);
    }
  });

try {
  await cmd.run();
} catch (err) {
  if (err instanceof CommandError) {
    logger.error(`\nError: ${err.message}\n`);
    cmd.help();
    process.exit(1);
  }
  throw err;
}
