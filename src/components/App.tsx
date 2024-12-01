import { useState } from "react"

export default function Calculation() {
  const [value_1, setValue_1] = useState('')
  const [value_2, setValue_2] = useState('')
  const [result, setResult] = useState('')
  const hangleClick = (value_1 : string, value_2 : string) => {
      return setResult(String(Number(value_1) + Number(value_2)))
  }
  return (
    <>
      <div className="input">   
        <input value={value_1} onChange={event => setValue_1(event.target.value)} />
        <text> + </text>
        <input value={value_2} onChange={event => setValue_2(event.target.value)} />
        <text> = </text>
        <input value={result} />
      </div>
      <p className="button">
        <button onClick={() => hangleClick(value_1, value_2)}> Рассчитать </button>
      </p>
    </>
  )
}