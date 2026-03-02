# @dephub/read 📖

> A utility for reading files in Node.js with simple API and CLI.

[![NPM version](https://img.shields.io/npm/v/@dephub/read.svg?style=flat)](https://npmjs.org/package/@dephub/read)
[![ESM-only](https://img.shields.io/badge/ESM-only-brightgreen?style=flat)](https://nodejs.org/)

---

## Features ✨

- 📄 **Simple File Reading** - Read file content with one function call
- 🎯 **TypeScript Ready** - Full type safety with zero configuration
- 🔧 **CLI Interface** - Read files directly from terminal
- 🌐 **Encoding Support** - Multiple file encodings supported
- ⚡ **Lightweight** - Minimal dependencies, focused functionality

---

## Installation 📦

```bash
npm install @dephub/read
# or
pnpm add @dephub/read
# or
yarn add @dephub/read
```

---

## Usage 🎯

### Programmatic API

```typescript
import { readFile } from '@dephub/read';

// Read text file
const content = await readFile('config.json');
const config = JSON.parse(content);

// Read with specific encoding
const binaryData = await readFile('image.png', 'base64');
```

### CLI Usage

```bash
# Quick one-time usage (no installation):
npx @dephub/read config.json

# For frequent usage, install globally:
npm install -g @dephub/read
read config.json

# Or use with package managers:
pnpm dlx @dephub/read config.json
yarn dlx @dephub/read config.json
```

---

## API Reference 📚

### `readFile(filePath, encoding?)`

Reads a file and returns its content.

**Parameters:**

- `filePath` (string) - Path to the file to read
- `encoding` (BufferEncoding) - File encoding (default: 'utf-8')

**Returns:** `Promise<string>`

**Example:**

```typescript
import { readFile } from '@dephub/read';

// Read JSON configuration
const jsonContent = await readFile('app.config.json');
const config = JSON.parse(jsonContent);

// Read binary data
const base64Image = await readFile('logo.png', 'base64');
```

---

## License 📄

MIT License – see [LICENSE](LICENSE) for details.

**Author:** Estarlin R ([estarlincito.com](https://estarlincito.com))
