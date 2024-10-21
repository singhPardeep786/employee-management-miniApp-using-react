import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
    console.log(data);
    
  return (
    <>
        <div id='tasklist' className='w-full h-[55%] flex items-center justify-start gap-5 flex-nowrap py-5 mt-10 rounded-xl overflow-x-auto'>
            {data.tasks.map((elem, index)=>{
                if(elem.active){
                    return <AcceptTask key={index} data = {elem} />
                }

                if(elem.new_task){
                    return <NewTask key={index} data = {elem} />
                }
                if(elem.completed){
                    return <CompleteTask key={index} data = {elem} />
                }
                if(elem.failed){
                    return <FailedTask key={index} data = {elem} />
                }
            })}
        </div>
    </>
  )
}

export default TaskList