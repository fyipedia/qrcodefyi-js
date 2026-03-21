# qrcodefyi

[![npm version](https://agentgif.com/badge/npm/qrcodefyi/version.svg)](https://www.npmjs.com/package/qrcodefyi)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen)](https://www.npmjs.com/package/qrcodefyi)

TypeScript API client for [QRCodeFYI](https://qrcodefyi.com) -- the comprehensive QR code reference covering QR code types (Model 1, Model 2, Micro QR, rMQR), 40 versions, 4 encoding modes, 4 error correction levels, ISO/IEC 18004, and real-world scan scenarios. 425 records total. Zero dependencies, uses native `fetch`.

Extracted from [qrcodefyi.com](https://qrcodefyi.com), used by developers and engineers worldwide.

> **Explore at [qrcodefyi.com](https://qrcodefyi.com)** -- [Type Explorer](https://qrcodefyi.com/type/) | [Version Reference](https://qrcodefyi.com/version/) | [Encoding Modes](https://qrcodefyi.com/encoding/) | [Glossary](https://qrcodefyi.com/glossary/)

<p align="center">
  <img src="https://raw.githubusercontent.com/fyipedia/qrcodefyi-js/main/demo.gif" alt="qrcodefyi demo -- QR code types, versions, encoding modes lookup and comparison in TypeScript" width="800">
</p>

## Table of Contents

- [Install](#install)
- [Quick Start](#quick-start)
- [What You Can Do](#what-you-can-do)
- [API Reference](#api-reference)
- [TypeScript Types](#typescript-types)
- [Features](#features)
- [Learn More](#learn-more)
- [Also Available for Python](#also-available-for-python)
- [Tag FYI Family](#tag-fyi-family)
- [FYIPedia Developer Tools](#fyipedia-developer-tools)
- [License](#license)

## Install

```bash
npm install qrcodefyi
```

Works in Node.js 18+, Deno, Bun, and browsers (ESM). Zero dependencies -- uses native `fetch`.

## Quick Start

```typescript
import { QRCodeFYI } from "qrcodefyi";

const api = new QRCodeFYI();

// Search QR code types, versions, encoding modes
const results = await api.search("micro qr");
console.log(results);

// Get QR code type detail
const model2 = await api.getType("model-2");
console.log(model2.name); // "QR Code Model 2"

// Get version detail with data capacities
const v10 = await api.getVersion("10");
console.log(v10.modules); // "57x57"

// Browse encoding modes
const modes = await api.listEncodingModes();
```

## What You Can Do

### Look Up QR Code Types and Versions

QRCodeFYI covers every QR variant from Model 1 (1992) to rMQR (2022), plus all 40 Model 2 versions with module grids from 21x21 to 177x177. Each record includes data capacity at all 4 error correction levels, structural components, and applicable standards.

| Type | Year | Max Capacity | Key Feature |
|------|------|-------------|-------------|
| QR Code Model 2 | 1997 | 7,089 numerics | Current standard, ISO 18004 |
| Micro QR | 2004 | 35 numerics | Single finder pattern, compact |
| rMQR | 2022 | 361 numerics | Rectangular, narrow spaces |

```typescript
// Get QR type detail
const microQR = await api.getType("micro-qr");
console.log(microQR.versions); // ["M1", "M2", "M3", "M4"]

// Get encoding mode detail
const numeric = await api.getEncodingMode("numeric");
console.log(numeric.bits_per_char); // "3.33"
```

Learn more: [Type Explorer](https://qrcodefyi.com/type/) · [Version Reference](https://qrcodefyi.com/version/)

### Browse Standards and Use Cases

```typescript
// List QR code standards
const standards = await api.listStandards();

// Get ISO/IEC 18004 specification
const iso18004 = await api.getStandard("iso-iec-18004");

// Browse real-world use cases
const payment = await api.getUseCase("mobile-payment");
```

Learn more: [Standards](https://qrcodefyi.com/standard/) · [Use Cases](https://qrcodefyi.com/use-case/)

## API Reference

| Method | Description |
|--------|-------------|
| `search(query)` | Full-text search across all content |
| `listTypes()` | List all QR code types |
| `getType(slug)` | Get QR type detail |
| `listVersions()` | List QR code versions (1-40) |
| `getVersion(slug)` | Get version detail with capacities |
| `listComponents()` | List structural components |
| `getComponent(slug)` | Get component detail |
| `listEncodingModes()` | List encoding modes |
| `getEncodingMode(slug)` | Get encoding mode detail |
| `listStandards()` | List standards |
| `getStandard(slug)` | Get standard detail |
| `listUseCases()` | List use cases |
| `getUseCase(slug)` | Get use case detail |
| `listComparisons()` | List QR type comparisons |
| `listScanScenarios()` | List scan scenarios |
| `listGlossary()` | List glossary terms |
| `getTerm(slug)` | Get glossary term |
| `listGuides()` | List QR guides |

## TypeScript Types

All response types are fully typed:

```typescript
import type { ApiResponse } from "qrcodefyi";
```

## Features

- **Zero dependencies** -- uses native `fetch`, no axios/node-fetch required
- **TypeScript-first** -- full type definitions, strict mode compatible
- **Universal** -- works in Node.js 18+, Deno, Bun, and browsers
- **ESM** -- native ES modules with tree-shaking support
- **Lightweight** -- < 5 KB minified, no runtime overhead

## Learn More

- **Browse**: [qrcodefyi.com](https://qrcodefyi.com) -- 425 records of QR code types, versions, encoding modes
- **Reference**: [Glossary](https://qrcodefyi.com/glossary/) · [Guides](https://qrcodefyi.com/guide/)
- **API**: [REST API Docs](https://qrcodefyi.com/api/) · [OpenAPI Spec](https://qrcodefyi.com/api/openapi.json)
- **Python**: [qrcodefyi on PyPI](https://pypi.org/project/qrcodefyi/) -- includes CLI, MCP server, and REST API client

## Also Available for Python

```bash
pip install qrcodefyi[all]
```

The Python package includes CLI (`qrcodefyi search "query"`), MCP server for Claude/Cursor, and full REST API client. See [qrcodefyi on PyPI](https://pypi.org/project/qrcodefyi/).

## Tag FYI Family

Part of the [FYIPedia](https://fyipedia.com) open-source developer tools ecosystem -- automatic identification and data capture technologies.

| Package | npm | PyPI | Description |
|---------|-----|------|-------------|
| barcodefyi | [npm](https://www.npmjs.com/package/barcodefyi) | [PyPI](https://pypi.org/project/barcodefyi/) | 518 records -- barcode symbologies, standards -- [barcodefyi.com](https://barcodefyi.com) |
| **qrcodefyi | [npm](https://www.npmjs.com/package/qrcodefyi) | [PyPI](https://pypi.org/project/qrcodefyi/) | 425 records -- QR code types, versions -- [qrcodefyi.com](https://qrcodefyi.com)** |
| nfcfyi | [npm](https://www.npmjs.com/package/nfcfyi) | [PyPI](https://pypi.org/project/nfcfyi/) | 288 records -- NFC chips, NDEF -- [nfcfyi.com](https://nfcfyi.com) |
| blefyi | [npm](https://www.npmjs.com/package/blefyi) | [PyPI](https://pypi.org/project/blefyi/) | 261 records -- BLE chips, GATT, beacons -- [blefyi.com](https://blefyi.com) |
| rfidfyi | [npm](https://www.npmjs.com/package/rfidfyi) | [PyPI](https://pypi.org/project/rfidfyi/) | 318 records -- RFID tags, frequencies -- [rfidfyi.com](https://rfidfyi.com) |
| smartcardfyi | [npm](https://www.npmjs.com/package/smartcardfyi) | [PyPI](https://pypi.org/project/smartcardfyi/) | 280 records -- smart cards, EMV -- [smartcardfyi.com](https://smartcardfyi.com) |

## FYIPedia Developer Tools

| Package | PyPI | npm | Description |
|---------|------|-----|-------------|
| barcodefyi | [PyPI](https://pypi.org/project/barcodefyi/) | [npm](https://www.npmjs.com/package/barcodefyi) | Barcode symbologies, standards -- [barcodefyi.com](https://barcodefyi.com) |
| qrcodefyi | [PyPI](https://pypi.org/project/qrcodefyi/) | [npm](https://www.npmjs.com/package/qrcodefyi) | QR code types, versions, encoding -- [qrcodefyi.com](https://qrcodefyi.com) |
| nfcfyi | [PyPI](https://pypi.org/project/nfcfyi/) | [npm](https://www.npmjs.com/package/nfcfyi) | NFC chips, NDEF, standards -- [nfcfyi.com](https://nfcfyi.com) |
| blefyi | [PyPI](https://pypi.org/project/blefyi/) | [npm](https://www.npmjs.com/package/blefyi) | BLE profiles, beacons, chips -- [blefyi.com](https://blefyi.com) |
| rfidfyi | [PyPI](https://pypi.org/project/rfidfyi/) | [npm](https://www.npmjs.com/package/rfidfyi) | RFID tags, readers, frequencies -- [rfidfyi.com](https://rfidfyi.com) |
| smartcardfyi | [PyPI](https://pypi.org/project/smartcardfyi/) | [npm](https://www.npmjs.com/package/smartcardfyi) | Smart cards, EMV, platforms -- [smartcardfyi.com](https://smartcardfyi.com) |

## License

MIT
