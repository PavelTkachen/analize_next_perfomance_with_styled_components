import { Profiler, useState } from "react"
import styled, { css } from 'styled-components'

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
      <STitle>Styled components Light Todo List</STitle>
      <SContainer>
        <SAddBtn onClick={handleClick}>Добавить запись</SAddBtn>
        {todo.map((item) => <SSpan key={item}>{item}</SSpan>)}
      </SContainer>
      <SContainerRow>
        {getRandomMsg().map(item => <SSpan key={item.id}>{item.id}</SSpan>)}
      </SContainerRow>
    </>
  )
}


const SContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const SContainerRow = styled.div`
  display: flex;
  flex-wrap: wrap
`

const STitle = styled.h1`
`;

const SAddBtn = styled.button`
  width: 200px;
`

const SSpan = styled.span(
  () => css`
  width: 100px;
  border: green;
  background: red;
  color: white;
  padding: 5px;
  margin: 10px;
  text-align: center;
`
)
