import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal'
import './App.css';
import Login from "./containers/login/index";


const App = () => {
  const [open, setOpen] = useState(true);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <div>
      <Modal open={open} onClose={onCloseModal} >
        <Login onCloseModal={onCloseModal} />
      </Modal>

    </div>
  );
}



export default App;

