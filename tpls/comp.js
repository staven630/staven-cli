const Actions = require('../utils/actions');
const Utils = require('../utils/utils');
const Paths = require('../utils/paths');

const getVueTpl = (name, style, lang) => {
  lang = Utils.toLowerCase(lang);
  style = Utils.toLowerCase(style);

  if (['ts', 'typescript'].includes(lang)) {
    return (
`<template>
  <div>
    
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ${name} extends Vue {
  @Prop() private type!: string;
}
</script>

<style scoped lang="${style}">

</style>`
    );
  } else {
  return (
`<template>
  <div>
    
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    
  },
  data() {
    return () {}
  }
};
</script>

<style scoped lang="css">

</style>`);
  }
};

const initVue = (name, style, lang) => {
  const dirname = Paths.dirname(name);
  const filename = Utils.getComponentName(Paths.basename(name));
  const filepath = Paths.resolve(dirname, `${filename}.vue`);
  const file = getVueTpl(filename, lang, style);
  Actions.writeFile(filepath, file);
}

module.exports = (name, type, style = 'css', lang= 'js') => {
  type = Utils.toLowerCase(type);
  switch(type) {
    case 'vue':
      return initVue(name, lang, style);
    default:
      return '';
  }
};;