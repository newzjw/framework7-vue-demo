<template>
  <!-- Tabs -->
  <f7-page :no-navbar="true" no-swipeback>
    <f7-toolbar tabbar bottom labels >
      <f7-link tab-link="" tab-link-active route-tab-id="home" href="./">首页</f7-link>
      <f7-link tab-link="" route-tab-id="about" href="./about/">关于</f7-link>
      <f7-link tab-link="" route-tab-id="contact" href="./contact/">我的</f7-link>
    </f7-toolbar>
    <f7-tabs routable animated>
      <f7-tab id="home"></f7-tab>
      <f7-tab id="about"></f7-tab>
      <f7-tab id="contact"></f7-tab>
    </f7-tabs>
  </f7-page>
</template>


<script>
export default {

}
</script>

<style>

</style>