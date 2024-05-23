import inquirer from "inquirer";
import chalk from "chalk"
import { up } from "inquirer/lib/utils/readline.js";

let todoList : string[] = [];
let condition = true;

console.log(chalk.bgMagenta.bold('\t \n Welcome To CodeWithMomina - ToDo List Application \n'));

//while(condition){

//let addTask = await inquirer.prompt([{

// name :"task",
// type:"input",
// message: chalk.bgGreen("Enter Your Task."),



//}]);
 //todoList.push(addTask.task);
 //console.log(`${addTask.task} Task Added in ToDo List.`);

 //let addmoreTask = await inquirer.prompt([
   // {
//name:'AddMore',
//type:"confirm",
//message:"Do you Want to Add More Task",
//default: false,
// }
//]);

//condition = addmoreTask.AddMore

//}
//console.log("Your Updated ToDo-List", todoList);

let main = async () => {
while(condition){
    let option = await inquirer.prompt([
        {
name : "choice",
type : 'list',
message : "Select an option you want to do :",
choices :['Add Task','Delete Task','Update Task','View ToDo List','Exit']
 }
])

if(option.choice === "Add Task"){
await AddTask();

}
else if (option.choice === "Delete Task"){
    await deletetask();
}
else if (option.choice === 'Update Task'){
    await updatetask();
}
else if (option.choice === "View ToDo List"){
  await viewTask()
}
else if(option.choice === 'Exit'){
    condition = (false);
}


}
}

let AddTask = async () => {
    
    let newTask = await inquirer.prompt([
        {

name : "task",
type:"input",
message :'Enter Your New Task:'
    }
]);
todoList.push(newTask.task);
console.log(`\n ${newTask.task} task added successfully in ToDo-List`)
}


//function to view all ToDo List Tasks

let viewTask =  () => {
    console.log('\n Your ToDo List: \n');
    todoList.forEach((task,index) => {

console.log(`${index + 1} : ${task}`)
    })
}
//function to delete tasks 

let deletetask = async () => {
    
 {
    await viewTask()}

    let taskindex = await inquirer.prompt ([{

name :'index',
type :'number',
message : "Enter the index no of the task you want to delete ."


    }]);
     let deletedtask = todoList.splice(taskindex.index - 1,1)
     console.log(` \n ${deletedtask} this task has been deleted successfully.`);


}

// function to update task 

let updatetask = async () => {
    await viewTask()
    let update_task_index = await inquirer.prompt ([
        {
        
name: "string",
type:"number",
message: "Enter the index no you want to update"

 } ,{
name : "newtask",
type :"input",
message:'Now Enter the New Task Name.'


 }
] );

todoList[update_task_index.index -1] = update_task_index.newtask
console.log(`\n Task at index number ${update_task_index.index - 1} updated successfully [for updated list check 'view to do list ']`)

    
}

main()