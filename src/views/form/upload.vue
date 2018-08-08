<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form>
      <input type="file" @change="getFile($event)">
      <button class="button button-primary button-pill button-small" @click="submit($event)">提交</button>
    </form>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        file: ''
      }
    },
    methods: {
      getFile: function (event) {
        this.file = event.target.files[0];
        console.log(this.file);
      },
      submit: function (event) {
        //阻止元素发生默认的行为
        event.preventDefault();
        let formData = new FormData();
        formData.append("file", this.file);
        axios.post('https://httpbin.org/post', formData)
          .then(function (response) {
            alert(response.data);
            console.log(response);
          })
          .catch(function (error) {
            alert("上传失败");
            console.log(error);
          });
      }
    }
  }
</script>
<style scoped>
.hello {
  padding: 100px;
}
</style>
