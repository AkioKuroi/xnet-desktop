<script>
import store from "@/store";
import { ListAnimeDefault } from "@/aninet-api-typescript";
import ReleaseCard from "@/components/ReleaseCard";

export default {
  name: "HomeView",
  data() {
    return {
      releases: [],
      stop: false,
    };
  },
  components: {
    ReleaseCard,
  },
  computed: {
    isGuest() {
      return store.getters.getUser === "GUEST";
    },
  },

  methods: {
    setAnime(response) {
      if (!this.stop) {
        ListAnimeDefault(response).then((response) => {
          this.releases = response;
        });
        this.stop = true;
      }
    },

    logOut() {
      store.dispatch("LOGOUT");
    },
  },

  mounted() {
    this.setAnime();
  },
};
</script>

<template>
  <main>
    <div class="guest-mode" v-if="isGuest">
      Вы просматриваете содержимое как Гость.
    </div>
    <button @click="logOut">Выйти из аккаунта (TEST MODE)</button>
    <div class="cards">
      <release-card
        v-for="release in releases"
        :key="release.animeId"
        :image="release.fullImageLink"
        :russian-name="release.russianName"
      />
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  button {
    position: fixed;
    bottom: 0;
    right: 0;
    margin-bottom: 4vh;
    margin-right: 4vw;
    padding: 15px;
    background-color: transparent;
    border: 2px solid rgba($color: #fff, $alpha: 0.1);
    color: white;
    border-radius: 20px;
    font-weight: bold;
  }
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .cards {
    display: flex;
    gap: 2vw;
    padding: 20px;
    max-width: 40vw;
  }
  .guest-mode {
    background-color: rgba($color: #000000, $alpha: 0.3);
    opacity: 50%;
    height: 5vh;
    padding: 10px;
    border-radius: 20px;
    width: 95%;
    position: absolute;
    bottom: 0;
    margin-bottom: 3vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
