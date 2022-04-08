/* globals $, google*/
// Google Mapの設定
function initMap() {
  // マップの作成
  var latlng = new google.maps.LatLng(35.6897348, 139.6978964); /* 座標 */
  var myOptions = {
    zoom: 16, /* 拡大比率 */
    center: latlng, /* 表示するマップの中心座標 */
    scrollwheel: false, /* マウスのホイールでマップを拡大縮小させるかどうか */
    disableDoubleClickZoom: true, /* ダブルクリックでのマップの拡大縮小を禁止するかどうか */
    draggable: false, /* マーカーをドラッグで移動可能にするかどうか */
    mapTypeControlOptions: { mapTypeIds: ['style', google.maps.MapTypeId.ROADMAP] } /* 地図の種類（通常のマップ） */
  };

  // マップの表示
  var map = new google.maps.Map(document.getElementById('google-map'), myOptions);

  // マーカーの作成
  var markerOptions = {
    position: latlng, /* マーカーの座標 */
    map: map, /* どのマップにマーカーを表示させるか */
    title: 'Kirameki Gakko',  /* タイトル */
    animation: google.maps.Animation.DROP /* 表示させる際のアニメーション（DROP：上から落ちてくる） */
  };

  // マーカーの表示
  var marker = new google.maps.Marker(markerOptions);
}