import { defineStore } from 'pinia'
interface Todo {
  text: string, id: number, isFinished: boolean
}
export const useTodos = defineStore('todos', {
  // 开启数据持久化
  persist: true,
  state: () => ({
    todos: [] as Todo[],
    /** @type {'all' | 'finished' | 'unfinished'} */
    filter: 'all',
    // 将自动推断出ts类型为number
    nextId: 0,
  }),
  getters: {
    finishedTodos(state) {
      return state.todos.filter((todo) => todo.isFinished)
    },
    unfinishedTodos(state) {
      return state.todos.filter((todo) => !todo.isFinished)
    },
    /**
     * @returns {{ text: string, id: number, isFinished: boolean }[]}
     */
    filteredTodos(state) {
      if (this.filter === 'finished') {
        // 调用其他的getters计算返回新值 ✨
        return this.finishedTodos
      } else if (this.filter === 'unfinished') {
        return this.unfinishedTodos
      }
      return this.todos
    },
  },
  actions: {
    // 接受一些参数， 返回一个promise 或者 void
    addTodo(text) {
      // 你可以直接修改state
      this.todos.push({ text, id: this.nextId++, isFinished: false })
    },
    deleteTodo(item) {
      const index = this.todos.indexOf(item)
      this.todos.splice(index, 1)
    },
  },
})
