<template>
  <div>
    <p>{{message}}</p>
    <input v-model="message"/>
    <button type="button" @click.native="revereMessage">反转</button>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        message: 'Hello World'
      }
    },
    methods: {
      revereMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  }
</script>
