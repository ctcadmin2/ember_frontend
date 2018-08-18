import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { capitalize } from '@ember/string';

export default Component.extend({
  tagName: '',
  store: service(),
  flashMessages: service(),

  actions: {
    toggleObj(obj, prop) {
      const modelName = obj.constructor.modelName;
      const model = this.store.peekRecord(modelName, obj.id);

      model.toggleProperty(prop);

      model
        .save()
        .then(
          () =>
            this.flashMessages.success(
              `${capitalize(modelName)} was successfully updated!`
            ),
          () => this._failedUpdate(model, modelName)
        )
        .catch(() => this._failedUpdate(model, modelName));
    }
  },

  _failedUpdate(model, modelName) {
    model.rollbackAttributes();
    this.flashMessages.error(
      `There was an error while updating the ${modelName}!`
    );
  }
});
