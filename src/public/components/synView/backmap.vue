<template>
  <div id="container"></div>
</template>

<script>
import Axios from "axios";
import { mapState, mapActions } from "vuex";
import bus from "./eventBus";
export default {
  mounted() {
    this.createdMap();
    bus.$on("givepoint", (data) => this.addPoint(data));
    bus.$on("givetrack", (data) => this.setTrack(data));
    bus.$on("edit", (data) => this.resetPoint(data));
    bus.$on("editend",_=>this.map.removeEventListener('click'))
  },
  data() {
    return {
      map: {},
      info: "",
    };
  },
  methods: {
    createdMap() {
      let script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src =
        "http://api.map.baidu.com/api?v=1.0&type=webgl&ak=dqZAjS3xcM5RhYtQwnouI5wxrUSdyXSG&callback=init";
      document.head.appendChild(script);
      setTimeout(() => {
        this.init();
      }, 2000);
    },
    init() {
      this.map = new BMapGL.Map("container"); // 创建地图实例
      this.map.centerAndZoom("上海市", 12); // 初始化地图，设置中心点坐标和地图级别
      this.map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      this.map.setHeading(0); //设置地图旋转角度
      this.map.setTilt(0); //设置地图的倾斜角度
    },
    addPoint(info) {
      if(info[3]){
        this.map.clearOverlays(); 
      }
      let arr =  info[0].split(",");
      let point = new BMapGL.Point(arr[0], arr[1]);
      let marker = new BMapGL.Marker(point); // 创建标注
      this.map.centerAndZoom(point, 16);
      this.map.addOverlay(marker); // 将标注添加到地图中
      this.getInfo(point);
      // 点标记添加点击事件
      marker.addEventListener(
        "click",
        () => {
          let opts = {
            width: 250, // 信息窗口宽度
            height: 100, // 信息窗口高度
            title: "Hello", // 信息窗口标题
          };
          let infoWindow = new BMapGL.InfoWindow(this.info, opts); // 创建信息窗口对象
          this.map.openInfoWindow(infoWindow, point); // 打开信息窗口 第二个参数map.getCenter()？
        }
        // 开启信息窗口
      );
      this.showrail(point, info[1]);
    },
    //获取地址信息
    getInfo(point) {
      let geoc = new BMapGL.Geocoder();
      let a = geoc.getLocation(point, (rs) => {
        let addComp = rs.addressComponents;
        this.info =
          addComp.province +
          ", " +
          addComp.city +
          ", " +
          addComp.district +
          ", " +
          addComp.street +
          ", " +
          addComp.streetNumber;
      });
    },
    //显示电子围栏范围
    showrail(point, radius) {
      let circle = new BMapGL.Circle(point, radius, {
        strokeColor: "blue",
        strokeWeight: 2,
        strokeOpacity: 0.4,
      });
      this.map.addOverlay(circle);
    },
    //获取轨迹线路
    setTrack(list) {
      let arr = list.map((value) => {
        let csarr = value.rcs.split(",");
        let res = new BMapGL.Point(+csarr[0], +csarr[1]);
        var content = value.tt;
        var label = new BMapGL.Label(content, {
          // 创建文本标注
          position: res, // 设置标注的地理位置
          offset: new BMapGL.Size(10, 20), // 设置标注的偏移量
        });
        this.map.addOverlay(label);
        return res;
      });
      this.map.centerAndZoom(arr[0], 17);
      var polyline = new BMapGL.Polyline(arr, {
        strokeColor: "blue",
        strokeWeight: 2,
        strokeOpacity: 0.5,
      });
      this.map.addOverlay(polyline);
    },
    //重新选取点
    resetPoint(info) {
      this.map.addEventListener("click", (e) => {
        this.map.clearOverlays(); //清除地图上所有的覆盖物
        let pt = e.latlng;
        let point = new BMapGL.Point(pt.lng, pt.lat);
        let marker = new BMapGL.Marker(point);
        this.map.addOverlay(marker);
        this.showrail(point, info.rd);
        info.ocs = pt.lng + "," + pt.lat;
        console.log(info)
      });
    },
  },
  computed: {},
  // watch: {
  //   getstatic: function (arr) {
  //     this.addPoint(arr);
  //   },
  //   gettrack: function (list) {
  //     this.settrack(list);
  //   },
  // },
};
</script>