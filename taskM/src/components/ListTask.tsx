import Task from './task'
import { allTask } from '../stores/todoList.store'
import { modalState } from '../stores/modal.store'

export default function ListTask() {
  const modalAdd = modalState((state) => state.modalAdd)
  const tasks = allTask((state) => state.tasks)

  let modalStyle

  if (modalAdd == true) {
    modalStyle = ' opacity-40 '
  } else {
    modalStyle = ' opacity-100'
  }

  return (
    <main className=" max-w-[1300px] w-full flex-1 mx-[120px] relative">
      <div className={` mt-[20px] mb-[40px]  ${modalStyle}`}>
        <ul>
          {tasks.map((task) => (
            <Task key={task.id} params={task} />
          ))}
        </ul>
      </div>
    </main>
  )
}
