import React from "react";
import Header from "../Other/Header";
import TaskListNumber from "../Other/TaskListNumber";
import Tasklist from "../Tasklist/Tasklist";
function EmployeeDashboard(props){
    return(
        <div className="p-10 bg-[#1C1C1C] h-screen">
            <Header changeUser={props.changeUser} data={props.data}/>
            <TaskListNumber data={props.data} />
            <Tasklist data={props.data} />
        </div>
    )
}

export default EmployeeDashboard;