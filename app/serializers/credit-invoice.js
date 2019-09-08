import JSONAPISerializer from "@ember-data/serializer/json-api";

export default class CreditInvoiceSerializer extends JSONAPISerializer {
  // we don't need to send the total value, it will be calculated by the backend
  attrs = {
    totalValue: { serialize: false }
  };
}
