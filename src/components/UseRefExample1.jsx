import { useRef } from "react"
export default function UseRefExample1() {
    const inputRef = useRef(null)
    const paraRef = useRef(null)

    const onSubmit = e =>{
        e.preventDefault()
        console.log(inputRef.current.value)
        inputRef.current.value = 'Hello'
        inputRef.current.style.backgroundColor = 'red'
        paraRef.current.innerText ='GoodBye'
    }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label> <br />
        <input type="text" ref={inputRef} id='name' /><br />
        <button type="submit">Submit</button>
        <p onClick={()=>inputRef.current.focus()} ref={paraRef}>Hello</p>
      </form>
    </div>
  )
}
