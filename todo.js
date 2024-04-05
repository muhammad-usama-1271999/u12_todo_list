#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let condition2 = true;
let array = [];
let a;
console.log(chalk.rgb(250, 150, 100)("\n\t WELCOME IN TODO LIST \t\n"));
while (condition2) {
    let condition = true;
    let todo = await inquirer.prompt([
        {
            name: "item",
            type: "list",
            message: "please select any one option",
            choices: ["ADD TODO", "DELETE TODO", "UPDATE TODO LIST", "CHECK TODO LIST", "EXIT TODO LIST"]
        }
    ]);
    if (todo.item == "ADD TODO") {
        condition = true;
        console.log("\n\t WELCOME TO ADD TODO LIST \t\n");
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
    else if (todo.item == "DELETE TODO") {
        condition = true;
        console.log("\n\t WELCOME TO DELETE TODO \t\n");
        if (array.length > 0) {
            while (condition) {
                let Todo = await inquirer.prompt([
                    {
                        name: "index1",
                        type: "list",
                        message: chalk.rgb(10, 300, 130)(" Please select of these choices, Do you want to delete in this todo list "),
                        choices: array
                    },
                    {
                        name: "removeMoreTodo",
                        type: "confirm",
                        message: chalk.rgb(150, 150, 150)(" do you want to delete more todo in this list "),
                        default: "false",
                    }
                ]);
                array.splice(array.indexOf(Todo.index1), 1);
                condition = Todo.removeMoreTodo;
                console.log(array);
            }
            ;
        }
        else {
            console.log("sorry for say, todo list is empty");
        }
    }
    else if (todo.item == "UPDATE TODO LIST") {
        if (array.length > 0) {
            condition = true;
            console.log("\n\t WELCOME IN UPDATE TODO LIST \t\n");
            while (condition) {
                let Todo = await inquirer.prompt([
                    {
                        name: "index1",
                        type: "list",
                        message: chalk.rgb(10, 300, 130)(" Please select  of these choices, Do you want to replace in this todo list "),
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
                array.splice(array.indexOf(Todo.index1), 1);
                a = array.indexOf(Todo.index1);
                array.splice(a, 0, Todo.replace);
                condition = Todo.removeMoreTodo;
                console.log(array);
            }
            ;
        }
        else {
            console.log("sorry for say, todo list is empty");
        }
    }
    else if (todo.item == "CHECK TODO LIST") {
        if (array.length > 0) {
            condition = true;
            console.log("WELCOME TO CHECK TODO LIST");
            console.log(array);
            while (condition) {
                let user = await inquirer.prompt([
                    {
                        name: "exit",
                        type: "confirm",
                        message: "do yo want to exit check todo list",
                        default: "true"
                    }
                ]);
                condition = user.exit;
            }
        }
        else {
            console.log("sorry for say, todo list is empty");
        }
    }
    else if (todo.item == "EXIT TODO LIST") {
        let exit = await inquirer.prompt({
            name: "con",
            type: "confirm",
            message: chalk.rgb(290, 110, 200)(" do you want to exit to your todo list "),
            default: "true"
        });
        console.log(chalk.rgb(260, 130, 210)(" \n\t THANK YOU FOR USING MY TODO LIST \t\n"));
        condition2 = !exit.con;
    }
}
