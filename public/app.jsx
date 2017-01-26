import React from 'react';
import ReactDOM from 'react-dom';

var obh1 = {
  name: 'ankit',
  hello: 'cool'
}

var obh2 = {
  nameo: 'cool',
  ...obh1
}
console.log(obh2);
var name = "Ankit";
ReactDOM.render(
    <div><h1>Hello React</h1></div>, document.getElementById('app'));
