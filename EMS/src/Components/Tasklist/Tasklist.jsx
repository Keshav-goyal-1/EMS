import React from "react";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const Tasklist = ({data}) => {
	return (
		<div
			id="Tasklist"
			className="h-[55%] flex overflow-x-auto flex-nowrap items-center justify-start gap-5 w-full py-5  mt-10">
				{data.tasks.map((elem,idx)=>{
					if(elem.newTask){
						return <AcceptTask key={idx} data={elem}/>
					}
					if(elem.completed){
						return <CompleteTask key={idx} data={elem}/>
					}
					if(elem.failed){
						return <FailedTask key={idx} data={elem}/>
					}
					if(elem.active){
						return <NewTask key={idx} data={elem}/>
					}

				})}
		</div>
	);
};

export default Tasklist;
