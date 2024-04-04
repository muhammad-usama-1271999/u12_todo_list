#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let condition2 = true;
let array = [];
let a;
while (condition2) {
    let condition = true;
    console.log(chalk.rgb(250, 150, 100)("\n\t WELCOME IN TODO LIST \t\n"));
    let todo = await inquirer.prompt([
        {
            name: "item",
            type: "list",
            message: "please select any one option",
            choices: ["addTodoList", "removeTodoList", "updateTodoList", "replaceTodoList", "exitTodoList"]
        }
    ]);
    if (todo.item == "addTodoList") {
        condition = true;
        console.log("\n\t WELCOME IN ADD TODO LIST \t\n");
        while (condition) {
            let todo = await inquirer.prompt([
                {
                    name: "rutine",
                    type: "input",
                    message: chalk.rgb(150, 300, 200)(" input your rutine in todo list "),
                },
                {
                    name: "moreTodo",
                    type: "confirm",
                    message: chalk.rgb(288, 108, 350)(" Do you want to add more todo in list "),
                    default: "true",
                }
            ]);
            array.push(todo.rutine);
            condition = todo.moreTodo;
            console.log(array);
        }
        ;
    }
    else if (todo.item === "removeTodoList") {
        condition = true;
        while (condition) {
            let Todo = await inquirer.prompt([
                {
                    name: "index1",
                    type: "list",
                    message: chalk.rgb(10, 300, 130)(" Please select in one of this choices, Do you want to remove in this todo list "),
                    choices: array
                },
                {
                    name: "removeMoreTodo",
                    type: "confirm",
                    message: chalk.rgb(150, 150, 150)(" do you want to remove more todo in this list "),
                    default: "false",
                }
            ]);
            array.splice(array.indexOf(Todo.index1), 1);
            condition = Todo.removeMoreTodo;
            console.log(array);
        }
        ;
    }
    else if (todo.item === "updateTodoList") {
        condition = true;
        while (condition) {
            let toDo = await inquirer.prompt([
                {
                    name: "concat",
                    type: "input",
                    message: chalk.rgb(300, 110, 250)(" do you want to update todo list ")
                },
                {
                    name: "con",
                    type: "confirm",
                    message: chalk.rgb(290, 110, 200)(" do you want update more todo in your todo list "),
                    default: "true"
                },
            ]);
            array = array.concat([toDo.concat]);
            condition = toDo.con;
            console.log(array);
        }
    }
    else if (todo.item === "replaceTodoList") {
        condition = true;
        while (condition) {
            let Todo = await inquirer.prompt([
                {
                    name: "index1",
                    type: "list",
                    message: chalk.rgb(10, 300, 130)(" Please select in one of this choices, Do you want to replace in this todo list "),
                    choices: array
                },
                {
                    name: "replace",
                    type: "input",
                    message: "please enter your new todo for this place"
                },
                {
                    name: "removeMoreTodo",
                    type: "confirm",
                    message: chalk.rgb(150, 150, 150)(" do you want to replace more todo in this list "),
                    default: "false",
                }
            ]);
            a = array.splice(array.indexOf(Todo.index1), 1);
            array.splice(a, 0, Todo.replace);
            condition = Todo.removeMoreTodo;
            console.log(array);
        }
        ;
    }
    else if (todo.item == "exitTodoList") {
        let exit = await inquirer.prompt({
            name: "con",
            type: "confirm",
            message: chalk.rgb(290, 110, 200)(" do you want to exit to your todo list "),
            default: "true"
        });
        console.log(chalk.rgb(260, 130, 210)("THANK YOU FOR USING MY TODO LIST"));
        condition2 = !exit.con;
    }
}
