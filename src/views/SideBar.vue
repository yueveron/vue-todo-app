<template>
	<div>
     <!-- normal: v-bind:list='list'
          with vuex : v-model='myList' 
      -->
		<draggable
      v-model='myList' 
      ghost-class="ghost"
      @end="onEnd"
    >
			<SideItem v-for="todo in myList" 
                :todo="todo" 
                :key="todo.id">
      </SideItem>
		</draggable>
	</div>
  <!-- <div>
    <SideItem v-for="todo in list" 
              :todo="todo" 
              :key="todo.id">
    </SideItem>
  </div> -->
</template>

<script>
import draggable from 'vuedraggable'
import SideItem from '@/components/SideItem.vue'

export default {
  name: 'SideBar',
  components: {
    draggable,
    SideItem
  },
  computed: {
    myList: {
      get() {
        return this.list
      },
      set(value){
        // 
      }
    }
  },
  data(){
    return {
      list: this.store.state.list
    }
  },
  methods: {
    onEnd: function(evt){
      console.debug ('newIndex:' + evt.newIndex, 'oldIndex:' + evt.oldIndex);
      if(evt.newIndex != evt.oldIndex){
        this.store.mutation.sortableList(evt.newIndex, evt.oldIndex);
      }
      
    }    
  }
}
</script>

<style scoped lang="scss">
  
</style>