import {useState} from "react";

export default function TodoApp(){
    const [tasks , setTasks] = useState([]);
    const [task , setTask] = useState([]);

    const addTask = ()=>{
        if(task.trim() !== ""){
            setTasks([...tasks, {text: task,completed: false}]);
            setTask("");
        }
    };

    const toggleTask = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);

    };

    const deleteTask = (index)=>{
        setTasks(tasks.filter((_,i) => i !== index));
    };

    return (
        <div className="color:pink">
            <h1>To Do List</h1>
            <div className="flex mb-4">
                <input type="text" value ={task} onChange ={(e) => setTask(e.target.value)}  placeholder="Add a new task"/>

                <button onClick ={addTask}>ADD</button>
            </div>

            <ul>
                {tasks.map((t, index) => (
                    <li key={index} className="flex justify-between items-center p-2 border-b">
                    <span
                      onClick={() => toggleTask(index)}
                      className={`cursor-pointer ${t.completed ? "line-through text-gray-500" : ""}`}
                    >
                      {t.text}
                    </span>
                    <button onClick={() => deleteTask(index)} className="text-red-500">❌</button>
                  </li>
                   

                )) }
            </ul>

        </div>
    )


}
