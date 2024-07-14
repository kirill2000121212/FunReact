import {Select} from "antd";

const SelectTodo = ({setSort}) => {
    const handleChange = (value : string) => {
        setSort(value)
    }

    return (
        <Select
            onChange={handleChange}
            style={{
                width: 600,
            }}
            defaultValue="date"
            options={[
                {value: 'date', label: 'По дате'},
                {value: 'alphabet', label: 'По алфавиту'},
            ]}
        >
        </Select>
    );
};

export default SelectTodo;