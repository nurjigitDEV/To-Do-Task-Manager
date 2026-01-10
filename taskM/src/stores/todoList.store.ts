// type ITodoPersistedState = {
//   lastID: number
//   tasks: ITask[]
// }

import { persist } from 'zustand/middleware'
import { create } from 'zustand'
import type { TTask } from '../types/taskType'

interface ITodo {
  lastID: number
  tasks: Array<TTask>
  addTask: (task: TTask) => void
  delateTask: (id: number) => void
  changeTask: (id: number | null, newTitle: string, newText: string) => void
}

export const allTask = create<ITodo>()(
  persist(
    (set) => ({
      lastID: 3,
      tasks: [
        { id: 0, title: 'to do 1', text: 'text 123456789' },
        { id: 1, title: 'to do 2', text: 'text 123456789' },
      ],
      addTask: (task) =>
        set((state) => ({
          lastID: state.lastID + 1,
          tasks: [...state.tasks, task],
        })),
      delateTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),
      changeTask: (id, newTitle, newText) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, title: newTitle, text: newText } : task
          ),
        })),
    }),
    {
      name: 'todoList',
      partialize: (state) => ({
        lastID: state.lastID,
        tasks: state.tasks,
      }),
    }
  )
)
