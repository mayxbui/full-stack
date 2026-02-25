// ------------------EXERCISES 1.6-1.12------------------

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