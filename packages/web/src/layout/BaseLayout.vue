<script setup lang="ts">
import {
  Layout,
  LayoutHeader,
  LayoutSider,
  LayoutContent
} from 'ant-design-vue'
</script>

<template>
  <Layout class="base">
    <LayoutHeader class="header">Keen</LayoutHeader>
    <Layout>
      <LayoutContent>
        <router-view></router-view>
      </LayoutContent>
      <LayoutSider
        theme="light"
        width="300"
        :collapsible="true"
        :collapsedWidth="0"
        breakpoint="lg"
      >
        Sider
      </LayoutSider>
    </Layout>
    <!--    <LayoutFooter class="footer">@Copyright 2022 JJLDXZ</LayoutFooter>-->
  </Layout>
</template>

<style scoped lang="scss">
.base {
  height: 100%;

  .header {
    color: white;
  }

  .footer {
    background-color: #001529;
    text-align: center;
    color: white;
  }
}
</style>
