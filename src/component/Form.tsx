import { useState } from "react";

function Form(props: any) {
    const [detail, setDetail] = useState('');
    const handleToDo = (e: any) => {
        e.preventDefault();
        props.setTodo(detail);
        setDetail('');
    }
    return (
        <form onSubmit={handleToDo}>
            <div className="row">
                <div className="col-md-9">
                    <input className="form-control" type="text" value={detail} onChange={e => setDetail(e.target.value)} />
                </div>
                <div className="col-md-3">
                    <button className="btn btn-secondary">Add</button>
                </div>
            </div>
        </form>
    );
  }
  
  export default Form;
  