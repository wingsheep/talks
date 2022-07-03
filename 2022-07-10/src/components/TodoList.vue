<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useTodos } from '../store/todos'
const newVal = ref('')
// 使用storeToRefs可以保证解构出来的数据也是响应式的
const { unfinishedTodos, finishedTodos, todos } = storeToRefs(useTodos())
const addItem = () => {
  if (newVal.value) {
     useTodos().addTodo(newVal.value)
  }
  newVal.value = ''
}
const deleteItem = item => {
  useTodos().deleteTodo(item)
}
</script>

<template>
<input class="caret-gray-500 text-sm px-3 py-1 mb-6 border border-green-500 " type="text" placeholder="Please input..." v-model="newVal" />
<button class="bg-green-500 text-white py-1.5 px-5 ml-1 border-green-50 rounded-sm " @click="addItem">Add</button>
<div class="flex">
  <ul class="basis-full">
    <h5 class="text-dark-100">UnFinished</h5>
    <li v-for="item in unfinishedTodos" :key="item.id" class="list-none !pl-0 !ml-0">
      <span class="cursor-pointer text-dark-50 hover:(text-red-500)" @click="deleteItem(item)"><carbon:close></carbon:close></span>
      <span>{{ item.text }}</span> 
      <input class="w-4 ml-4" type="checkbox" v-model="item.isFinished" />
    </li>
  </ul>
  <ul class="basis-full">
    <h5 class="text-dark-100">Finished</h5>
    <li v-for="item in finishedTodos" :key="item.id" class="list-none !pl-0 !ml-0">
      <span class="cursor-pointer text-dark-50 hover:(text-red-500)" @click="deleteItem(item)"><carbon:close></carbon:close></span>
      <span>{{ item.text }}</span> 
      <input class="w-4 ml-4" type="checkbox" v-model="item.isFinished" />
    </li>
  </ul>
  <div class="basis-full overflow-auto h-80 border py-4 px-4">
    <pre>{{ todos }}</pre>
  </div>
</div>
</template>
