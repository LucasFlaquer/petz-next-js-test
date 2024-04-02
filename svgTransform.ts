/* eslint-disable import/no-anonymous-default-export */
export default {
  process() {
    return 'module.export = {};'
  },
  getCacheKey() {
    return 'svgTransform'
  },
}
