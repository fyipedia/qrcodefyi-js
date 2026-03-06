/**
 * QRCodeFYI API client -- TypeScript wrapper for qrcodefyi.com REST API.
 *
 * Zero dependencies. Uses native `fetch`.
 */

import type {
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

export class QRCodeFYI {
  private baseUrl: string;

  constructor(baseUrl = "https://qrcodefyi.com") {
    this.baseUrl = baseUrl.replace(/\/+$/, "");
  }

  private async get<T>(
    path: string,
    params?: Record<string, string>,
  ): Promise<T> {
    const url = new URL(path, this.baseUrl);
    if (params) {
      Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
    }
    const res = await fetch(url.toString());
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json() as Promise<T>;
  }

  /** Search QR code types, versions, encodings, and glossary terms. */
  async search(query: string): Promise<SearchResult> {
    return this.get<SearchResult>("/api/search/", { q: query });
  }

  /** Get a glossary term by slug. */
  async glossaryTerm(slug: string): Promise<GlossaryTerm> {
    return this.get<GlossaryTerm>(`/api/term/${slug}/`);
  }

  /** Get QR code type detail by slug. */
  async qrType(slug: string): Promise<QRTypeDetail> {
    return this.get<QRTypeDetail>(`/api/type/${slug}/`);
  }

  /** Get QR code version detail by version number. */
  async version(version: number): Promise<VersionDetail> {
    return this.get<VersionDetail>(`/api/version/${version}/`);
  }

  /** Get QR code component detail by slug. */
  async component(slug: string): Promise<ComponentDetail> {
    return this.get<ComponentDetail>(`/api/component/${slug}/`);
  }

  /** Get encoding mode detail by slug. */
  async encoding(slug: string): Promise<EncodingDetail> {
    return this.get<EncodingDetail>(`/api/encoding/${slug}/`);
  }

  /** Get QR code standard detail by slug. */
  async standard(slug: string): Promise<StandardDetail> {
    return this.get<StandardDetail>(`/api/standard/${slug}/`);
  }

  /** Get use case detail by slug. */
  async useCase(slug: string): Promise<UseCaseDetail> {
    return this.get<UseCaseDetail>(`/api/use-case/${slug}/`);
  }

  /** Compare two QR code types. */
  async compare(slugA: string, slugB: string): Promise<CompareResult> {
    return this.get<CompareResult>("/api/compare/", {
      a: slugA,
      b: slugB,
    });
  }

  /** Get a random QR code type. */
  async random(): Promise<RandomResult> {
    return this.get<RandomResult>("/api/random/");
  }

  /** Get the OpenAPI 3.1.0 specification. */
  async openapi(): Promise<Record<string, unknown>> {
    return this.get<Record<string, unknown>>("/api/openapi.json");
  }
}
