import style from './style.module.css'
import {Checkbox, ConfigProvider} from "antd";
import {Button} from "antd"
import DeleteIcon from '@mui/icons-material/Delete';
import {FC} from "react";
import {TYPE_TODO_ITEM} from "./type.ts";

const TodoItem: FC<TYPE_TODO_ITEM> = ({date, title,deleteTodo}) => {
    return (
        <div className={style.TodoItem}>
            <div className={style.TodoItemWrapper}>
                    <Checkbox />
                <div className={style.TodoItemWrapperText}>
                    <h2>{date}</h2>
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
                                defaultColor: 'white',
                                defaultHoverBorderColor: 'none',
                                defaultHoverColor: '#130526'
                            },
                        },
                    }}>
                    <Button
                        className={style.trash}
                        icon={<DeleteIcon sx={{fontSize: 30}}/>}
                        onClick={deleteTodo}
                    />
                </ConfigProvider>
        </div>
    );
};

export default TodoItem;