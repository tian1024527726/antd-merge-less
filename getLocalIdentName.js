module.exports = (path, projectName) => {
  const antdProPath = path.match(/src(.*)/)[1].replace('.less', '').replace('.module.less');
  const arr = antdProPath
    .split('/')
    .map(a => a.replace(/([A-Z])/g, '-$1'))
    .map(a => a.toLowerCase());
  return `${projectName}${arr.join('-')}-`.replace(/--/g, '-');
};
