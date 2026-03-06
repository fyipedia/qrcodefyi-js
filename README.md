# qrcodefyi

[![npm](https://img.shields.io/npm/v/qrcodefyi)](https://www.npmjs.com/package/qrcodefyi)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen)](https://www.npmjs.com/package/qrcodefyi)

TypeScript API client for [QRCodeFYI](https://qrcodefyi.com) -- the comprehensive QR code reference covering QR code types (Model 1, Model 2, Micro QR, rMQR), 40 versions, 4 encoding modes, 4 error correction levels, ISO/IEC 18004 standards, and real-world use cases. Zero dependencies, uses native `fetch`.

> **Explore QR codes at [qrcodefyi.com](https://qrcodefyi.com)** -- [Types](https://qrcodefyi.com/types/) | [Versions](https://qrcodefyi.com/versions/) | [Glossary](https://qrcodefyi.com/glossary/) | [API Docs](https://qrcodefyi.com/developers/)

## Install

```bash
npm install qrcodefyi
```

Works in Node.js, Deno, Bun, and browsers (ESM).

## Quick Start

```typescript
import { QRCodeFYI } from "qrcodefyi";

const api = new QRCodeFYI();

// Search QR code types, versions, encodings
const results = await api.search("micro qr");

// Get QR code type detail
const model2 = await api.qrType("model-2");
console.log(model2.error_correction_levels); // ["L", "M", "Q", "H"]

// Get version detail with data capacities
const v10 = await api.version(10);
console.log(v10.numeric_capacity);

// Compare two QR code types
const comparison = await api.compare("model-2", "micro-qr");
```

## API Methods

| Method | Description |
|--------|-------------|
| `search(query)` | Search types, versions, encodings, glossary |
| `glossaryTerm(slug)` | Get glossary term definition |
| `qrType(slug)` | QR code type detail |
| `version(version)` | QR code version detail by number |
| `component(slug)` | QR code component detail |
| `encoding(slug)` | Encoding mode detail |
| `standard(slug)` | Standard detail |
| `useCase(slug)` | Use case detail |
| `compare(slugA, slugB)` | Compare two QR code types |
| `random()` | Random QR code type |
| `openapi()` | OpenAPI 3.1.0 specification |

## TypeScript Types

```typescript
import type {
  SearchResult, QRTypeDetail, VersionDetail, ComponentDetail,
  EncodingDetail, StandardDetail, UseCaseDetail, GlossaryTerm, CompareResult,
} from "qrcodefyi";
```

## Also Available

| Language | Package |
|----------|---------|
| Python | [qrcodefyi on PyPI](https://pypi.org/project/qrcodefyi/) |
| TypeScript | **This package** |

## Code FYI Family

Part of the [FYIPedia](https://fyipedia.com) open-source developer tools ecosystem -- automatic identification and data capture technologies.

| Package | npm | Description |
|---------|-----|-------------|
| barcodefyi | [npm](https://www.npmjs.com/package/barcodefyi) | Barcode symbologies, standards -- [barcodefyi.com](https://barcodefyi.com/) |
| **qrcodefyi** | [npm](https://www.npmjs.com/package/qrcodefyi) | **QR code types, versions, encoding -- [qrcodefyi.com](https://qrcodefyi.com/)** |
| nfcfyi | [npm](https://www.npmjs.com/package/nfcfyi) | NFC chips, NDEF, standards -- [nfcfyi.com](https://nfcfyi.com/) |
| blefyi | [npm](https://www.npmjs.com/package/blefyi) | BLE profiles, beacons, chips -- [blefyi.com](https://blefyi.com/) |
| rfidfyi | [npm](https://www.npmjs.com/package/rfidfyi) | RFID tags, readers, frequencies -- [rfidfyi.com](https://rfidfyi.com/) |
| smartcardfyi | [npm](https://www.npmjs.com/package/smartcardfyi) | Smart cards, EMV, platforms -- [smartcardfyi.com](https://smartcardfyi.com/) |

## License

MIT
