import request from '@/utils/request'

export function getList() {
  return request({
    url: '/address/list',
    method: 'get',
  })
}
