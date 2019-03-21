<template>
    <div class="Module-Title">
      <input class="input-text" v-model="itemdata.text" placeholder="edit me">
    </div>
</template>

<script>
export default {
  name: 'ModuleTitle',
  props: {
    itemdata : Object
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
  .input-text {
    width: 100%;
    background-color: white;
    border: 1px solid lightgrey;
    box-shadow: 1px 1px 1px lightgrey;
    padding: 12px;
    margin-right: 10px;
    margin-bottom : 10px;
  }
</style>
