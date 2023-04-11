import { Profiler, useState } from "react"

export const CssTodo = () => {
  const [todo, setTodo] = useState<string[]>([]);
  const handleClick = () => {
    setTodo([...todo, todo.length.toString()]);
  }
  return (
    <Profiler id="css" onRender={(id, phase, actualDuration, baseDuration, startTime, commitTime, intersections) => {
      console.log(`${id}: `, {
        id, phase, actualDuration, baseDuration, startTime, commitTime, intersections
      })
    }}>
      <h1>Css Light Todo List</h1>
      <div className="css-container">
        <button className="add_btn" onClick={handleClick}>Добавить запись</button>
        {todo.map((item) => <span className={Number(item) % 2 === 0 ? "list_item_pink" : "list_item_red"}>{item}</span>)}
      </div>
    </Profiler>
  )
}