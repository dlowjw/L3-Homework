import React from 'react'

// === data type, == loose comparison '2' == 2
// ===

const EvenNumbers = () => {
  const nums = [1, 2, 3, 4, 5, 6];
  const evenNumbers = nums.filter(num  => num % 2 === 0);

  return (
    <div>
      {evenNumbers.map(num => <div>{num}</div>)}
    </div>
  )
}

// filter out for only completed todos, only show learn react, cook dinner

const CompletedTodos = () => {
  const todos = [
    { id: 1, task: "Learn React", completed: true },
    { id: 2, task: "Do laundry", completed: false },
    { id: 3, task: "Cook dinner", completed: true }
  ];

  const completedTodos = todos.filter((todo) => !todo.completed )

  return (
    <div>{completedTodos.map(todo => <div>{todo.task}</div>)}</div>
  )
}

// if it includes a letter (decide this later) return any word that contains that letter

const SearchFilter = () => {
  const fruit = ["apple", "banana", "grape", "orange"];
  const filteredFruit = fruit.filter((f) => f.includes('o'))

  return (
    <div>
      {filteredFruit.map(((f) => <div>{f}</div>))}
    </div>
  )

}

const Filter = () => {
  return (
    <div>
      <EvenNumbers />
      <CompletedTodos />
      <SearchFilter />
    </div>
  )
}

export default Filter;