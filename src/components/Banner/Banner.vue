<template>
  <div class="banner">
    <h1>{{ msg }}</h1>
    <p>Norbert's test
      <StarSvg />
    <h4>Let's see if hot reloading works?</h4>
    <img alt="" height="64" src="./building.png" />
    <p>Nested change</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import StarSvg from './StarSvg.svg';

@Component({
  components: {
    StarSvg
  }
})
export default class Banner extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner {
  color: purple;
}
</style>
