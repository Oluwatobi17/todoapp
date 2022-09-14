import React, { useRef } from "react";

const NewTodoForm: React.FC<{onAdd: (task: string | undefined)=> void}> = (props) =>{
    const taskRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: React.FormEvent) =>{
        event.preventDefault();
        if(taskRef.current?.value.length===0) return;
        props.onAdd(taskRef.current?.value);
        if(taskRef.current) taskRef.current.value = "";
    }

    return <form onSubmit={handleSubmit}>
        <input type="text" id="task" className="taskinput" ref={taskRef} placeholder="Enter New Task" />

        <input type="submit" className="button" value="Add"/>
    </form>
}

export default NewTodoForm;