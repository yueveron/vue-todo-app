<template>
  <div class="Module-Article">
    <textarea
      class="input-text"
      v-model="itemdata.text"
      placeholder="edit me"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: 'ModuleArticle',
  props: {
    itemdata: Object
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.input-text {
  width: 100%;
  height: 100px;
  background-color: white;
  border: 1px solid lightgrey;
  padding: 12px;
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
