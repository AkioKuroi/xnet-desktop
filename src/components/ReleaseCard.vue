<script>
export default {
  name: "ReleaseCard",
  props: {
    image: String,
    russianName: String,
  },
};
</script>

<template>
  <div class="release-card">
    <div class="card-content">
      <img :src="image" alt="Anime Image" />
      <h2>{{ russianName }}</h2>
      <router-link to="/anime/:id">Перейти</router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
.release-card {
  border: 2px solid rgba($color: #fff, $alpha: 0.1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  .card-content {
    a {
      margin-top: auto;
      text-decoration: none;
      border: 2px solid rgba($color: #fff, $alpha: 0.08);
      padding: 3px 20px;
      color: white;
      border-radius: 10px;
    }
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: baseline;
    padding: 20px;
    img {
      max-height: 30vh;
      border-radius: 10px;
    }
    h2 {
      text-align: center;
      margin: 0;
      font-size: 1rem;
      text-overflow: ellipsis;
      word-wrap: break-word;
    }
  }
}
</style>
