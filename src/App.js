import React from 'react';
import List from './List';
import './App.css';

App.defaultProps = {
  store: {
    lists: []
  } 
}

function App(prop) {
  console.log(prop)
  return (
    <main className='App'>
      <header className='App-header'>
        <h1>Trelloyes!</h1>
      </header>
      <div className='App-list'>
        {prop.store.lists.map(list => {
          console.log(list);
          return (
          <List
          key= {list.id}
          header= {list.header}
          cards= {list.cardIds.map(id => prop.store.allCards[id])}
          />
        )})}
      </div>
    </main>
  );
}



export default App;
