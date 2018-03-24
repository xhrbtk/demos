import 'todomvc-app-css/index.css'


import Vue from 'vue'


var filters={
	all(todos){
		return todos
	},
	active(todos){
		return todos.filter((todo)=>{
			return !todo.completed
		})
	},
	completed(todos){
		return todos.filter((todo)=>{
			return todo.completed
		})
	}
}


 
let app=new Vue({
	el:'.todoapp',
	data:{
		msg:'hello world',
		title:'todosmvc',
		newTodo:'',
		todos:[{
			content:'vue',
			completed:false
		},{
			content:'vuex',
			completed:false
		}],
		editedTodo: null,
		hashName: 'all'

	},
	computed:{
		remain(){
		return	filters.active(this.todos).length
		},
		isAll:{
		get(){
			return this.remain===0
		},
		set(value){
			this.todos.forEach((todo)=>{
				todo.completed=value
			})
		}
	  },
	  filteredTodos(){
	  	return filters[this.hashName](this.todos)
	  }

	},
	
	methods:{
		addTodo:function(e){
			if(!this.newTodo){
				return 
			}
			this.todos.push({
				content: this.newTodo,
				completed: false
			})
			this.newTodo=''
		},
		removeTodo:function(index){
			this.todos.splice(index,1)
		},
		editTodo: function (todo) {
	     this.editCache=todo.content
	      this.editedTodo = todo
           },
           doneEdit :function(todo,index){
           	this.editedTodo = null
           		if(!todo.content){
           			this.removeTodo(index)
           		}
           },
           cancleEdit:function(todo){
           	this.editedTodo = null
           	todo.content=this.editCache
           },
           clear:function(){
           	this.todos=filters.active(this.todos)
           }


	   },
	  directives: {
	  	focus(el,value){
	  		if(value){
	  			el.focus()
	  		}
	  	}
	    
	}
})




function hashChange(){
	let hashName=location.hash.replace(/#\/?/,'')
	if(filters[hashName]){
		app.hashName=hashName
	}else{
		location.hash=''
		app.hashName='all'
	}
}
// hash全局监听
window.addEventListener('hashchange',hashChange)
	

