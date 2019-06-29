import JSONAPISerializer from "@ember-data/serializer/json-api";

export default class UserSerializer extends JSONAPISerializer {
  attrs = {
    admin: { serialize: false }
  };

  serializeAttribute(snapshot, json, key, attributes) {
    if (snapshot.record.isNew) {
      if (key !== "active") {
        super.serializeAttribute(snapshot, json, key, attributes);
      }
    } else if (snapshot.changedAttributes()[key]) {
      super.serializeAttribute(snapshot, json, key, attributes);
    }
  }
}
