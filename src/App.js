import ExpenseItem from './components/ExpenseItem';

function App() {
  const par = document.createElement('p');
  par.textContent = 'This is also visible!';
  document.getElementById('root').append(par);
  return (
    <div>
        <h2>
          Let's get started!
        </h2>
        <ExpenseItem></ExpenseItem>
        {/* <p>This is also visible!</p> */}

    </div>
  );
}

export default App;
