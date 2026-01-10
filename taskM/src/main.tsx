import Header from './components/header'
import ListTask from './components/ListTask'
import ModalAddTask from './components/modalAddTask'
import ModalChangeTask from './components/modalChangeTask'
import { modalState } from './stores/modal.store'

export default function MainPage() {
  const modalAdd = modalState((state) => state.modalAdd)
  const modalChange = modalState((state) => state.modalChange)
  let modalStyle

  if (modalAdd == true) {
    modalStyle = ' opacity-40 '
  } else {
    modalStyle = ' opacity-100'
  }
  return (
    <div className="flex flex-col items-center min-h-screen">
      {modalAdd && <ModalAddTask />}
      {modalChange && <ModalChangeTask />}
      <Header />
      <ListTask />
    </div>
  )
}
