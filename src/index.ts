/**
 * qrcodefyi -- TypeScript API client for QRCodeFYI.
 *
 * Search QR code types, versions, encoding modes, and terminology
 * from qrcodefyi.com. Zero dependencies, uses native `fetch`.
 *
 * @example
 * ```ts
 * import { QRCodeFYI } from "qrcodefyi";
 *
 * const api = new QRCodeFYI();
 * const results = await api.search("micro qr");
 * console.log(results);
 * ```
 *
 * @packageDocumentation
 */

export { QRCodeFYI } from "./client.js";

export type {
  CompareResult,
  ComponentDetail,
  EncodingDetail,
  GlossaryTerm,
  QRTypeDetail,
  RandomResult,
  SearchResult,
  StandardDetail,
  UseCaseDetail,
  VersionDetail,
} from "./types.js";
