import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/';
import App from './assets/routes/App';

const initialState = {
  "user": {},
  "misPrendas": [],
  "prendasFavoritas": [
    {
      "id": 30,
      "title": "Polera",
      "photo": "https://www.dhresource.com/0x0/f2/albu/g6/M00/06/A1/rBVaSFqt4biANy6hAAKzwzg2WTs423.jpg",
      "description": "Vestibulum ac est lacinia nisi venenatis tristique",
      "precio": 10
    },
    {
      "id": 31,
      "title": "Polera",
      "photo": "https://www.dhresource.com/0x0/f2/albu/g6/M00/06/A1/rBVaSFqt4biANy6hAAKzwzg2WTs423.jpg",
      "description": "Vestibulum ac est lacinia nisi venenatis tristique",
      "precio": 10
    },
    {
      "id": 32,
      "title": "Polera",
      "photo": "https://www.dhresource.com/0x0/f2/albu/g6/M00/06/A1/rBVaSFqt4biANy6hAAKzwzg2WTs423.jpg",
      "description": "Vestibulum ac est lacinia nisi venenatis tristique",
      "precio": 10
    },
   ],
  "prendasNuevas": [
    {
      "id": 40,
      "title": "Polera",
      "photo": "https://www.dhresource.com/0x0/f2/albu/g6/M00/06/A1/rBVaSFqt4biANy6hAAKzwzg2WTs423.jpg",
      "description": "Vestibulum ac est lacinia nisi venenatis tristique",
      "precio": 10
    },
    {
      "id": 41,
      "title": "Polera",
      "photo": "https://www.dhresource.com/0x0/f2/albu/g6/M00/06/A1/rBVaSFqt4biANy6hAAKzwzg2WTs423.jpg",
      "description": "Vestibulum ac est lacinia nisi venenatis tristique",
      "precio": 10
    },
    {
      "id": 42,
      "title": "Polera",
      "photo": "https://www.dhresource.com/0x0/f2/albu/g6/M00/06/A1/rBVaSFqt4biANy6hAAKzwzg2WTs423.jpg",
      "description": "Vestibulum ac est lacinia nisi venenatis tristique",
      "precio": 10
    },
   ],
  "prendasSup": [
    {
      "id": 50,
      "title": "Polera",
      "photo": "https://www.dhresource.com/0x0/f2/albu/g6/M00/06/A1/rBVaSFqt4biANy6hAAKzwzg2WTs423.jpg",
      "description": "Vestibulum ac est lacinia nisi venenatis tristique",
      "precio": 10
    },
   ],
  "prendasInferior": [
    {
      "id": 60,
      "title": "Polera",
      "photo": "https://www.dhresource.com/0x0/f2/albu/g6/M00/06/A1/rBVaSFqt4biANy6hAAKzwzg2WTs423.jpg",
      "description": "Vestibulum ac est lacinia nisi venenatis tristique",
      "precio": 10
    },
  ],
  "prendas": [
    {
      "id": 1,
      "title": "Polera",
      "photo": "https://www.dhresource.com/0x0/f2/albu/g6/M00/06/A1/rBVaSFqt4biANy6hAAKzwzg2WTs423.jpg",
      "description": "Vestibulum ac est lacinia nisi venenatis tristique",
      "precio": 10
    },
    {
      "id": 2,
      "title": "Polera",
      "photo": "https://www.dhresource.com/0x0/f2/albu/g6/M00/06/A1/rBVaSFqt4biANy6hAAKzwzg2WTs423.jpg",
      "description": "Vestibulum ac est lacinia nisi venenatis tristique",
      "precio": 10
    },
    {
      "id": 3,
      "title": "Polera",
      "photo": "https://www.dhresource.com/0x0/f2/albu/g6/M00/06/A1/rBVaSFqt4biANy6hAAKzwzg2WTs423.jpg",
      "description": "Vestibulum ac est lacinia nisi venenatis tristique",
      "precio": 10
    },
    {
      "id": 4,
      "title": "Polera",
      "photo": "https://www.dhresource.com/0x0/f2/albu/g6/M00/06/A1/rBVaSFqt4biANy6hAAKzwzg2WTs423.jpg",
      "description": "Vestibulum ac est lacinia nisi venenatis tristique",
      "precio": 10
    },
    
  ]
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('app')
);