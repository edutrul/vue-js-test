var app = new Vue({
  el: '#app',
  data: {
    first_name: 'Luis Eduardo',
    last_name: 'Telaya Escobedo',
    age: 27,
    zip_code: 'LIMA 43',
    isAgeSeen: true
  }
});

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page ' + new Date().toLocaleString()
  }
});

var app3 = new Vue({
  el: '#app-3',
  data: {
    numbers: [90, 45, 60, 17, 80]
  }
});

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { label: 'A single task 1' },
      { label: 'A single task 2' },
      { label: 'A single task 3' },
      { label: 'A single task 4' },
    ]
  }
});

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: "This message will be reversed"
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
});

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello bvvc world'
  }
});

Vue.component('yo', {
  props: ['message'],
  template: '<p>{{ message }} </p>',
});

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>[{{ todo.id }}] - {{ todo.text }}</li>'
});

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
})