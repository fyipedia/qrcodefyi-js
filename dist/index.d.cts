/**
 * QRCodeFYI API response types.
 */
interface SearchResult {
    results: Array<{
        name: string;
        slug: string;
        type: string;
        url: string;
    }>;
    query: string;
    total: number;
}
interface GlossaryTerm {
    name: string;
    slug: string;
    definition: string;
    related_terms?: string[];
}
interface QRTypeDetail {
    slug: string;
    name: string;
    description: string;
    max_data_capacity?: string;
    error_correction_levels?: string[];
    url: string;
}
interface VersionDetail {
    version: number;
    modules: number;
    description: string;
    numeric_capacity?: number;
    alphanumeric_capacity?: number;
    byte_capacity?: number;
    url: string;
}
interface ComponentDetail {
    slug: string;
    name: string;
    description: string;
    url: string;
}
interface EncodingDetail {
    slug: string;
    name: string;
    description: string;
    character_set?: string;
    bits_per_character?: number;
    url: string;
}
interface StandardDetail {
    slug: string;
    name: string;
    description: string;
    organization?: string;
    year?: number;
    url: string;
}
interface UseCaseDetail {
    slug: string;
    name: string;
    description: string;
    qr_types?: string[];
    url: string;
}
interface CompareResult {
    item_a: {
        name: string;
        slug: string;
    };
    item_b: {
        name: string;
        slug: string;
    };
    comparison: Record<string, unknown>;
}
interface RandomResult {
    slug: string;
    name: string;
    type: string;
    url: string;
}

/**
 * QRCodeFYI API client -- TypeScript wrapper for qrcodefyi.com REST API.
 *
 * Zero dependencies. Uses native `fetch`.
 */

declare class QRCodeFYI {
    private baseUrl;
    constructor(baseUrl?: string);
    private get;
    /** Search QR code types, versions, encodings, and glossary terms. */
    search(query: string): Promise<SearchResult>;
    /** Get a glossary term by slug. */
    glossaryTerm(slug: string): Promise<GlossaryTerm>;
    /** Get QR code type detail by slug. */
    qrType(slug: string): Promise<QRTypeDetail>;
    /** Get QR code version detail by version number. */
    version(version: number): Promise<VersionDetail>;
    /** Get QR code component detail by slug. */
    component(slug: string): Promise<ComponentDetail>;
    /** Get encoding mode detail by slug. */
    encoding(slug: string): Promise<EncodingDetail>;
    /** Get QR code standard detail by slug. */
    standard(slug: string): Promise<StandardDetail>;
    /** Get use case detail by slug. */
    useCase(slug: string): Promise<UseCaseDetail>;
    /** Compare two QR code types. */
    compare(slugA: string, slugB: string): Promise<CompareResult>;
    /** Get a random QR code type. */
    random(): Promise<RandomResult>;
    /** Get the OpenAPI 3.1.0 specification. */
    openapi(): Promise<Record<string, unknown>>;
}

export { type CompareResult, type ComponentDetail, type EncodingDetail, type GlossaryTerm, QRCodeFYI, type QRTypeDetail, type RandomResult, type SearchResult, type StandardDetail, type UseCaseDetail, type VersionDetail };
