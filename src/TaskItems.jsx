import React from 'react';
import styled from 'styled-components'
import TaskItem from './TaskItem'


const TaskUL = styled.ul`
  position: relative;
  z-index: 0;
  padding: 15px 0 30px 0;
  min-height: 82px;
  margin-top: 0;
  padding-top: 0;  
`

const TitleWrapper = styled.div`
  margin-top: 2.5px;
  margin-bottom: 7.5px;
  display: flex;
  align-items: center;
  height: 30px;
  width: calc(100% - 32px);
  position: relative;
`

const ProgressBar = styled.div`
  margin-top: 0px;
  margin-bottom: 10px;
  height: 2px;
  width: 100%;
  overflow: hidden;
  box-shadow: none;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.06);
`

const ULWrapper = styled.div`
  margin-right: 30px;
  margin-left: 30px;
  width: 260px;
  min-width: 260px;
  height: 100%;
  max-height: 100%;
  margin: 0 15px;
  padding: 0px;  
`

const Span = styled.span`
  font-family: 'avenir', sans-serif;
  font-size: 17px;
  /* color: #637282; */
  margin: 0px;
  max-width: 84%;
  min-width: 30px;
  line-height: 30px;
  display: inline-block;
  color: #1b2733;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: default;
`

export const TaskItems = props => (
  <ULWrapper>
    <TitleWrapper>
      <Span>Title</Span>      
    </TitleWrapper>
    <ProgressBar />
    <TaskUL>
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
    </TaskUL>
  </ULWrapper>
)

export default TaskItems;