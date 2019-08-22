#!/usr/bin/env node

let shell = require('shelljs');
let colors = require('colors');
let fs = require('fs');

let appName = process.argv[2];
let appDirectory = `${ process.cwd() }/${ appName }`;

let templates = require('./templates.js');

let servicesTemplates = require('./templates/Services/templates.js');

let routesTemplates = require('./templates/Routes/templates.js');
let routesFolders = require('./templates/Routes/folders.js');

let pagesTemplates = require('./templates/Pages/templates.js');

let requestsTemplates = require('./templates/Requests/templates.js');

const run = async() => {
    let success = await createReactApp();

    if(!success) {
        shell.echo('Opaaa Campeão... Alguma coisa deu errado por aqui!'.red);
        
        return false;
    }

    await cdIntoNewApp();
    await installPackages();
    await updateTemplates();

    await createFolderTemplates(routesFolders, 'Routes');

    // await createFileTemplates(servicesTemplates, 'Services');
    await createFileTemplates(routesTemplates, 'Routes');
    // await createFileTemplates(pagesTemplates, 'Pages');
    // await createFileTemplates(requestsTemplates, 'Requests');

    shell.echo('É isso rapazeada! Tá tudo prontinho!'.green);

    shell.echo('\n\nEstou te transferindo para a pasta do projeto e já estou inicializando ela pra você :)'.green);

    shell.exec(`cd ${ appName } && yarn start`);
}

const createReactApp = () => {
    return new Promise(resolve => {
        if(appName) {
            shell.exec(`create-react-app ${ appName }`, () => {
                shell.echo('Projeto criado!'.green);

                resolve(true);
            });
        } else {
            shell.echo('\n O Nome do projeto não foi informado.'.red);
            shell.echo('\n Informe um nome de projeto no seguinte formato: ');
            shell.echo('\n wj-create-react-app', 'nome-do-projeto\n'.cyan);

            resolve(false);
        }
    });
}

const cdIntoNewApp = () => {
    return new Promise(resolve => {
        shell.exec(`cd ${ appName }`, () => { 
            resolve(true); 
        });
    });
}

const installPackages = () => {
    return new Promise(resolve => {
        shell.echo('\nFalta pouco, me deixa pensar! Estou instalando umas paradinhas legais pra você.'.green);

        shell.exec(`yarn add react-router react-router-dom axios node-sass prop-types node-sass-glob-importer react-throttle`, () => {
            shell.echo('\nFalei que faltava pouco.'.green);
            shell.echo('\nProntinho, tudo instalado pra você.'.green);

            resolve();
        });
    });
}

const updateTemplates = () => {
    return new Promise(resolve => {
        let promises = [];

        Object.keys(templates).forEach((fileName, i) => {
            promises[i] = new Promise(res => {
                fs.writeFile(`${ appDirectory }/src/${ fileName }`, templates[fileName], function(err) {
                    if(err)
                        return shell.echo(`${ err }`.red)

                    res();
                });
            });
        });

        Promise.all(promises).then(() => resolve() )
    });
};

const createFolderTemplates = (subFolders, folderName) => {
    const dir = `${ appDirectory }/src/${ folderName }`;

    try {
        if(!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }

        return new Promise(resolve => {
            let promises = [];

            subFolders.forEach((folderName, i) => {
                if(!fs.existsSync(`${ dir }/${ folderName }`)) {
                    promises[i] = new Promise(res => {
                        fs.mkdirSync(`${ dir }/${ folderName }`);

                        res();
                    });
                }
            });

            Promise.all(promises).then(_ => resolve());
        });
    } catch (err) {
        shell.echo(`${ err }`.red);   s
    }
}

const createFileTemplates = (templates, folderName) => {
    const dir = `${ appDirectory }/src/${ folderName }`;

    try {
        if(!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }

        return new Promise(resolve => {
            let promises = [];
    
            Object.keys(templates).forEach((fileName, i) => {
                promises[i] = new Promise(res => {
                    fs.writeFile(`${ appDirectory }/src/${ folderName }/${ fileName }`, templates[fileName], function(err) {
                        if(err)
                            return shell.echo(`${ err }`.red);
    
                        res();
                    })
                })
            });
    
            Promise.all(promises).then(_ => resolve());
        });
    } catch(err) {
        shell.echo(`${ err }`.red);
    }
}

run();