import { root, useRef } from '@lynx-js/react'

import App from './App.js'

root.render(<App></App>)

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
}
