<template>
<canvas ref="board" id="snake-canvas" :width="400" :height="400"></canvas>
</template>

<script>
export default {
  name: 'Canvas',
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
