import Vue from "vue";
import HelloWorld from "./HelloWorld.vue";

const Components = {
  HelloWorld,
};

Object.entries(Components).forEach(([name, component]) => {
  Vue.component(name, component);
});

export default Components;
