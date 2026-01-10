import { modalState } from '../stores/modal.store'
import { allTask } from '../stores/todoList.store'
import { useEffect, useState } from 'react'

export default function ModalChangeTask() {
  const [title, setTitle] = useState<string>('')
  const [text, setText] = useState<string>('')
  const [submitted, setSubmitted] = useState(false)

  const modalChangeTask = modalState((state) => state.modalChangeTask)
  const changeTask = allTask((state) => state.changeTask)
  const finishChangeTask = modalState((state) => state.finishChangeTask)
  const index = modalState((state) => state.index)
  const tasks = allTask((state) => state.tasks)
  const task = tasks.find((e) => e.id == index)

  const isTitleInvalid = submitted && title.trim().length === 0
  const isTextInvalid = submitted && text.trim().length === 0

  const onSubmitChangeTask = () => {
    if (title.length === 0 || text.length === 0) {
      setSubmitted(true)
      return
    }
    changeTask(index, title, text)
    setSubmitted(false)
    finishChangeTask()
  }

  useEffect(() => {
    if (!task) return
    setTitle(task.title)
    setText(task.text)
  }, [task])

  return (
    <div
      className=" flex justify-center w-full h-full opacity-100 z-30 absolute"
      onClick={() => {
        modalChangeTask(-1)
      }}
    >
      <div
        className=" bg-gray-300 mt-[10px] py-[20px] px-[45px] border border-black rounded-lg w-[500px] flex flex-col items-center h-fit"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className=" text-center text-[30px] font-medium">Change Task</h3>
        <div className=" mt-[24px] flex">
          <label htmlFor="titleID" className=" text-[20px] font-medium">
            Title :
          </label>
          <input
            id="titleID"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className=" w-[260px] ml-3 border border-black p-[4px] rounded-md"
          />
        </div>
        {isTitleInvalid && <p className=" text-red-700">Required</p>}
        <div className=" mt-[25px] flex ">
          <label htmlFor="textID" className=" text-[20px] font-medium mr-3 ">
            Text :
          </label>
          <textarea
            id="textID"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className=" w-[260px] h-auto min-h-[120px] p-4 border border-black rounded-md   "
          ></textarea>
        </div>
        {isTextInvalid && <p className=" text-red-700">Required</p>}
        <div className=" flex justify-center mt-[25px]">
          <button
            className="border border-black rounded-md w-[130px] px-[4px] py-[3px] text-[18px] hover:text-white bg-gray-700 hover:bg-gray-800"
            onClick={(e) => {
              e.stopPropagation()
              onSubmitChangeTask()
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  )
}
