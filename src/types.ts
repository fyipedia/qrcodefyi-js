/**
 * QRCodeFYI API response types.
 */

export interface SearchResult {
  results: Array<{ name: string; slug: string; type: string; url: string }>;
  query: string;
  total: number;
}

export interface GlossaryTerm {
  name: string;
  slug: string;
  definition: string;
  related_terms?: string[];
}

export interface QRTypeDetail {
  slug: string;
  name: string;
  description: string;
  max_data_capacity?: string;
  error_correction_levels?: string[];
  url: string;
}

export interface VersionDetail {
  version: number;
  modules: number;
  description: string;
  numeric_capacity?: number;
  alphanumeric_capacity?: number;
  byte_capacity?: number;
  url: string;
}

export interface ComponentDetail {
  slug: string;
  name: string;
  description: string;
  url: string;
}

export interface EncodingDetail {
  slug: string;
  name: string;
  description: string;
  character_set?: string;
  bits_per_character?: number;
  url: string;
}

export interface StandardDetail {
  slug: string;
  name: string;
  description: string;
  organization?: string;
  year?: number;
  url: string;
}

export interface UseCaseDetail {
  slug: string;
  name: string;
  description: string;
  qr_types?: string[];
  url: string;
}

export interface CompareResult {
  item_a: { name: string; slug: string };
  item_b: { name: string; slug: string };
  comparison: Record<string, unknown>;
}

export interface RandomResult {
  slug: string;
  name: string;
  type: string;
  url: string;
}
