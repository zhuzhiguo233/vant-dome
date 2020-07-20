<template>
  <div id="app">
    <div>
      <van-button type="primary" @click="request">Button</van-button>
    </div>
    <van-divider>
      <p>{{swiperdata}}</p>
    </van-divider>
    <van-divider>
      <p>{{catitems}}</p>
    </van-divider>
    <van-divider>
      <p>{{floordata}}</p>
    </van-divider>
  </div>
</template>

<script>

export default {

  name: 'app',
  data () {
    return {
      swiperdata: '',
      catitems: '',
      floordata: '',
    }
  },
  methods: {
    request () {
      // this.getSwiperdata()
      // this.getCatitems()
      // this.getFloordata()
      Promise.all([this.getSwiperdata(), this.getCatitems(), this.getFloordata()]).then((results) => {
        // console.log(results);
        var [swiperdata, catitems, floordata] = results
        this.swiperdata = swiperdata
        this.catitems = catitems
        this.floordata = floordata
        console.log(swiperdata)
        console.log(catitems)
        console.log(floordata)
      })
    },
    // async getSwiperdata () {
    //   const { data: res } = await this.$http({
    //     url: this.$http.adornUrl('/home/swiperdata'),
    //     method: 'get'
    //   })
    //   console.log(res)
    // },
    // async getCatitems () {
    //   const { data: res } = await this.$http({
    //     url: this.$http.adornUrl('/home/catitems'),
    //     method: 'get'
    //   })
    //   console.log(res)
    // },
    // async getFloordata () {
    //   const { data: res } = await this.$http({
    //     url: this.$http.adornUrl('/home/floordata'),
    //     method: 'get'
    //   })
    //   console.log(res)
    // },
    getSwiperdata () {
      return this.$http({
        url: this.$http.adornUrl('/home/swiperdata'),
        method: 'get'
      })
    },
    getCatitems () {
      return this.$http({
        url: this.$http.adornUrl('/home/catitems'),
        method: 'get'
      })
    },
    getFloordata () {
      return this.$http({
        url: this.$http.adornUrl('/home/floordata'),
        method: 'get'
      })
    }
    // getSwiperdata () {
    //   this.$http({
    //     url: this.$http.adornUrl('/home/swiperdata'),
    //     method: 'get'
    //   }).then(({ data }) => {
    //     console.log(data)
    //   })
    // },
    // getCatitems () {
    //   this.$http({
    //     url: this.$http.adornUrl('/home/catitems'),
    //     method: 'get'
    //   }).then(({ data }) => {
    //     console.log(data)
    //   })
    // },
    // getFloordata () {
    //   this.$http({
    //     url: this.$http.adornUrl('/home/floordata'),
    //     method: 'get'
    //   }).then(({ data }) => {
    //     console.log(data)
    //   })
    // }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
