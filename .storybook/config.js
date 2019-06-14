import { configure } from '@storybook/react'
import '!style-loader!css-loader!../src/assets/scss/normalize.css'

const context = require.context('../src/stories', true, /^.*?\.tsx?$/)

function loadStories() {
  context.keys().forEach(filename => {
    context(filename)
  })
}

configure(loadStories, module)
