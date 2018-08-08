import fetch from '@/utils/fetch'

export function getList() {
  return fetch({
    url: '/role/list',
    method: 'get',
  })
}
