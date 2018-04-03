#!/usr/bin/env node
const commander = require('commander');

commander.version(require('../package.json').version) // 返回该命令包的版本号
  .usage('<command> [options]') // 显示基本使用方法
  .command('init', 'generate a new project')
  .parse(process.argv); // 将接受到的参数加入commander的处理管道

