import React from 'react';
import styled from 'styled-components'

const TaskLi = styled.li`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin-bottom: 5px;
  background: #fff;
  width: 100%;
  min-height: 48px;
  padding: 4px 10px;
  padding-top: 7px;
  border: 1px solid #ebedf0;
  border-radius: 3px;
  list-style: none;
  z-index: 1;
  transition: all 0.2s linear;
  box-sizing: border-box;  
`
const TaskWrapper = styled.div`
  display: flex;
  align-items: center;
`

const TaskA = styled.a`
  height: 20px;
  width: 20px;
  min-width: 20px;
  padding: 0px;
  border-radius: 3px;
  margin-right: 7.5px;
  border: none;
  display: flex;
  justify-content: center;
  background: #eee;
  transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;  

  &:hover {
    background: #13cb73;
  }
`

const EditSVG =styled.svg`
  height: 12px;
  width: 12px;
  fill: #a9a9a9;
`

const CheckIcon = styled.i`
  color: #fff;
  font-size: 12px;
  line-height: 20px;
  transition: opacity 0.2s ease-in-out;
  font-style: inherit;
    &::before {
      font-family: 'Material Icons';
      content: "check";    
    }
`

const InputEdit = styled.div`
  flex-grow: 1;
  overflow: auto;
  align-items: center;
  position: relative;
  width: 100%;
  display: flex;
`

const Input = styled.input`
  max-width: 75%;
  color: #505050;
  font-size: 15px;  
  display: none;
  height: 30px;
  line-height: 20px;
  /* font-size: 14px;
  color: #1b2733; */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  box-shadow: none;
  padding: 0;
  cursor: text;  
`

const Span = styled.span`
  color: #505050;
  font-size: 15px;
  max-width: 84%;
  min-width: 30px;
  line-height: 30px;
  display: inline-block;
  /* font-size: 14px;
  color: #1b2733; */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: default;
`

const TaskItem = props => (
  <TaskLi>
  <TaskWrapper>
    <TaskA>
      <CheckIcon className="fui-check" />
    </TaskA>
    <InputEdit>
    {/* display noneで制御する */}
      <Input type="text" value="auto bundle update" />
      <Span className="inputEdit-name" tooltip="" data-original-title="auto bundle update ">auto bundle update </Span>
      <span className="inputEdit-edit inputEdit-icon js-inputEdit-edit ng-star-inserted">
        <EditSVG className="inputEdit-edit-icon" focusable="false" role="presentation" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M432 0c44.182 0 80 35.817 80 80 0 18.01-5.955 34.629-16 48l-32 32L352 48l32-32c13.371-10.045 29.989-16 48-16zM32 368L0 512l144-32 296-296L328 72 32 368zm325.789-186.211l-224 224-27.578-27.578 224-224 27.578 27.578z"></path>
        </EditSVG></span>
      <span className="inputEdit-action inputEdit-action--cancel ng-star-inserted">
        <EditSVG className="inputEdit-action-icon" focusable="false" height="512" id="Layer_1" role="presentation" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path className="st0" d="M403.1 108.9c-81.2-81.2-212.9-81.2-294.2 0s-81.2 212.9 0 294.2c81.2 81.2 212.9 81.2 294.2 0s81.2-213 0-294.2zm-12.3 281.9c-74.3 74.3-195.3 74.3-269.6 0-74.3-74.3-74.3-195.3 0-269.6s195.3-74.3 269.6 0c74.4 74.3 74.4 195.3 0 269.6z"></path><path className="st0" d="M340.2 160l-84.4 84.2-84-83.8-11.8 11.8 84 83.8-84 83.8 11.8 11.8 84-83.8 84.4 84.2 11.8-11.8-84.4-84.2 84.4-84.2z"></path>
        </EditSVG></span>
      <span className="inputEdit-action inputEdit-action--save ng-star-inserted">
        <EditSVG className="inputEdit-action-icon" focusable="false" height="512" role="presentation" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="M340.1 177.3L215.3 303l-47.2-47.2-17.8 17.8 56 56c2.5 2.5 5.9 4.5 8.9 4.5s6.3-2 8.8-4.4l133.7-134.4-17.6-18z"></path><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm0 398.7c-105.1 0-190.7-85.5-190.7-190.7 0-105.1 85.5-190.7 190.7-190.7 105.1 0 190.7 85.5 190.7 190.7 0 105.1-85.6 190.7-190.7 190.7z"></path>
        </EditSVG></span>
    </InputEdit>
    <input-due-date className="dueDate dueDate--task">
      <div className="dueDate-badge ng-star-inserted"><span className="dueDate-badge-month">DUE</span>
      <span className="dueDate-badge-day ng-star-inserted"><svg className="dueDate-badge-day-icon" focusable="false" height="14" role="presentation" viewBox="0 0 11 14" width="11" xmlns="http://www.w3.org/2000/svg"><path d="M11 5.75v1.5q0 .312-.219.531T10.25 8H7v3.25q0 .312-.219.531T6.25 12h-1.5q-.312 0-.531-.219T4 11.25V8H.75q-.312 0-.531-.219T0 7.25v-1.5q0-.312.219-.531T.75 5H4V1.75q0-.312.219-.531T4.75 1h1.5q.312 0 .531.219T7 1.75V5h3.25q.312 0 .531.219T11 5.75z"></path></svg></span></div>
    </input-due-date>
  </TaskWrapper>
  <div className="event-row event-row-category">
    <event-badge-external className="event-badge-external">
    </event-badge-external>
  </div>
</TaskLi>
)

export default TaskItem;