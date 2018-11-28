import Authing from 'authing-js-sdk';

export default {
  async install(Vue, defaultOptions = {}) {

    let validAuth = null;

    Vue.mixin({
      beforeCreate() {
        Object.defineProperty(this, "$_authing", {
          async get () {
            if (validAuth) {
              return validAuth;
            } else {
              validAuth = await new Authing({
                clientId: defaultOptions.clientId,
                secret: defaultOptions.secret,
              });
              this.$authing = await validAuth;
              return validAuth;
            }
          },
          async set () {
            return validAuth;
          },
          enumerable: true,
        });
      },
    });
   }
}