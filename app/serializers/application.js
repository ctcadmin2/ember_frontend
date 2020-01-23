import JSONAPISerializer from "@ember-data/serializer/json-api";
import camelCaseKeys from "camelcase-keys";

export default class ApplicationSerializer extends JSONAPISerializer {
  normalizeArrayResponse() {
    let normalizedDocument = super.normalizeArrayResponse(...arguments);

    // Customize document meta
    normalizedDocument.meta = camelCaseKeys(normalizedDocument.meta);

    return normalizedDocument;
  }
}
