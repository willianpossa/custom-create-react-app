#!/usr/bin/env node

let shell = require('shelljs');
let colors = require('colors');
let fs = require('fs');

let appName = process.argv[2];
let appDirectory = `${ process.cwd() }/${ appName }`;

let templates = require('./templates.js');

const run = async() => {
    let success = await createReactApp();

    if(!success) {
        console.log('Opaaa Campeão... Alguma coisa deu errado por aqui!'.red);
        
        return false;
    }

    await cdIntoNewApp();
    await installPackages();
    await updateTemplates();

    console.log('É isso rapazeada! Tá tudo prontinho!');
}

const createReactApp = () => {
    return new Promise(resolve => {
        if(appName) {
            shell.exec(`create-react-app ${ appName }`, () => {
                console.log('Projeto criado!');

                resolve(true);
            });
        } else {
            console.log('\n O Nome do projeto não foi informado.'.red);
            console.log('\n Informe um nome de projeto no seguinte formato: ');
            console.log('\n wj-create-react-app', 'nome-do-projeto\n'.cyan);

            resolve(false);
        }
    });
}

const cdIntoNewApp = () => {
    return new Promise(resolve => {
        shell.exec(`cd ${ appName }`, () => { resolve });
    });
}

const installPackages = () => {
    return new Promise(resolve => {
        console.log('\n Falta pouco, me deixa pensar! Estou instalando umas paradinhas legais pra você.');

        shell.exec(`yarn add react-router react-router-dom axios node-sass prop-types node-sass-glob-importer react-throttle`, () => {
            console.log('\n Falei que faltava pouco. Prontinho, tudo instalado pra você.'.green);

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
                        return console.log(err)

                    res();
                });
            });
        });

        Promise.all(promises).then(() => resolve() )
    });
}

run();