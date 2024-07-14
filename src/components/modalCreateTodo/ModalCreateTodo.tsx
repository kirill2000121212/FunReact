import {Input, ConfigProvider} from "antd";
import {useCreateTodoMutation} from "../../store/todosApi.tsx";
import {FC, useState} from "react";
import {v4 as uuidv4} from 'uuid';
import { Modal } from "antd";
import {TYPE_MODAL} from "./type.ts";


const ModalCreateTodo : FC<TYPE_MODAL> = ({isModalOpen,setIsModalOpen}) => {
    const [createTodo] = useCreateTodoMutation()
    const [inputValue,setInputValue] = useState('')

    const handleCreateTodo = {
        id: uuidv4(),
        title: inputValue,
        date: new Date().toLocaleDateString()
    }

    const handleOk = () => {
        createTodo({...handleCreateTodo})
        setInputValue('')
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <ConfigProvider
            theme={{
                components: {
                    Input: {
                        colorBorder: 'black',
                        colorBgContainer: 'none',
                    },
                },
            }}>
            <Modal
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                closable={false}
                okText='Создать'
                cancelText='Закрыть'
            >
                    <Input
                        placeholder='Че нада...'
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
            </Modal>
        </ConfigProvider>
    );
};

export default ModalCreateTodo;