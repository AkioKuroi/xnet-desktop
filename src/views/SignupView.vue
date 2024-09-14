<script>
import store from "@/store";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      password: "",
      email: "",
      gender: 1,
    };
  },

  methods: {
    onSubmit() {
      store.dispatch("SIGNUP", {
        name: this.name,
        password: this.password,
        email: this.email,
        gender: this.gender,
      });
    },
  },

  computed: {
    isError() {
      return store.getters.getLoginError;
    },
  },
  mounted() {
    store.commit("SET_LOGIN_ERROR", false);
  },
};
</script>

<template>
  <div class="sign-up">
    <div class="content">
      <h2>Регистрация</h2>
      <router-link to="/signIn" class="have-account"
        >Уже есть аккаунт?</router-link
      >
      <form @submit.prevent="onSubmit">
        <input type="text" v-model="name" placeholder="Юзернейм" required />
        <input type="email" v-model="email" placeholder="E-mail" required />
        <input
          type="password"
          v-model="password"
          placeholder="Пароль"
          required
        />
        <span>Я: </span>
        <div class="gender">
          <input type="radio" id="male" value="1" v-model="gender" required />
          <label for="male">Мужчина</label>
          <input type="radio" id="female" value="2" v-model="gender" required />
          <label for="female">Женщина</label>
        </div>
        <button type="submit">Зарегистрироваться</button>
      </form>
      <p v-if="isError" class="error-message">Неизвестная ошибка</p>
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

.have-account {
  text-align: center;
  text-decoration: none;
  opacity: 80%;
  color: rgb(28, 142, 207);
}
.gender {
  display: flex;
  align-items: baseline;
  margin-top: 2vh;
  padding: 0;
  width: 60%;
}

.sign-up {
  .content {
    width: 50%;
    height: 60%;
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
