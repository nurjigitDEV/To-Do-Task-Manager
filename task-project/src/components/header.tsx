import Button from '../utils/button'
import { modalState } from '../stores/modal.store'

export default function Header() {
  const modalAddTask = modalState((state) => state.modalAddTask)
  return (
    <header className=" max-w-[1300px] w-full h-[100px] pt-[20px] flex justify-between items-center mx-[120px]">
      <div></div>
      <div className="  flex justify-center">
        <h1 className=" text-[48px] font-bold">Todo List</h1>
      </div>
      <div className=" flex items-center  justify-end pr-[15px] ">
        <Button
          text={'Add Task'}
          bgHover="hover:bg-black"
          onClick={() => modalAddTask()}
        />
      </div>
    </header>
  )
}
