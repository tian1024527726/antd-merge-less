## antd-pro-merge-less

使用方式：

```
// 将所有 less 合并为一个供 themePlugin使用
  const outFile = path.join(__dirname, './.temp/react-antd-template.less');
  const stylesDir = path.join(__dirname, './src/');
  const projectName = 'react-antd-template'

  const mergeLessPlugin = new MergeLessPlugin({
    stylesDir,
    outFile,
    projectName
  });
```