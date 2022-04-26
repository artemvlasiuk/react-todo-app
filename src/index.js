import React from 'react';
import ReactDOM from 'react-dom/client';
import AppHeader from './components/app-header/app-header';
import SearchPanel from './components/search-panel/search-panel';
import ToDoList from './components/todo-list/todo-list';
import ItemStatusFilter from './components/item-status-filter/item-status-filter';
import './index.css';

const App = () => {

  const todoData = [
    {label: 'Drink Coffe', important: false, id: 1},
    {label: 'Make Awesome App', important: true, id: 2},
    {label: 'Have a lunch', important: false, id: 3}
  ];

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <ToDoList todos={todoData} />
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);