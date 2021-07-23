import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import Login from '@/components/login/Login.vue';
import Vuetify from 'Vuetify';
import VueRouter from 'vue-router';

/* CreateLocalVue() returns a Vue class for you to add components, mixins and install plugins without polluting the global Vue class*/
const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);

describe('Login component test', () => {
  let actions;
  let store;
  const vuetify = new Vuetify()
  const router = new VueRouter()

  beforeEach(() => {
    //Mocking vuex store and actions
    actions = {
      updateUserProfile: jest.fn(),
      updateQuestionnaire: jest.fn()
    }
    store = new Vuex.Store({
      actions
    })
  })

  it('component should render', () => {
    const wrapper = shallowMount(Login, { store, localVue, vuetify, router }); // Render the component to test with dependencies
    expect(wrapper.vm).toBeDefined(); // Expect component instance to be defined
    expect(wrapper.html()).toContain('WELLNESS APPLICATION'); // Expect rendered HTML contain application name 
  })

  it('login test with correct password', () => {
    const wrapper = shallowMount(Login, { store, localVue, vuetify, router })
    wrapper.vm.password = "#Welcome123";
    wrapper.vm.name = "Test";
    let e = { preventDefault: jest.fn() };
    wrapper.vm.submitForm(e);
    expect(wrapper.vm.loginError).toBe("")
  })

  it('login test with incorrect password', () => {
    const wrapper = shallowMount(Login, { store, localVue, vuetify, router })
    wrapper.vm.password = "#Test23";
    wrapper.vm.name = "Test";
    let e = { preventDefault: jest.fn() };
    wrapper.vm.submitForm(e);
    expect(wrapper.vm.loginError).toBe("Please enter a valid password")
  })
})
