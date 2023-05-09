import { useState } from "react"
export default function useLocalStorage(key, initialValue) {
  const [localStorageValue, setLocalStorageValue] = useState(() => getLocalStorageValue(key, initialValue))

  const setValue = (value) => {
    // console.log(value)

    //check if fuction
    const valueToStore = value instanceof Function ? value(localStorageValue) : value
    // set to state
    setLocalStorageValue(value)
    // set to localstorage 
    localStorage.setItem(key, JSON.stringify(valueToStore))
  }
  return [localStorageValue, setValue]
  
} 
const getLocalStorageValue = ((key, initialValue) => {
  const itemFromStorage = localStorage.getItem(key)
  return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue
})
