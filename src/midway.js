var dimensions = require('dimensions'),
    css = require('css'),
    evs = require('event'),
    array = require('to-array.js'),
    domready = require('domready'),
    each = require('for-each')


module.exports = function () {
  each(array(document.querySelectorAll('.midway-horizontal')), function (el) {
    css(el, {
      marginLeft: -(dimensions(el).outerWidth()/2),
      display: 'inline',
      position: 'absolute',
      left: '50%'
    })
  })

  each(array(document.querySelectorAll('.midway-vertical')), function (el) {
    css(el, {
      marginTop: -(dimensions(el).outerHeight()/2),
      display: 'inline',
      position: 'absolute',
      top: '50%'
    })
  })
}

evs.bind(window, 'resize', module.exports)
domready(module.exports)