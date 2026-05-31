import React, { useState } from 'react'
import styles from './mainComponent.module.css'
import TestModal from '../modals/TestModal'
export default function MainComponent() {
    const [showModal, setShowModal] = useState(false)
    const handleClick = () => {
        setShowModal(prev => prev? false : true)
    }
  return (
    <div className={styles.container}>
        <h1>Main component</h1>
        {showModal && <TestModal>Hello</TestModal>}
        <button onClick={handleClick}>Show modal</button>
    </div>
  )
}
