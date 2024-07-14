import style from './style.module.css'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import RedoIcon from '@mui/icons-material/Redo';
import {Button, ConfigProvider} from "antd";
import ModalCreateTodo from "../modalCreateTodo/ModalCreateTodo.tsx";
import {useState} from "react";

function TodoHeader() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    return (
        <div className={style.todoHeader}>
            <h1>
                TODO LIST
            </h1>
            <div className={style.todoHeaderAddTodo}>
                <ConfigProvider
                    theme={{
                        components: {
                            Button: {
                                colorBorder: 'none',
                                colorBgContainer: 'none',
                                defaultColor: 'white',
                                defaultHoverBorderColor: 'none',
                                defaultHoverColor: '#e0305d'
                            },
                        },
                    }}>
                    <Button
                        onClick={showModal}
                        icon={<LibraryAddIcon sx={{fontSize: 40}}/>}
                    />
                </ConfigProvider>
                <h2>Добавь новую!</h2>
                <RedoIcon className={style.redoIcon}/>
            </div>
            <ModalCreateTodo isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        </div>
    )
}

export default TodoHeader
