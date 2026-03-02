/* eslint-disable security/detect-non-literal-fs-filename */
import { readFile as fsReadFile } from 'node:fs/promises';

/**
 * Reads a file and returns its content as a string
 * @param filePath - Path to the file to read
 * @param encoding - File encoding (default: 'utf-8')
 * @returns File content as string
 * @example
 * ```typescript
 * const content = await readFile('config.json');
 * const data = JSON.parse(content);
 * ```
 */
export const readFile = async (
  filePath: string,
  encoding: BufferEncoding = 'utf-8',
): Promise<string> => fsReadFile(filePath, encoding);
