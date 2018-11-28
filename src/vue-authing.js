import Authing from 'authing-js-sdk';

export default {
  async install(Vue, defaultOptions = {}) {

    let validAuth = null;

    //5a9fa26cf8635a000185528c
    //427e24d3b7e289ae9469ab6724dc7ff0

    Vue.mixin({
      beforeCreate() {
        var self = this;
        Object.defineProperty(this, "$authing", {
          get: async function(){
            if (validAuth) {
              return validAuth;
            } else {
              validAuth = await new Authing({
                clientId: defaultOptions.clientId,
                secret: defaultOptions.secret,
              });
              this.authing = await validAuth;
              return validAuth;
            }
          },
          set: function(){
            return validAuth;
          },
          enumerable: true,
        });
      },
    });
   }
}