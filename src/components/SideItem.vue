<template>
    <div class="SideItem">
      <p class="text">{{todo.data.text}}</p>
    </div>
</template>

<script>
export default {
  name: 'SideItem',
  props: {
    todo: Object
  },
  methods: {
  }
}
</script>


<style scoped lang="scss">
.SideItem{
  border-bottom:1px solid #000;
  cursor:move;
  padding:5px;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>
