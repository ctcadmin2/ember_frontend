import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  attrs: {
    admin: { serialize: false },
    active: { serialize: false }
  }
});
