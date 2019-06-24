import DS from "ember-data";

const { JSONAPISerializer } = DS;

export default class UserSerializer extends JSONAPISerializer {
  attrs = {
    admin: { serialize: false }
  };

  serializeAttribute(snapshot, json, key, attributes) {
    if (snapshot.record.get("isNew")) {
      if (key !== "active") {
        this._super(snapshot, json, key, attributes);
      }
    } else if (snapshot.changedAttributes()[key]) {
      this._super(snapshot, json, key, attributes);
    }
  }
}
