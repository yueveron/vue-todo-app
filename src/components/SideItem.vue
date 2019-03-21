<template>
    <li class="SideItem">
      <p class="text">{{todo.text}}</p>
    </li>
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
}
</style>
