const title = document.getElementById("title");
const description = document.getElementById("description");
const form = document.querySelector("form");
const container = document.querySelector(".container");

// const tasks = [];
const tasks = localStorage.getItem("tasks")? JSON.parse(localStorage.getItem("tasks")):[];
showAllTasks();
// console.log(tasks);

function showAllTasks (){
    tasks.forEach((value,index)=>{
        const div = document.createElement("div");
        div.setAttribute("class","task");
        
        const innerDiv = document.createElement("div");
        div.append(innerDiv);

        const p = document.createElement("p");
        p.innerText =  value.title;
        innerDiv.append(p);

        const span = document.createElement("span");
        span.innerText = value.description;
        innerDiv.append(span);
        
        const btn = document.createElement("button");
         btn.setAttribute("class", "dltBtn");
         btn.innerText="-";

         btn.addEventListener("click",()=>{
            removeTask();
            tasks.splice(index,1);
            localStorage.setItem("tasks", JSON.stringify(tasks));//local storage bhi update hojaega
            // console.log(tasks);
            showAllTasks();
         })
         
        div.append(btn);

        container.append(div);
    })
}

function removeTask(){
    tasks.forEach(()=>{
    const div = document.querySelector(".task");
    div.remove();
    });
};
//tasks is array of object [{}, {}, {}, {}] we will push elements in this

form.addEventListener("submit", (e)=>{
    e.preventDefault(); //prevents from reloading page

    removeTask();// remove previous task then add new
    

    tasks.push({
        title: title.value,
        description:description.value,
    })
    //push hone ke baad
    localStorage.setItem("tasks", JSON.stringify(tasks)); //converts from object object to string by JSON.stringify 
    // console.log(tasks);
    showAllTasks();
})
