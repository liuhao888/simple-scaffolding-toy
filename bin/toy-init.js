#!/usr/bin/env node
const commander = require('commander');
const chalk = require('chalk');


/**
 * toy init 基本用法
 */
commander.usage('<template-name>, [project-name]');

/**
 * toy init --help 弹出帮助信息
 */
commander.on('--help', () => {
  console.info('Example:');
  console.info();
  console.info(chalk.red('    # create a new project    '));
  console.info(chalk.green('    $ toy init my-project   '));
  console.info();
})


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