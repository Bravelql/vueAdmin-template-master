<template>
  <div class="app-container">
        <el-table
          :data="list"
          v-loading.body="listLoading"
          element-loading-text="Loading"
          border
          :height = "800"
          style="width: 100%; text-align: center">
          <el-table-column
            header-align="center"
            prop="provinceName"
            label="省市"
            width="180"
          style="text-align: center">
          </el-table-column>
          <el-table-column
            prop="cityName"
            label="城市"
            width="180">
          </el-table-column>
          <el-table-column
            prop="detail"
            label="地址"
          >
          </el-table-column>
          <el-table-column
            prop="cropName"
            label="标签"
            width="100"
            :filters="[{ text: '柑橘', value: '柑橘' }, { text: '梨', value: '梨' },{ text: '葡萄', value: '葡萄'}]"
            :filter-method="filterTag"
            filter-placement="bottom-end">
            <template slot-scope="scope">
              <el-tag
                :type="scope.row.cropName === '柑橘' ? 'primary' : 'success'"
                close-transition>
                  {{scope.row.cropName}}
              </el-tag>
            </template>
          </el-table-column>
        </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/table'

export default {
  data() {
    return {
      list: [],
      listLoading: true
    }
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList(this.listQuery).then(response => {
        console.log(response.data)
        this.list = response.data
        this.listLoading = false
      })
    },
    filterTag(value, row) {
      return row.tag === value;
    }

  }
}
</script>

<style scoped>
  /*.tb-h {
    height: 80%;
  }*/
</style>
