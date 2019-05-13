# [staven-cli](https://github.com/staven630/staven-cli)
&emsp;&emsp;实用的前端工具箱。功能逐步增加更新

## 安装
```
npm i -g staven-cli
//or
yarn add global staven-cli
```

## 常见命令行事件
&emsp;&emsp;括号内为简写形式
```
staven tpl(t)：主要用来生成模板
```

## 事件
&emsp;&emsp;<>、[]均表示占位符，命令行中不需要加上
* <文件名>：可以是路径+文件名。eg: staven t components/tab-list
* [配置项]：直接配置项。eg: staven t a --vue
* [配置项键名] (配置项键值): 赋值配置项。eg: staven t a --type vue

### tpl(t)

> staven tpl <filename> [--type] (value) [--scss]
> 
##### 直接配置项
| 选项名 | 类型 | 可选范围 | 是否必填 | 描述 |
| :---  | :--- | :--- | :--- | :--- | 
| --vue  | String | --(vue/react/angular) | false | 选定生成vue类型的文件，等同于--type vue |
| --ts  | String | --(js/ts) | false | 选定文件的js语言类型，等同于--lang ts |
| --less  | String | --(css/less/sass/scss/stylus) | false | 选定文件的style类型，等同于--style less |

```
// 默认生成采用js、css的vue模板
staven t hello-world --vue 

 // 生成采用stylus、ts的vue模板
staven t hello-world --vue --ts --stylus
```

##### 赋值配置项
| 选项名 | 类型 | 取值 | 是否必填 | 描述 |
| :---  | :--- | :--- | :--- | :--- | 
| --type  | String | vue/react/angular | false | 选定生成vue类型的文件 |
| --lang  | String | js/ts | false | 选定文件的js语言类型 |
| --style  | String | css/less/sass/scss/stylus | false | 选定文件的style类型 |


```
staven t hello-world --type vue --lang ts --style scss
// 等价于
staven t hello-world --vue --ts --stylus
```