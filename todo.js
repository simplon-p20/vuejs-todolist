let app = new Vue({
  el: '#app',
  data: {
    todos: [
      {text:'Learn JavaScript', done:true},
      {text:'Learn Vue', done:false},
      {text:'Build something awesome', done:false}
    ],
    todoText: '',
  },
  computed: {
    remaining: function() {
      let count = 0;
      this.todos.forEach(function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    }
  },
  methods: {
    addTodo: function() {
      this.todos.push({text:this.todoText, done:false});
      this.todoText = '';
    },
    archive: function() {
      let oldTodos = this.todos;
      this.todos = [];
      oldTodos.forEach(function(todo) {
        if (!todo.done) app.todos.push(todo);
      });
    }
  }
})

