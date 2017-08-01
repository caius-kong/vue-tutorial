<template>
  <div class="jumbotron">
    <h1>任务追踪</h1>
    <p>
      <strong>
        <router-link to="/time-entries">创建一个任务</router-link>
        <p>用户：{{ username }}</p>
        {{ setUsername() }}
      </strong>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        username: '1'
      }
    },
    methods: {
      setUsername () {
        var comp = this // then中的this非此this，因此选择 "副本引用"
        this.$axios.get('http://127.0.0.1:3000/sayhello')
          .then(function (response) {
            comp.username = response.data.name // 由于ajax请求是异步的，因此正确的做法是：局部更新某个值。如果选择返回值，你会发现没卵用。
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    }
  }
</script>
