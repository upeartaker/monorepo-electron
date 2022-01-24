/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface Window {
  /**
   * Expose Environment versions.
   * @example
   * console.log( window.versions )
   */
  readonly versions: NodeJS.ProcessVersions
  /**
   * Safe expose node.js API
   * @example
   * window.nodeCrypto('data')
   */
  readonly nodeCrypto: { sha256sum(data: import('crypto').BinaryLike): string }

  readonly desktop: boolean
}
