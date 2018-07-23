<template>
  <div id="search-component">
    <h4>Hero Search</h4>
    <input id="search-box" @keyup="search" />
    <ul class="search-result">
      <li v-for="hero in heroes" :key="hero.id">
        <router-link :to="`/detail/${hero.id}`">
          {{hero.name}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      heroes: [],
    };
  },
  methods: {
    search: function(e) {
      const term = e.target.value;
      if (!term) return (this.heroes = []);

      this.heroService.searchHeroes(term).then(responses => (this.heroes = responses));
    },
  },
  props: ['heroService'],
};
</script>

<style scoped>
.search-result li {
  border-bottom: 1px solid gray;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  width: 195px;
  height: 16px;
  padding: 5px;
  background-color: white;
  cursor: pointer;
  list-style-type: none;
}

.search-result li:hover {
  background-color: #607d8b;
}

.search-result li a {
  color: #888;
  display: block;
  text-decoration: none;
}

.search-result li a:hover {
  color: white;
}
.search-result li a:active {
  color: white;
}
#search-box {
  width: 200px;
  height: 20px;
}

ul.search-result {
  margin-top: 0;
  padding-left: 0;
}
</style>
