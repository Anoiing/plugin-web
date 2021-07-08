import { uniqBy } from 'lodash';
const pluginsContext = require.context('./plugins/', false, /\.js$/);

let plugins = [];
pluginsContext.keys().forEach((key) => {
  // 使用文件名作为备选插件名
  const alternativeName = key.replace(/^.*\/|\..*$/g, '');
  const { name, method } = pluginsContext(key);
  plugins = uniqBy(
    [
      ...plugins,
      {
        // 优先使用指定插件名
        name: name || alternativeName,
        method: method ? method : () => {}
      }
    ],
    (o) => o.name
  );
});

export default plugins;
