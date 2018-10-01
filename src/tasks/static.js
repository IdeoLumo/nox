'use strict';

const path = require('path')

module.exports = (gc, context) => {
  /**
   * Task: static
   *
   * Copy static assets
   */
  let options = context.options

  gc.task('static', gc.fn(
    gc.pump([
      gc.src(path.join(options.dirs.source, options.dirs.static)),
      gc.dest(path.join(options.dirs.build)),
      context.SyncBrowser()
    ])
  ))
}