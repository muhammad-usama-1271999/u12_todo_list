#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let array =[];
let condition = true;

while(condition){
let todo = await inquirer.prompt(
    [
        {
            name:"rutine",
            type:"input",
            message:chalk.rgb(150,300,200)("input your rutine in todo list"),
        },
        {
            name:"moreTodo",
            type:"confirm",
            message:chalk.rgb(288,108,350)("Do you want to add more todo in list"),
            default:"false",
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
                type:"number",
                message:chalk.rgb(10,300,130)("enter index number do you want to remove in this todo list"),
            },
            {
               name: "index2",
               type: "input",
               message:chalk.rgb(200,150,210)("enter second index number do you want to remove in todo list"),
            },
            {
                name:"removeMoreTodo",
                type:"confirm",
                message:chalk.rgb(150,150,150)("do you want to remove more todo in this list"),
                default:"false",
            }
        ]
    );
    array.splice(Todo.index1,Todo.index2);
    condition = Todo.removeMoreTodo;

    console.log(array);
};

    let toDo = await inquirer.prompt(
        [
            {
                name: "con",
                type: "input",
                message: "enter list for concatination",
            }
        ]
    )
    console.log(([toDo.con]));
array = array.concat([toDo.con]);

console.log(array);


