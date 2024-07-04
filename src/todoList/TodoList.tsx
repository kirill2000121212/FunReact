import style from './style.module.css'
import TodoItem from "../todoItem/TodoItem.tsx";

const TodoList = () => {
    const todos = [
        {
            header: 'Влад крутой?',
            body: 'Надо узнать!'
        },
        {
            header: 'А кирюха крутой?',
            body: 'сомневаюсь но окэээээээй......'
        }
    ]

    return (
        <div className={style.TodoList}>
            {
                todos.map(({header,body})=>(
                    <TodoItem header={header} body={body}/>
                ))
            }
        </div>
    );
};

export default TodoList;