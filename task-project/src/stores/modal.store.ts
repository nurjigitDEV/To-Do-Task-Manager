import { create } from 'zustand'

interface IModal {
  modalAdd: boolean
  modalAddTask: () => void
  index: number | null
  modalChange: boolean
  modalChangeTask: (taskIndex: number | null) => void
  finishChangeTask: () => void
}

export const modalState = create<IModal>((set) => ({
  modalAdd: false,
  modalAddTask: () => {
    set((state) => ({ modalAdd: !state.modalAdd }))
  },
  index: null,
  modalChange: false,
  modalChangeTask: (taskIndex) => {
    set(() => ({ index: taskIndex }))
    set((state) => ({ modalChange: !state.modalChange }))
  },
  finishChangeTask: () => {
    set(() => ({ index: null }))
    set((state) => ({ modalChange: !state.modalChange }))
  },
}))
