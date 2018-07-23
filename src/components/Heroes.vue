<template>
  <div>
    <h2>My Heroes</h2>
    <div>
      <label>Hero name:
        <input v-model="heroName" />
      </label>
      <button @click="addHero(heroName)">
        add
      </button>
    </div>
    <ul class="heroes">
      <li v-for="hero in heroes" :key="hero.id">
        <router-link :to="`/detail/${hero.id}`">
          <span class="badge">{{hero.id}}</span> {{hero.name}}
        </router-link>
        <button class="delete" title="delete hero" @click="deleteHero(hero)">x</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      heroName: '',
      heroes: [],
    };
  },
  methods: {
    getHeroes: function() {
      this.heroService.getHeroes().then(response => (this.heroes = response));
    },
    addHero: function(name) {
      this.heroService.addHero({name}).then(() => {
        this.getHeroes();
        this.heroName = '';
      });
    },
    deleteHero: function(hero) {
      this.heroService.deleteHero(hero).then(response => this.getHeroes());
    },
  },
  props: ['heroService'],
  mounted: function() {
    this.getHeroes();
  },
};
</script>

<style scoped>
.heroes {
  margin: 0 0 2em 0;
  list-style-type: none;
  padding: 0;
  width: 15em;
}
.heroes li {
  position: relative;
  cursor: pointer;
  background-color: #eee;
  margin: 0.5em;
  padding: 0.3em 0;
  height: 1.6em;
  border-radius: 4px;
}

.heroes li:hover {
  color: #607d8b;
  background-color: #ddd;
  left: 0.1em;
}

.heroes a {
  color: #888;
  text-decoration: none;
  position: relative;
  display: block;
  width: 250px;
}

.heroes a:hover {
  color: #607d8b;
}

.heroes .badge {
  display: inline-block;
  font-size: small;
  color: white;
  padding: 0.8em 0.7em 0 0.7em;
  background-color: #607d8b;
  line-height: 1em;
  position: relative;
  left: -1px;
  top: -4px;
  height: 1.8em;
  min-width: 16px;
  text-align: right;
  margin-right: 0.8em;
  border-radius: 4px 0 0 4px;
}

button {
  background-color: #eee;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  cursor: hand;
  font-family: Arial;
}

button:hover {
  background-color: #cfd8dc;
}

button.delete {
  position: relative;
  left: 194px;
  top: -32px;
  background-color: gray !important;
  color: white;
}
</style>
