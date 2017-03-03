<template>
  <div>
    <ul>
      <li v-for="todo in todos">{{todo.text}}</li>
    </ul>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        todos:[
          {text:'学习Vue'},
          {text:'学习SCSS'},
          {text:'学习webpack'}
        ]
      }
    }
  }
</script>
