import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';


class ParentModule extends VuexModule {
  wheels = 2

  @Mutation
  incrWheels(extra: number) {
    this.wheels += extra
  }

  @Action({ rawError: true })
  async incrWheelsAction(payload: number) {
    this.context.commit('incrWheels', payload)
    console.log('incrWheelsAction axles value: ', this.axles);
  }

  get axles() {
    return this.wheels / 2
  }
  get axlesAndWheels() {
    return { axles: this.axles, wheels: this.wheels }
  }
}

@Module
class ChildModule extends ParentModule {
  get axlesAndWheels() {
    return { axles: this.axles, axlesDouble: this.axlesDouble, wheels: this.wheels }
  }

  get axlesDouble() {
    return this.wheels
  }
}



const store = new Vuex.Store({
  state: {},
  modules: {
    mm: ChildModule
  }
})
export default store;
