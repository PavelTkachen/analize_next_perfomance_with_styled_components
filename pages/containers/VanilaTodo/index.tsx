import { Profiler, useState } from "react"
import classes from '../../../styled.css'

const getRandomMsg = () => {
  return Array.from({ length: 1000 }, (_, item) => ({ id: item }))
}

export default () => {
  const [todo, setTodo] = useState<string[]>([]);
  const handleClick = () => {
    setTodo([...todo, todo.length.toString()]);
  }
  return (
    <>
      <h1 className={classes.title}>Vanilla extract Light Todo List</h1>
      <div className={classes.container}>
        <button className={classes.add_button} onClick={handleClick}>Добавить запись</button>
        {todo.map((item) => <span key={item} className={classes.item_text}>{item}</span>)}
      </div>
      <div className={classes.container_row}>
        {getRandomMsg().map(item => <span key={item.id} className={classes.item_text}>{item.id}</span>)}
      </div>
    </>
  )
}
