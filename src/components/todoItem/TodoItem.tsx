import style from './style.module.css'
import Cross from '../../assets/img/cross-mark-button-svgrepo-com.svg'
import {Checkbox, ConfigProvider} from "antd";
import {Button} from "antd"

const TodoItem = ({id, title,deleteTodo}) => {

    return (
        <div className={style.TodoItem}>
            <div className={style.TodoItemWrapper}>
                    <Checkbox />
                <div className={style.TodoItemWrapperText}>
                    <h2>{id}</h2>
                    <hr/>
                    <p>{title}</p>
                </div>
            </div>
                <ConfigProvider
                    theme={{
                        components: {
                            Button: {
                                colorBorder: 'none',
                                colorBgContainer: 'none',
                            },
                        },
                    }}>
                    <Button
                        icon={<img src={Cross} alt="Cross"/>}
                        onClick={deleteTodo}
                    />
                </ConfigProvider>
        </div>
    );
};

export default TodoItem;