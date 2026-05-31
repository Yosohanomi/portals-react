import React from 'react'
import styles from './testModal.module.css'
import { createPortal } from 'react-dom'

export default function TestModal({children}) {
    const container = document.getElementById("modal")
    return createPortal(
            <div className={styles.modal}>
                <h2>{children}</h2>
            </div>,
            container
    );
}
