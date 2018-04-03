#!/usr/bin/env node
const commander = require('commander');
const chalk = require('chalk');


/**
 * toy init 基本用法
 */
commander.usage('<template-name>, [project-name]')
  .option('-c, --clone', 'use git clone');


/**
 * 输入命令后，如果命令后面没有添加参数，则在命令行中弹出提示
 */
function help () {
  commander.parse(process.argv);
  if (commander.args.length < 1) {
    return commander.help();
  }
}

help();