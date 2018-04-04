#!/usr/bin/env node
const commander = require('commander');
const chalk = require('chalk');
const inquirer = require('inquirer');
const download = require('download-git-repo');
const path = require('path'); // node module
const exists = require('fs').existsSync; // 检查是否存在路径

/**
 * toy init 基本用法
 */
commander.usage('<template-name>, [project-name]')
  .option('-c --clone', 'use git clone')
  .option('--offline', 'use cached template');

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

/**
 * 从命令输入的参数得到模板名和项目名称
 */
let templateName = commander.args[0]; // 得到模板名字
const projectName = commander.args[1];
const isEmptyProjectName = !projectName || projectName === '.'; // 是否输入项目名称
const name = isEmptyProjectName ? path.relative('../', process.cwd()) : projectName; // 如果项目名称为空，则返回到当前进程的目录的上一级目录
const to = path.resolve(projectName || '.'); // 得到一个相对与当前的工作目录的绝对路径
const clone = commander.clone || false;

if (commander.offline) {

}

// 如果项目名称为空，或者已经存在一个同名的项目时
if ( isEmptyProjectName || exists(to)) {
  inquirer.prompt([{
    type: 'confirm',
    message: isEmptyProjectName ? 'Initial project in current directory? ' : 'Target directory exists. Continue?',
    name: 'ok'
  }]).then( answers => {
    if (answers.ok) {
      initProjectDirectory();
    }
  }).catch()
} else {
 initProjectDirectory();
}

function initProjectDirectory () {
  
}