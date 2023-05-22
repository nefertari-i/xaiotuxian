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