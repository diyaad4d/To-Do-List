/* by: Diyaa Daifi (d4d) */

const arr=[];

function printToDo(){
    let toDoList='';
    for (let i=0; i<arr.length; i++) {
        let oneTodoObject=arr[i];
        let toDoName=oneTodoObject.name;
        let toDoTime=oneTodoObject.time;
        let oneTodoHTML
            =`
              <p>${toDoName}</p>
              <p>${toDoTime}</p>
              <button
                // onclick="
                //     arr.splice(${i},1);
                //     printToDo();
                // "
                class="delete-button"
              >Delete</button>
              `;

        toDoList+=oneTodoHTML;
    }
    document.querySelector('.write-todo')
        .innerHTML=toDoList;
    document.querySelectorAll('.delete-button').forEach((but, index)=>{
        but.addEventListener('click',()=>{
            arr.splice(index,1);
            printToDo();
        })
    })
}

// onclick but using addEventListener
document.querySelector('.add-btn')
    .addEventListener('click', ()=>{
        addToDo();
    })

function addToDo(){
    const element=document.querySelector('.input-name');
    const nameToDo=element.value;

    const elementDate=document.querySelector('.input-time');
    const timeToDo=elementDate.value;
    arr.push(
        {
            name:nameToDo,
            time:timeToDo
         }
    );

    element.value=" ";
    printToDo();
}