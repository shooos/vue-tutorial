<template>
  <div>
    <div v-if="hero">
      <h2>{{hero.name.toUpperCase()}} Details</h2>
      <div>
        <span>id: </span>{{hero.id}}
      </div>
      <div>
        <label>name:
          <input v-model="hero.name" placeholder="name" />
        </label>
      </div>
    </div>
    <button @click="goBack">go back</button>
    <button @click="save">save</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      hero: null,
    };
  },
  methods: {
    goBack: function() {
      this.$router.back();
    },
    save: function() {
      this.heroService.updateHero(this.hero).then(() => this.$router.go(-1));
    },
  },
  props: ['heroService'],
  mounted: function() {
    this.heroService.getHero(this.$route.params.id).then(response => (this.hero = response));
  },
};
</script>

<style scoped>
label {
  display: inline-block;
  width: 3em;
  margin: 0.5em 0;
  color: #607d8b;
  font-weight: bold;
}
input {
  height: 2em;
  font-size: 1em;
  padding-left: 0.4em;
}
button {
  margin-top: 20px;
  font-family: Arial;
  background-color: #eee;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  cursor: hand;
}
button:hover {
  background-color: #cfd8dc;
}
button:disabled {
  background-color: #eee;
  color: #ccc;
  cursor: auto;
}
</style>
