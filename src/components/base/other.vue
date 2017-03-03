<template>
  <div>
    other
  </div>
</template>
<script>
  export default{
    data(){
      return{

      }
    }
  }
</script>
<!--
<template>
  <div>
  <div>
    <p>
      记事本
    </p>
    <input v-model="newTodo" v-on:keyup.enter="addTodo" placeholder="请记录未完成的计划"/>
    <ul>
      <li v-for="todo in todos">
        <span>{{todo.text}}</span>
        <button type="button" @click.native="removeTodo($index)">X</button>
      </li>
    </ul>
  </div>
&lt;!&ndash;</template>&ndash;&gt;
&lt;!&ndash;<template>&ndash;&gt;
  <div>
    <p>插值</p>
    &lt;!&ndash; 单次文本插值 &ndash;&gt;
    <p>{{*message}}</p>
    &lt;!&ndash; 解析真的html字符串 &ndash;&gt;
    <p>{{{raw_html}}}</p>
    &lt;!&ndash; html特性 &ndash;&gt;
    <p id="item-{{id}}">html特性</p>
  </div>
&lt;!&ndash;</template>&ndash;&gt;
&lt;!&ndash;<template>&ndash;&gt;
  <div>
    <p>绑定表达式</p>
    &lt;!&ndash; javascript表达式 &ndash;&gt;
    <p>{{number+1}}</p>
    <p>{{ok ? 'Yes' : 'No'}}</p>
    <p>{{message.split('').reverse().join('')}}</p>
    &lt;!&ndash; 过滤器 &ndash;&gt;
    <p>{{name | capitalize}}</p>
  </div>
&lt;!&ndash;</template>&ndash;&gt;
&lt;!&ndash;<template>&ndash;&gt;
  <div>
    <p>指令</p>
    &lt;!&ndash; 参数 &ndash;&gt;
    <a v-bind:href="url" @click.native="dosomething">指令带参数</a>
    &lt;!&ndash; v-bind、v-on缩写 &ndash;&gt;
    <a :href="url" @click="dosomething">指令缩写</a>
  </div>
&lt;!&ndash;</template>&ndash;&gt;
&lt;!&ndash;<template>&ndash;&gt;
  <div>
    <p>计算属性</p>
    <p>a={{a}},b={{b}}</p>
    <p>{{fullName}}</p>
  </div>
&lt;!&ndash;</template>&ndash;&gt;
&lt;!&ndash;<template>&ndash;&gt;
  <div>
    <p>绑定class和style</p>
    &lt;!&ndash; 绑定class:对象语法 &ndash;&gt;
    <p class="static" v-bind:class="{'class-a':isA,'class-b':isB}">绑定class</p>
    <p class="static" v-bind:class="classObject">绑定class</p>
    &lt;!&ndash; 绑定class:数组语法 &ndash;&gt;
    <p class="static" v-bind:class="[classA,classB,classC]">绑定class</p>
    <p class="static" v-bind:class="[classA,{ 'class-b': isB,'class-c': isC}]">绑定class</p>
    &lt;!&ndash; 绑定style:对象语法 &ndash;&gt;
    <p class="static" v-bind:style="styleObject">绑定style</p>
    &lt;!&ndash; 绑定style:数组语法 &ndash;&gt;
    <p class="static" v-bind:style="[styleObjectA,styleObjectB]">绑定style</p>
  </div>
&lt;!&ndash;</template>&ndash;&gt;
&lt;!&ndash;<template>&ndash;&gt;
  &lt;!&ndash;<div>&ndash;&gt;
    &lt;!&ndash;<p>条件渲染</p>&ndash;&gt;
    &lt;!&ndash;<h1 v-if="Math.random() > 0.5">对不起！</h1>&ndash;&gt;
    &lt;!&ndash;<h1 v-else>没关系</h1>&ndash;&gt;
    &lt;!&ndash;<template v-if="ok">&ndash;&gt;
      &lt;!&ndash;<h1>标题</h1>&ndash;&gt;
      &lt;!&ndash;<p>段落1</p>&ndash;&gt;
      &lt;!&ndash;<p>段落2</p>&ndash;&gt;
    &lt;!&ndash;</template>&ndash;&gt;
    &lt;!&ndash;<h1 v-show="isShow">Hello!</h1>&ndash;&gt;

    &lt;!&ndash;<custom-component v-show="condition"></custom-component>&ndash;&gt;
    &lt;!&ndash;<p v-show="!condition">这可能也是一个组件</p>&ndash;&gt;
  &lt;!&ndash;</div>&ndash;&gt;
  </div>
</template>
<script>
  //  // 定义
//    var MyComponent = Vue.extend({
//      template: '<div>A custom component!</div>'
//    });
  //
  //  // 注册
  //  Vue.component('custom-component', MyComponent);
  export default{
    data(){
      return {
        newTodo: '',
        todos: [
          {text: '学习Vue'},
          {text: '学习Sass'},
          {text: '学习webpack'}
        ],

        raw_html: '<span>原始的html</span>',
        id: '1',

        number: 2,
        ok: true,
        message: '123456789',
        name: 'brucee lee',

        url: 'http://g.pptv.com',

        a: 1,
        firstName: 'Micro',
        lastName: 'Jodon',

        classA: 'class-a',
        classB: 'class-b',
        classC: 'class-c',
        isA: true,
        isB: false,
        isC: true,
        classObject: {
          'class-a': true,
          'class-b': true
        },
        styleObject: {
          color: 'red',
          fontSize: '13px',
          backgroundColor: '#00f'
        },
        styleObjectA: {
          color: 'green',
          fontSize: '16px'

        },
        styleObjectB: {
          backgroundColor: '#f0f',
          transform: 'rotate(7deg)'
        },

//        ok:true,
//        isShow: false,
//        condition: true
      }
    },
    methods: {
      addTodo: function () {
        var text = this.newTodo.trim();
        if (text) {
          this.todos.push({text: text});
          this.newTodo = '';
        }
      },
      removeTodo: function (index) {
        this.todos.splice(index, 1);
      },
      dosomething: function () {
        alert(this.url);
      }
    },
    computed: {
      b: function () {
        return this.a + 1;
      },
      /*fullName:function(){
       return this.firstName + ' ' + this.lastName;
       }*/
      fullName: {
        get: function () {
          return this.firstName + ' ' + this.lastName;
        },
        set: function (newValue) {
          var names = newValue.split(' ');
          this.firstName = names[0];
          this.lastName = names[names.length - 1];
        }
      }
    }
  }
</script>
<style>
  .static {
    width: 200px;
    margin: 20px auto;
    height: 25px;
    line-height: 25px;
    text-align: center;
    font-size: 18px;
  }

  .class-a {
    background-color: #f00;
  }

  .class-b {
    color: #fff;
  }

  .class-c {
    padding: 5px 0;
  }
</style>
-->
