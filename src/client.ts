/**
 * QRCodeFYI API client — TypeScript wrapper for qrcodefyi.com REST API.
 *
 * Zero dependencies. Uses native `fetch`.
 *
 * @example
 * ```ts
 * import { QRCodeFYI } from "qrcodefyi";
 * const api = new QRCodeFYI();
 * const items = await api.search("query");
 * ```
 */

/** Generic API response type. */
export interface ApiResponse {
  [key: string]: unknown;
}

export class QRCodeFYI {
  private baseUrl: string;

  constructor(baseUrl = "https://qrcodefyi.com") {
    this.baseUrl = baseUrl.replace(/\/+$/, "");
  }

  private async get<T = ApiResponse>(
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

  // -- Endpoints ----------------------------------------------------------

  /** List all comparisons. */
  async listComparisons(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/comparisons/", params);
  }

  /** Get comparison by slug. */
  async getComparison(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/comparisons/${slug}/`);
  }

  /** List all components. */
  async listComponents(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/components/", params);
  }

  /** Get component by slug. */
  async getComponent(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/components/${slug}/`);
  }

  /** List all encoding modes. */
  async listEncodingModes(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/encoding-modes/", params);
  }

  /** Get encoding mode by slug. */
  async getEncodingMode(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/encoding-modes/${slug}/`);
  }

  /** List all faqs. */
  async listFaqs(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/faqs/", params);
  }

  /** Get faq by slug. */
  async getFaq(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/faqs/${slug}/`);
  }

  /** List all glossary. */
  async listGlossary(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/glossary/", params);
  }

  /** Get term by slug. */
  async getTerm(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/glossary/${slug}/`);
  }

  /** List all guides. */
  async listGuides(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/guides/", params);
  }

  /** Get guide by slug. */
  async getGuide(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/guides/${slug}/`);
  }

  /** List all recipes. */
  async listRecipes(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/recipes/", params);
  }

  /** Get recipe by slug. */
  async getRecipe(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/recipes/${slug}/`);
  }

  /** List all scan scenarios. */
  async listScanScenarios(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/scan-scenarios/", params);
  }

  /** Get scan scenario by slug. */
  async getScanScenario(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/scan-scenarios/${slug}/`);
  }

  /** List all standards. */
  async listStandards(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/standards/", params);
  }

  /** Get standard by slug. */
  async getStandard(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/standards/${slug}/`);
  }

  /** List all tools. */
  async listTools(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/tools/", params);
  }

  /** Get tool by slug. */
  async getTool(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/tools/${slug}/`);
  }

  /** List all types. */
  async listTypes(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/types/", params);
  }

  /** Get type by slug. */
  async getType(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/types/${slug}/`);
  }

  /** List all use cases. */
  async listUseCases(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/use-cases/", params);
  }

  /** Get use case by slug. */
  async getUseCase(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/use-cases/${slug}/`);
  }

  /** List all versions. */
  async listVersions(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/versions/", params);
  }

  /** Get version by slug. */
  async getVersion(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/versions/${slug}/`);
  }

  /** Search across all content. */
  async search(query: string, params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/search/", { q: query, ...params });
  }
}
