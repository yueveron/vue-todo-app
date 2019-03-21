<template>
	<div>
		<ul>
			<SideItem v-for="todo in list" 
                :todo="todo" 
                :key="todo.id">
      </SideItem>
		</ul>
	</div>
</template>

<script>
import SideItem from '@/components/SideItem.vue'

export default {
  name: 'SideBar',
  components: {
    SideItem
  },
  data(){
    return {
      list: this.store.state.list
    }
  },
  methods: {
      
  }
}
</script>