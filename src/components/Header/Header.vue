<template>
  <div class="container">
    <div>I'm header container</div>
    <banner :msg="config.message" />
    <button v-if="config.isMobile" type="button">Mobile button</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Banner } from "../Banner"
import { HeaderConfig } from "./types";

@Component({
  components: {
    Banner,
  }
})
export default class Header extends Vue {
  @Prop() private config!: HeaderConfig;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  text-align: center;
}
</style>
