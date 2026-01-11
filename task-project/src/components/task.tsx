import { modalState } from '../stores/modal.store'
import { allTask } from '../stores/todoList.store'
import type { TTask } from '../types/taskType'
// import { TTask } from '../types/taskType'
import Button from '../utils/button'

export default function Task({ params }: { params: TTask }) {
  const delate = allTask((state) => state.delateTask)
  const modalChangeTask = modalState((state) => state.modalChangeTask)

  const onClickChange = (id: number) => {
    modalChangeTask(id)
  }

  const onClickDelate = (id: number) => {
    delate(id)
  }
  return (
    <li className=" flex justify-between items-center border border-black rounded-lg p-[15px]">
      <h4 className=" text-[18px] font-bold shrink-0 truncate w-[15%] ">
        {params.title}
      </h4>
      <div className=" w-[70%] px-[39px] ">
        <p className="line-clamp-2 truncate">{params.text}</p>
      </div>
      <div className=" flex items-center justify-end w-[15%] ">
        <Button
          text="Change"
          bg="bg-cyan-500/80"
          bgHover="bg-cyan-500"
          onClick={() => onClickChange(params.id)}
        />
        <Button
          text="Delate"
          bg="bg-red-500/80 ml-[20px]"
          bgHover="bg-red-500"
          onClick={() => onClickDelate(params.id)}
        />
      </div>
    </li>
  )
}
