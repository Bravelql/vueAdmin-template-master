<template>
  <div class="app-container">
    <el-input placeholder="Filter keyword" v-model="filterText" style="margin-bottom:30px;"></el-input>

    <el-tree class="filter-tree" :data="data" :props="defaultProps" default-expand-all :filter-node-method="filterNode" ref="tree2"></el-tree>

  </div>
</template>

<script>

  import { getList } from '@/api/tree'
export default {
  data() {
    return {
      filterText: '',
      data:null,
      defaultProps: {
        label: 'parentId',
        children:''
      }
    }
  },
  created() {
    this.fetchData()
  },

  watch: {
    filterText(val) {
      this.$refs.tree2.filter(val)
    }
  },

  methods: {
    filterNode(value, data) {
      if (!value) return true
      return data.name.indexOf(value) !== -1
    },
    fetchData() {
      getList(this.listQuery).then(response => {
        console.log(response.data)
        this.data = response.data
      })
    }
  },


}
/*树的结构是固定的，必须按照模板要求给出数据模板，不是给一个list他就可以自己生成树*/
</script>

