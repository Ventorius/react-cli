import 'babel-polyfill'
import program from 'commander'
import chalk from 'chalk'
import config from './config.json'
import {readTemplate, renameComponent, checkType} from './generate'

const addExtension = file => `${file}.${config.componentFileExtension}`

//TODO add css (and other extensions)
//TODO add styled components
//TODO add action creator and redux oriented mechanisms
//TODO integrate storybook
//TODO connected to redux state flag
//TODO default arguments
//TODO add test files
//TODO support for .ts .tsx
//TODO custom components creation





program
    .version('0.1.0')
    .option('-init', 'Initialize configuration')


program
    .command('init')
    .action(async function(name, options){
       
    })

program
    .command('create [name]')
    .description('run setup commands for all envs')
    .option('-c --class', 'Create class component')
    .option('-p --pure', 'Create pure component')
    .option('-f --functional', 'Create functional component')
    .option('-r --container', 'Create redux connected component')
    .action(async function(name, options){
        name = name || 'index'
        const type = checkType(options)
        const template = await readTemplate(type)
        renameComponent(name, template)
        console.log(type)
        console.log(`Creating component with name ${chalk.red(addExtension(name))}`)
    })

program.parse(process.argv)