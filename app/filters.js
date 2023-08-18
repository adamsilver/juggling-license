const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter

const { marked } = require('marked');
const GovukHTMLRenderer = require('govuk-markdown')

addFilter('govukMarkdown', function(string, kwargs) {
  if(typeof string !== 'string') {
    return
  }

  const options = {
    headingsStartWith: 'xl',
    ...kwargs
  }

  marked.setOptions({
    ...options,
    headerIds: false, // Quieten deprecation warning in marked.js 5.x
    mangle: false, // Quieten deprecation warning in marked.js 5.x
    renderer: new GovukHTMLRenderer()
  })

  return marked(string)
}, { renderAsHtml: true })