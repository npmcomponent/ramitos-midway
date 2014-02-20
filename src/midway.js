var dimensions = require('ramitos-dimensions'),
    css = require('component-css'),
    evs = require('component-event'),
    array = require('wilmoore-to-array.js'),
    domready = require('jb55-domready'),
    each = require('kewah-for-each')


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