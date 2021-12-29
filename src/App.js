function App() {
  const par = document.createElement('p');
  par.textContent = 'This is also visible!';
  document.getElementById('root').append(par);
  return (
    <div>
        <h2>
          Let's get started!
        </h2>
        <p>This is also visible!</p>
        {/* <p>This is also visible!</p> */}
    </div>
  );
}

export default App;
