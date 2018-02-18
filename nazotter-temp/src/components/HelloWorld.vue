<template>
  <div>
    <div class="hello">
      <h1>Welcome to Your Vue.js App</h1>
    </div>
    <div class="greeting">Hello {{name}}{{exclamationMarks}}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HelloWorld',
  props: ['name', 'initialEnthusiasm'],
  data () {
    return {
      enthusiasm: this.initialEnthusiasm
    }
  },
  methods: {
    increment () {
      this.enthusiasm++;
    },
    decrement () {
      if (this.enthusiasm > 1) {
        this.enthusiasm--;
      }
    }
  },
  computed: {
    exclamationMarks (): string {
      return Array(this.enthusiasm + 1).join('!');
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.greeting {
  font-size: 20px;
}
</style>
