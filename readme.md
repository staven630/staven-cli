# [staven-cli](https://github.com/staven630/staven-cli)
&emsp;&emsp;实用的开发者工具箱。功能逐步增加更新

# 安装
```
npm i -g staven-cli
//or
yarn add global staven-cli
```

# 命令行事件
### 实践规则
&emsp;&emsp;<>、[]均表示占位符，命令行中不需要加上
```bash
st t components/tab-list --type vue --style scss
```
* <文件名>

&emsp;&emsp;可以是路径+文件名。eg: components/tab-list

* [配置项]
  
&emsp;&emsp;直接配置项。eg: --type、--style

* (配置项键值)
  
 &emsp;&emsp;配置项的值。eg: vue、scss

### 事件列表
| 命令          | 简写        | 描述         | 实例         |
| :------------ | :---------- | :----------- | :----------- |
| st add <name> | st a <name> | 添加配置信息 | st add husky |


# add：添加配置

&emsp;&emsp;用于一键添加各类配置。
```bash
st a husky 
```
&emsp;&emsp;支持同时配置多项。
```bash
st a husky commitizen
```


| 命令                | 简写            | 描述                                                                                                                                                                                                                                                                                                                                                       |
| :------------------ | :-------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| st add husky        | st a husky      | husky、lint-staged配置git hooks辅助工作流。eg：[集成TypeScript + ESLint + Pritter + Husky + Jest前端开发利器](https://github.com/staven630/blog/blob/master/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/%E9%9B%86%E6%88%90TypeScript%20%2B%20ESLint%20%2B%20Pritter%20%2B%20Husky%20%2B%20Jest%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91%E5%88%A9%E5%99%A8.md) |
| st add   commitizen | st a commitizen | [Git commit message规范化提交](https://github.com/staven630/blog/blob/master/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/Git%20commit%20message%E8%A7%84%E8%8C%83%E5%8C%96%E6%8F%90%E4%BA%A4.md)                                                                                                                                                         |
