let app = new Vue({
  el: "#App", //case sensitive
  data: {
    product: "Socks",
    description: "A pair of warm, fuzzy socks.",
    img: {
      src: "assets/vmSocks-blue-onWhite.jpg",
      alt: "A pair of blue socks",
    },
    href: "https://google.com",
    stock: 10,
  },
  computed: {
    inStock() {
      return this.stock;
    },
  },
});
