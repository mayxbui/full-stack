const Course=({course})=>{
    const total = course.parts.reduce((sum,part)=>{
        console.log("what's happening",sum,part)
        return sum+part.exercises
    },0)

    return(
      <>
        <h1>{course.name}</h1>
        <p>
            {course.parts.map(part=>(
                <p key={part.id}>{part.name} {part.exercises}</p>
            ))}
        </p>
        <b>total of {total} exercises</b>
      </>
    )
}

export default Course