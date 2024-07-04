import style from './style.module.css'
import Cross from '../assets/img/cross-mark-button-svgrepo-com.svg'

const TodoItem = ({header,body}) => {
    return (
        <div className={style.TodoItem}>
            <input type="checkbox"/>
            <div>
                <h2>{header}</h2>
                <p>{body}</p>
            </div>
            <button>
                <img src={Cross} alt="Cross"/>
            </button>
        </div>
    );
};

export default TodoItem;