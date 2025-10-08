// 1.2
// const Header=(props)=>{
//   return(
//     <h1>{props.course}</h1>
//   )
// }

// const Part=(props)=>{
//   return(
//     <p>
//       {props.part} {props.exercises}
//     </p>
//   )
// }

// const Content=(props)=>{
//   return(
//     <>
//       <Part part={props.part1} exercises={props.part1}/>
//       <Part part={props.part2} exercises={props.part2}/>
//       <Part part={props.part3} exercises={props.part3}/>
//     </>
//   )
// }

// const Total=(props)=>{
//   return(
//     <p>Total of exercises: {props.exercises1+props.exercises2+props.exercises3}</p>
//   )
// }

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
//     <div>
//       <Header course={course}/>
//       <Content 
//         part1={part1} exercises1={exercises1}
//         part2={part2} exercises2={exercises2}
//         part3={part3} exercises3={exercises3}
//       />
//       <Total
//         exercises1={exercises1}
//         exercises2={exercises2}
//         exercises3={exercises3}
//       />
//     </div>
//   )
// }

1.3
const Header=(props)=>{
  return(
    <h1>{props.course}</h1>
  )
}

const Part=(props)=>{
  return(
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Content=(props)=>{
  return(
    <>
      <Part part={props.part1}/>
      <Part part={props.part2}/>
      <Part part={props.part3}/>
    </>
  )
}

const Total=(props)=>{
  return(
    <p>
      Total of exercises: {props.part1.exercises+props.part2.exercises+props.part3.exercises}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1={
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2={
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3={
    name: 'State of a component',
    exercises: 14
  }
  
  return (
    <>
      <Header course={course}/>
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
      />
      <Total
        part1={part1}
        part2={part2}
        part3={part3}
      />
    </>
  )
}
export default App