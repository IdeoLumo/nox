'use strict'

exports.init = (gc, context) => {
  gc.task('default', gc.parallel('build'))
}
