#!/usr/bin/env node

const shell = require('shelljs');
const colors = require('colors');
const fs = require('fs');

let appName = process.argv[2];
let appDirectory = `${ process.cwd() }/${ appName }`;

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
            shell.exec(`Criar novo projeto react ${ appName }`, () => {
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

run();