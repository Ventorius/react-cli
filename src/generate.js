import fs from 'fs-extra'
import path from 'path'

export const checkType = options => {
    if(options.class){
        return 'class'
    }

    if(options.pure){
        return 'pure'
    }

    if(options.functional){
        return 'functional'
    }

    if(options.container){
        return 'container'
    }

    return config.defaultComponentType
}

export const readTemplate = async type => {
    const filePath = path.join(__dirname,'templates', type, 'index.js')
    return fs.readFile(filePath, 'utf8')
}

export const renameComponent = (name, component) => {
    const capitalized = name.charAt(0).toUpperCase() + name.slice(1)
    return component.replace(new RegExp('COMPONENT_NAME', 'g'), capitalized)
}