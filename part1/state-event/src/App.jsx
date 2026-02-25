import{useState} from 'react'

// ------------------PART 1.c------------------
// const Display= ({counter})=>{
//     return(
//       <>{counter}
//       </>
//     )
//   }
// const Button = ({onClick, text})=>{
//   return(
//     <button onClick={onClick}>
//       {text}
//     </button>
//   )
// }
// const App = () => {
//   const [counter, setCounter]= useState(0)
//   console.log('rendering with counter value', counter)
//   const increaseByOne = ()=>{
//     setCounter(counter+1)
//     console.log('increasing, value before', counter)
//   }
//   const reset=()=>{
//     setCounter(0)
//     console.log('resetting to zero, value before', counter)
//   }
//   const decreaseByOne=()=>{
//     setCounter(counter-1)    
//     console.log('decreasing, value before', counter)
//   }

  
//   console.log('rendering...', counter)

//   return(
//     <>
//     <Display counter={counter}/>
//     <Button onClick={increaseByOne}
//     text='plus'></Button>
//     <Button onClick={decreaseByOne}
//     text='minus'/>
//     <Button onClick={reset} text='reset'/>
//     </>
//   )

// }
// export default App



// ------------------PART 1.d------------------
// const History=(props)=>{
//   if(props.allClicks.length===0){
//     return(
//       <div>the app is used by pressing the buttons</div>
//     )
//   }
//   return(
//     <div>button pressed history: {props.allClicks.join(' - ')}</div>
//   )
// }

// const Button=({onClick, text})=><button onClick={onClick}>{text}</button>

// const App=()=>{
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])
//   const [total, setTotal] = useState(0)
//   const [value, setValue] = useState(0)

//   const handleLeftClick=()=>{
//       setAll(allClicks.concat('L'))
//       setLeft(left+1)
//       const updatedLeft=left+1
//       setLeft(updatedLeft)
//       setTotal(updatedLeft+right+value)
//   }
//   const handleRightClick = () =>{
//     setAll(allClicks.concat('R'))
//     setRight(right+1)
//     const updatedRight=right+1
//     setRight(updatedRight)
//     setTotal(updatedRight+left+value)
//   }

//   const addValue=(val)=>()=>{
//     console.log('value now: ',val)
//     const updatedVal=value+val
//     setValue(updatedVal)
//     setTotal(updatedVal+left+right)
//   }

//   debugger //pause the execution of your application code in the Chrome developer console's debugger

//   return(
//     <>
//     {left}
//     {/* <button onClick={handleLeftClick}>left</button>
//     <button onClick={handleRightClick}>right</button> */}
//     <Button onClick={handleLeftClick} text='left'/>
//     <Button onClick={handleRightClick} text='right'/>
//     {right}
//     <br/>
//     {value}
//     <Button onClick={addValue(2000)} text='add 2000'/>
//     <p>total: {total}</p>
//     <History allClicks={allClicks}/>
//     </>
//   )
// }
// export default App



//------------------EXERCISES 1.6-1.12------------------

const Button=({onClick, text})=><button onClick={onClick}>{text}</button>

const StatisticLine=({text,value})=>{
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}


const Statistics=({good,neutral,bad})=>{
  const total=good+neutral+bad
  if (total===0){
      return <p>No feedback given</p>
  }
  const average = (good-bad)/total
  const positive = good/total*100
  return(
    <>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text='total' value={total}/>
      <StatisticLine text='average' value={average}/>
      <StatisticLine text='positive' value={positive+"%"}/>
    </> 
  )
}

const App=()=>{
  const [good, setGood]=useState(0)
  const [neutral, setNeutral]=useState(0)
  const [bad, setBad]=useState(0)
  
  return(
    <>
      <h1>give feedback</h1>
      <Button onClick={()=>setGood(good+1)} text='good'/>
      <Button onClick={()=>setNeutral(neutral+1)} text='neutral'/>
      <Button onClick={()=>setBad(bad+1)} text='bad'/>
      <br/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}
export default App

