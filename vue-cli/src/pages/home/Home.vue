<template>
  <div class='hello'>1223</div>
</template>

<script>
 /* eslint-disable */

import {login} from '@/services/api.js'
export default {
  name: "home",
  data() {
    return {};
  },
  mounted() {
  this.data();
  },
  methods: {
      async data(){
      let a= await login();
      console.log(a);
    }
  },
};
</script>

<style lang='scss' scoped>
.hello{
  font-size: 20px;
}
</style>
