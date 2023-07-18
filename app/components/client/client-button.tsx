'use client'

import React, { use } from 'react'
import { ServerData } from '../context'
import styles from './client-button.module.css'
import { ClientData } from './client-context'

export function ClientButton() {
  const [clicks, setClicks] = React.useState(0)
  const clientData = React.useContext(ClientData)
  
  // @ts-ignore type is wrong
  const serverData = use(ServerData)
  
  console.log({clientData, serverData});
  
  return (
    <div className={styles.wrapper}>
      <p>serverData: {serverData}</p>
      <p>clientData: {clientData}</p>
      <button onClick={() => {
        setClicks(clicks + 1)
      }}>click me ({clicks})</button>
    </div>
  )
}
