#! /usr/bin/env node 
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
let todolist = [];
let conditions = true;
console.log(chalk_1.default.magenta.bold("\n \t Wellcome to CodeWithRoman - Todo-List Application\n"));
while (conditions) {
    let addTask = await inquirer_1.default.prompt([
        {
            name: "task",
            type: "input",
            message: chalk_1.default.green("Enter your New Task :")
        }
    ]);
    todolist.push(addTask.task);
    console.log(`${addTask.task} Task added in Todo-list successfully`);
    let addMoreTask = await inquirer_1.default.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: "Do you want to add more task ?",
            default: "False"
        }
    ]);
    conditions = addMoreTask.addmore;
}
console.log("Your updated Todo-List:", todolist);
