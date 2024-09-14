import { createStore } from "vuex";

import { SignIn, SignUp } from "@/aninet-api-typescript";
import { VuexPersistence } from "vuex-persist";
import router from "@/router";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default createStore({
  state: {
    loggedIn: false,
    user: null,
    token: null,
    loginError: false,
  },
  getters: {
    isLoggedIn(state) {
      return state.loggedIn;
    },
    getUser(state) {
      return state.user;
    },
    getToken(state) {
      return state.token;
    },
    getLoginError(state) {
      return state.loginError;
    },
  },
  mutations: {
    SET_LOGGED_IN(state) {
      state.loggedIn = true;
      state.loginError = false;
    },
    LOGFALSE(state) {
      state.loggedIn = false;
    },
    SET_USER(state, user) {
      state.user = user;
    },
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_LOGIN_ERROR(state, isError) {
      state.loginError = isError;
    },
  },
  actions: {
    LOGIN({ commit }, { email, password }) {
      SignIn(email, password).then((response) => {
        console.log(response);
        if (response !== null) {
          commit("SET_LOGIN_ERROR", false);
          commit("SET_LOGGED_IN");
          commit("SET_USER", response);
          commit("SET_TOKEN", response.refreshToken);
          router.push({ name: "home" });
        } else {
          commit("SET_LOGIN_ERROR", true);
        }
      });
    },

    SIGNUP({ commit }, { name, password, email, gender }) {
      SignUp(name, password, email, gender).then((response) => {
        console.log(response);
        if (response !== null) {
          commit("SET_LOGIN_ERROR", false);
          commit("SET_LOGGED_IN");
          commit("SET_USER", response);
          commit("SET_TOKEN", response.refreshToken);
          router.push({ name: "home" });
        } else {
          commit("SET_LOGIN_ERROR", true);
        }
      });
    },

    LOGOUT({ commit }) {
      commit("LOGFALSE");
      commit("SET_USER", null);
      commit("SET_TOKEN", null);
      router.push({ name: "signIn" });
    },
  },
  modules: {},
  plugins: [vuexLocal.plugin],
});
