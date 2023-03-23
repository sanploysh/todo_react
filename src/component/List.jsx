function List(props) {
    // const list : any[] = [];
    const list = props.todo;
    const item = props.item;
    const itemClass = 'text-decoration-line-through';

    const handleComplete = (e,id) => {
        if(e.target.checked == true) {
            props.setItem((current) => [...current, id]);
        } else {
            props.setItem(item.filter(element => element !== id));
        }
    }

    const handleDelete = (id,e) => {
        e.preventDefault()
        e.stopPropagation()

        props.todoList(list.filter(element => element.id !== id));
        props.setItem(item.filter(element => element !== id));
    }

    return (
        <div className="mt-4">
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {
                        list.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{data.id}</th>
                                    <td className={item.includes(data.id) ? itemClass : ''}>{data.description}</td>
                                    <td>
                                        <input type="checkbox" onChange={e => {handleComplete(e, data.id)}} checked={item.includes(data.id)} />
                                        {
                                            item.includes(data.id) ? <i className="fa fa-trash text-danger ml-3" style={{cursor: 'pointer'}} onClick={e => {handleDelete(data.id, e)}}></i> : ''
                                        }
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default List;