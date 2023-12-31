const urlList = () => {
  const list = {
    loadSlider: "http://192.168.8.43:5555/slider/load",
    loadProduct: "http://192.168.8.43:5555/product/get",
    addLike: "http://192.168.8.43:5555/like/add",
    removeLike: "http://192.168.8.43:5555/like/remove",
  };
  return list;
};

export default urlList;
