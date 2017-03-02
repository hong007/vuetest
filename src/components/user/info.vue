<template>
  <div>
    <h1>{{msg}}</h1>
    <el-button @click.native="startHacking">Click Me</el-button>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        msg: 'this is a user by 安静的猫🐈'
      }
    },
    methods: {
      startHacking () {
        this.$notify({
          title: 'hi,it works',
          message: 'dialog content',
          duration: 6000
        })
      }
    }
  }

</script>
