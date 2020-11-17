<template>
  <f7-app>
    <f7-appbar>
      <div class="left">
        <f7-button
          small
          panel-toggle="left"
          class="display-flex"
          icon-f7="bars"
        ></f7-button>
      </div>
      <div class="right">
        <f7-searchbar
          inline
          custom-search
          :disable-button="false"
        ></f7-searchbar>
      </div>
    </f7-appbar>
    <f7-panel left>
      <f7-block>
        <p>左侧弹出框</p>
      </f7-block>
    </f7-panel>
    <f7-swiper pagination navigation scrollbar class="my-swiper">
      <f7-swiper-slide
        ><img
          src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1499932423,1656824410&fm=26&gp=0.jpg"
          alt=""
      /></f7-swiper-slide>
      <f7-swiper-slide
        ><img
          src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1626888615,3982821741&fm=26&gp=0.jpg"
          alt=""
      /></f7-swiper-slide>
      <f7-swiper-slide
        ><img
          src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2877325553,560783714&fm=26&gp=0.jpg"
          alt=""
      /></f7-swiper-slide>
    </f7-swiper>

    <f7-card
      title="name"
      content="朱江威"
    ></f7-card>
    <f7-card
      title="QQ"
      content="2723306623"
    ></f7-card>
    <f7-card
      title="e-mail"
      content="jiangweizhu713@163.com"
    ></f7-card>
  </f7-app>
</template>

<script>
export default {

}
</script>

<style>
.my-swiper img {
  width: 100%;
  height: 200px;
}
</style>