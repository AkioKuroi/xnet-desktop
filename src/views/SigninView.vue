<script>
import store from "../store";
import router from "../router";
export default {
  name: "SignIn",
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    onSubmit() {
      store.dispatch("LOGIN", { email: this.email, password: this.password });
    },

    asGuest() {
      store.commit("SET_LOGIN_ERROR", false);
      store.commit("SET_LOGGED_IN");
      store.commit("SET_USER", "GUEST");
      store.commit("SET_TOKEN", "GUEST");
      router.push({ name: "home" });
    },
  },

  computed: {
    isError() {
      return store.getters.getLoginError;
    },
  },
};
</script>

<template>
  <div class="sign-in">
    <div class="content">
      <h2>Вход</h2>
      <form @submit.prevent="onSubmit">
        <input type="email" v-model="email" placeholder="E-mail" required />
        <input
          type="password"
          v-model="password"
          placeholder="Пароль"
          required
        />
        <router-link to="/signUp" class="go-to-signup"
          >Ещё не зарегистрированы?</router-link
        >
        <button type="submit">Войти</button>
        <button @click="asGuest">Войти как Гость</button>
      </form>
      <p v-if="isError" class="error-message">Неправильный email или пароль</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.error-message {
  color: red;
  margin-top: 10px;
  font-size: 1rem;
  text-align: center;
}

.sign-in {
  .content {
    width: 50%;
    height: 50%;
    border: 2px solid rgba($color: #ccc, $alpha: 0.3);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  h2 {
    text-align: center;
    font-size: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2vh;

    .go-to-signup {
      text-decoration: none;
      color: white;
      opacity: 75%;

      transition-property: opacity, transform;
      transition-duration: 0.1s;
      transition-timing-function: ease-in-out;

      &:hover {
        opacity: 100%;
        transform: scale(1.03);
      }
    }
    input {
      margin-bottom: 10px;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      width: 30vw;
    }

    button {
      background-color: #3b2e79;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.5s ease-in-out;
      margin-top: 1vh;
      width: 30vw;

      &:hover {
        background-color: #3d3597;
      }
    }
  }
}
</style>
