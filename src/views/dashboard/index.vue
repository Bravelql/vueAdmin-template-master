<template>
  <el-row :gutter="20">
    <el-col :span="6"><div class="grid-content bg-purple">
      <div class="icon">
        <div class="ico-i">
          <i :class= "icon"></i>
        </div>
        <div class="text">
          <div class="card-panel-text">{{title}}</div>
          <span>{{number}}</span>
        </div>
      </div>
    </div>
    </el-col>
    </el-row>
</template>

<script>
export default {
  name:'iconArray',
  data() {
    return {
      icon :'el-icon-share',
      title : 'New York',
      number : '520,400'
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .el-row {
    margin: 50px;
    position: relative;/**相对于正常位置做改变*/
  }
  .bg-purple {
    background: #fff;
  }
  .grid-content {
    min-height: 100px;/**元素的最低高度*/

  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .icon {
    margin-left: 15px;
    margin-right: 15px;
  }
  img {
    float: left;
    margin: 10px;
    border-radius: 10px;
  }
  .ico-i {
    float: left;
    margin: 10px;
    font-size: 50px;
    color: aqua;
  }
  .text {
    float: right;
  }
  .card-panel-text {
    line-height: 18px;
    color: rgba(0, 0, 0, 0.45);
    font-size: 16px;
    margin-bottom: 12px;
    margin-top: 20px;
  }

  .custome-class {
    font-size: 35px;
  }
</style>
