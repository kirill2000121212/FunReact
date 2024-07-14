import ReactDOM from 'react-dom/client'
import './main.css'
import Todo from "./components/todo/Todo.tsx";
import { Provider } from 'react-redux'
import { store } from './store/store.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
<Provider store={store}>
    <Todo/>
</Provider>
)

