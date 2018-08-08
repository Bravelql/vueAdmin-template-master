<template>
  <div class="panel-group">
    <el-row :gutter="20">
        <el-col :span="6"><div class="grid-content bg-purple">
          <div class="icon">
            <div class="ico-i">
              <i class="el-icon-share"></i>
            </div>
            <div class="text">
              <div class="card-panel-text">new Visits</div>
              <span>102,400</span>
            </div>
          </div>
        </div>
        </el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
  </div>
</template>
<script>

</script>
<style scoped>
  .panel-group {
    padding: 30px;
    background-color: #999B9E;
  }
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
