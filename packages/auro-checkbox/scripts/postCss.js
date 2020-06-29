const autoprefixer = require('autoprefixer')
const postcss = require('postcss')
const postcssCustomProperties = require('postcss-custom-properties')
const removeRules = require('postcss-remove-rules')
const comments = require('postcss-discard-comments')
const fs = require('fs')

fs.readFile('src/auro-checkbox.css', (err, css) => {
  postcss([autoprefixer, postcssCustomProperties, comments])
    .use(comments({
      remove: function(comment) { return comment[0] == "@"; }
    }))
    .use(removeRules({
      rulesToRemove: {
        ':root': '*'
      }
    }))
    .process(css, { from: 'src/auro-checkbox.css', to: 'src/auro-checkbox.css' })
    .then(result => {
      fs.writeFile('src/auro-checkbox.css', result.css, () => true)
      if ( result.map ) {
        fs.writeFile('src/auro-checkbox.map', result.map, () => true)
      }
    })
})

fs.readFile('src/auro-checkbox-group.css', (err, css) => {
  postcss([autoprefixer, postcssCustomProperties, comments])
    .use(comments({
      remove: function(comment) { return comment[0] == "@"; }
    }))
    .use(removeRules({
      rulesToRemove: {
        ':root': '*'
      }
    }))
    .process(css, { from: 'src/auro-checkbox-group.css', to: 'src/auro-checkbox-group.css' })
    .then(result => {
      fs.writeFile('src/auro-checkbox-group.css', result.css, () => true)
      if ( result.map ) {
        fs.writeFile('src/auro-checkbox-group.map', result.map, () => true)
      }
    })
})
