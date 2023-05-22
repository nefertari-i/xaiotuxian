import httpInstance from '@/utils/http';

export function getHead() {
  return httpInstance({
    url:'home/category/head'
  })
}
export function getBannerAPI (){
  return httpInstance({
    url:'home/banner'
  })
}
export const findNewAPI = () => {
  return httpInstance({
    url:'/home/new'
  })
}
export const getHotAPI = () => {
  return  httpInstance('home/hot')
}
export const getGoodsAPI = () => {
  return httpInstance({
    url: '/home/goods'
  })
}
// 获取面包屑路由
export const getTopCategoryAPI = (id) => {
  return httpInstance({
    url:'/category',
    params:{
      id
    }
  })
}
export function getBannerAPITwo (params = {}) {
  // 默认为1 商品为2
  const { distributionSite = '1' } = params
  return httpInstance({
    url: '/home/banner',
    params: {
      distributionSite
    }
  })
}