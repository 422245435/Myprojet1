/**
 * Created by Administrator on 2017/3/28.
 */
var centerlat = 121.367042;
var centerlng = 31.238039;
var lats = 121.367042;
var lngs = 31.238039;
var explains = "<strong>上海润滋信息科技有限公司</strong><br/>联系电话：400-136-1181/15000083578<br/>联系地址：上海市普陀区同普路1501弄47号102室";
jQuery(document).ready( function () {
    map();
});
function map() {

    var map = new BMap.Map("allmap");

    var point = new BMap.Point(centerlat, centerlng);
    map.centerAndZoom(point, 15);
    map.addControl(new BMap.NavigationControl());  //添加默认缩放平移控件
    map.addControl(new BMap.NavigationControl({ anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL }));  //右上角，仅包含平移和缩放按钮
    map.addControl(new BMap.NavigationControl({ anchor: BMAP_ANCHOR_BOTTOM_LEFT, type: BMAP_NAVIGATION_CONTROL_PAN }));  //左下角，仅包含平移按钮
    map.addControl(new BMap.NavigationControl({ anchor: BMAP_ANCHOR_BOTTOM_RIGHT, type: BMAP_NAVIGATION_CONTROL_ZOOM }));  //右下角，仅包含缩放按钮
    map.enableScrollWheelZoom();    //启用滚轮放大缩小，默认禁用
    map.enableContinuousZoom();    //启用地图惯性拖拽，默认禁用
    // 编写自定义函数,创建标注
    function addMarker(point, info) {
        var marker = new BMap.Marker(point);
        var infoWindow1 = new BMap.InfoWindow(info);
        marker.addEventListener("click", function () { this.openInfoWindow(infoWindow1); });
        map.openInfoWindow(infoWindow1,point);
        map.addOverlay(marker);
    }

    // 随机向地图添加25个标注
    var lat = new Array(lats, 0);
    var lng = new Array(lngs, 0);
    var explain = new Array(explains);

    for (var i = 0; i < 2; i++) {
        if (lat[i] == "0") {
            break;
        }
        var point = new BMap.Point(lat[i], lng[i]);
        addMarker(point, explain[i]);
    }
}