/*
const App = () => { //create a const variable call App that assign to JS function () => {}
            // using arrow func to define func is call ECMAScript 6 (ES6)
  console.log('Hello from component')
  const now = new Date()
  const a=10
  const b=20
    return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  )
  // After compiling, our application looks like this:
  // return React.createElement(
  //   'div',
  //   null,
  //   React.createElement(
  //     'p', null, 'Hello Vite, it is ', now.toString()
  //   ),
  //   React.createElement(
  //     'p', null, a, ' plus ', b,' is ', a+b
  //   )
  // )
}
*/

const Hello=(props)=>{
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const name = 'May'
  const age = 20

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name = 'Brandon' age={20+3} />
      <Hello name = 'Trang' age ={age}/>
    </div>
  )
}

export default App //never delete this