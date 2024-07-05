import style from './style.module.css'

function TodoHeader() {

  return (
   <div className={style.todoHeader}>
    <div className={style.todoHeaderText}>
        <h1>
            TODO LIST
        </h1>
    </div>
   </div>
  )
}

export default TodoHeader
