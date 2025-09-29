const parent = React.createElement('div', {id: 'child'}, [
    React.createElement('h1', {}, 'First child heading'),
    React.createElement('h2', {}, 'Second child heading'),
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);