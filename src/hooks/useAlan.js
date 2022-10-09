import { useEffect } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'


export default function useAlan() {
  
  useEffect(() => {
    alanBtn({

        top: "15px",
        left: "15px",
        key: process.env.REACT_APP_ALAN_KEY,
        onCommand: ({ command }) => { console.log(command) }
    })
  }, [])
  
  return null
}
