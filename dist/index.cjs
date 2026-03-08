"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  QRCodeFYI: () => QRCodeFYI
});
module.exports = __toCommonJS(index_exports);

// src/client.ts
var QRCodeFYI = class {
  baseUrl;
  constructor(baseUrl = "https://qrcodefyi.com") {
    this.baseUrl = baseUrl.replace(/\/+$/, "");
  }
  async get(path, params) {
    const url = new URL(path, this.baseUrl);
    if (params) {
      Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
    }
    const res = await fetch(url.toString());
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  }
  /** Search QR code types, versions, encodings, and glossary terms. */
  async search(query) {
    return this.get("/api/search/", { q: query });
  }
  /** Get a glossary term by slug. */
  async glossaryTerm(slug) {
    return this.get(`/api/term/${slug}/`);
  }
  /** Get QR code type detail by slug. */
  async qrType(slug) {
    return this.get(`/api/type/${slug}/`);
  }
  /** Get QR code version detail by version number. */
  async version(version) {
    return this.get(`/api/version/${version}/`);
  }
  /** Get QR code component detail by slug. */
  async component(slug) {
    return this.get(`/api/component/${slug}/`);
  }
  /** Get encoding mode detail by slug. */
  async encoding(slug) {
    return this.get(`/api/encoding/${slug}/`);
  }
  /** Get QR code standard detail by slug. */
  async standard(slug) {
    return this.get(`/api/standard/${slug}/`);
  }
  /** Get use case detail by slug. */
  async useCase(slug) {
    return this.get(`/api/use-case/${slug}/`);
  }
  /** Compare two QR code types. */
  async compare(slugA, slugB) {
    return this.get("/api/compare/", {
      a: slugA,
      b: slugB
    });
  }
  /** Get a random QR code type. */
  async random() {
    return this.get("/api/random/");
  }
  /** Get the OpenAPI 3.1.0 specification. */
  async openapi() {
    return this.get("/api/openapi.json");
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  QRCodeFYI
});
