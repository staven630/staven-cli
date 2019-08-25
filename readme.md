# [staven-cli](https://github.com/staven630/staven-cli)
&emsp;&emsp;实用的开发者工具箱。功能逐步增加更新

# 安装
```
npm i -g staven-cli
//or
yarn add global staven-cli
```

### 事件列表
| 命令                   | 描述         | 实例              |
| :--------------------- | :----------- | :---------------- |
| st add \<name\>        | 添加配置信息 | st add husky      |
| st env \<type\> [args] | 添加环境配置 | st env ng staging |


# add：添加配置

&emsp;&emsp;用于一键添加各类配置。

&emsp;&emsp;从第三项开始是配置列表，支持如下: husky、commitizen

eg:
```bash
st add husky 
```
&emsp;&emsp;支持同时配置多项。
```bash
st add husky commitizen
```


# env：添加环境变量
&emsp;&emsp;用于一键添加各类环境变量配置。

&emsp;&emsp;第三项表示类型，如：ng

&emsp;&emsp;从事第四项开始表示自定义环境变量

```bash
st env ng staging  
```

&emsp;&emsp;支持同时添加多项。
```bash
st env ng staging crm 
```
