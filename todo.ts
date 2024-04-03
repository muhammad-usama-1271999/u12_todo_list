#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let array:string[] =[];
let b = [];
let c = [];
let condition = true;
console.log(" WELCOME IN TODO LIST ")
while(condition){
let todo = await inquirer.prompt(
    [
        {
            name:"rutine",
            type:"input",
            message:chalk.rgb(150,300,200)(" input your rutine in todo list "),
        },
        {
            name:"moreTodo",
            type:"confirm",
            message:chalk.rgb(288,108,350)(" Do you want to add more todo in list "),
            default:"true",
        }
    ]
);
array.push(todo.rutine);
condition = todo.moreTodo;
console.log(array);
}

condition = true;
while(condition){
    let Todo = await inquirer.prompt(
        [
            {
                name:"index1",
                type:"list",
                message:chalk.rgb(10,300,130)(" Please select in one of this choices, Do you want to remove in this todo list "),
                choices: array
            },
            {
                name:"removeMoreTodo",
                type:"confirm",
                message:chalk.rgb(150,150,150)(" do you want to remove more todo in this list "),
                default:"false",
            }
        ]
    );
       b.push(array.splice(array.indexOf(Todo.index1),1));
    console.log(chalk.blueBright(` these item you remove your todo list "${b}" `));
    condition = Todo.removeMoreTodo;
    console.log( array );
    
};
condition = true;
while(condition){
    let toDo = await inquirer.prompt(
        [
            {
                name: "concat",
                type:"input",
                message:chalk.rgb(300,110,250)(" Do you want again add more todo ")
            },
            {
                name: "con",
                type: "confirm",
                message: chalk.rgb(290,110,200)(" do you want again add more todo in your todo list "),
                default:"true"
            },
        ]
    );
    c.push(toDo.concat)
    console.log(([toDo.concat]));
array = array.concat([toDo.concat]);
condition = toDo.con;

console.log(array);

    }
