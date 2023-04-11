import { Profiler, useState } from "react"
import styled, { css } from 'styled-components'

export const SCTodo = () => {
  const [todo, setTodo] = useState<string[]>([]);
  const handleClick = () => {
    setTodo([...todo, todo.length.toString()]);
  }
  return (
    <Profiler id="styled-components" onRender={(id, phase, actualDuration, baseDuration, startTime, commitTime, intersections) => {
      console.log(`${id}: `, {
        id, phase, actualDuration, baseDuration, startTime, commitTime, intersections
      })
    }}>
      <STitle>Styled components Light Todo List</STitle>
      <SContainer>
        <SAddBtn onClick={handleClick}>Добавить запись</SAddBtn>
        {todo.map((item) => <SSpan isEven={Number(item) % 2 === 0}>{item}</SSpan>)}
      </SContainer>
    </Profiler>
  )
}


const SContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const STitle = styled.h1`
`;

const SAddBtn = styled.button`
  width: 200px
`

const SSpan = styled.span<{ isEven: boolean }>(
  ({ isEven }) => css`
  width: 100px;
  border: ${isEven ? "red" : "green"};
  background: ${isEven ? "pink" : "red"};
  color:  ${isEven ? "black" : "white"}
  padding: 5px;
  margin: 10px;
  text-align: center;
`
)
