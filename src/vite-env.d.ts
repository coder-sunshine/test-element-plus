/// <reference types="../node_modules/element-plus/global.d.ts" />

/// <reference types="ant-design-vue/typings/global" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'

  const component: DefineComponent<{}, {}, any>

  export default component
}
