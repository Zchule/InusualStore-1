import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/';
import App from './assets/routes/App';
import poleraB from './assets/images/ropa/polera_blanca.png';
import poleraN from './assets/images/ropa/polera_negra.png';
import polera from './assets/images/ropa/polera2.png';
import chompa from './assets/images/ropa/polera_man.jpg';

const initialState = {
  "user": {},
  "selectedProduct": {},
  "selectedProducts": [],
  "misPrendas": [],
  "prendas": [
    {
      "id": 1,
      "title": "Chompa",
      "photo": poleraN,
      "description": "Vestibulum ac est lacinia nisi venenatis tristique",
      "precio": 10,
      "categories": ['nuevo', 'busos'],
      "gallery": [
        poleraB,
        poleraN,
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfz9RRV_MbxgA4spO3hqLlVkkSaEKPbd_ChvyqEEN6Sxe8imJv&s'
      ]
    },
    {
      "id": 100,
      "title": "Chompa tinto",
      "photo": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfz9RRV_MbxgA4spO3hqLlVkkSaEKPbd_ChvyqEEN6Sxe8imJv&s',
      "description": "Vestibulum ac est lacinia nisi venenatis tristique",
      "precio": 10,
      "categories": ['nuevo', 'trends', 'busos'],
      "gallery": [
        poleraB,
        poleraN,
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfz9RRV_MbxgA4spO3hqLlVkkSaEKPbd_ChvyqEEN6Sxe8imJv&s'
      ]
    },
    {
      "id": 101,
      "title": "Chompa femenino",
      "photo": 'https://images-na.ssl-images-amazon.com/images/I/51H5R60vkOL._SX569._SX._UX._SY._UY_.jpg',
      "description": "Vestibulum ac est lacinia nisi venenatis tristique",
      "precio": 10,
      "categories": ['nuevo', 'trends', 'busos'],
      "gallery": [
        poleraB,
        poleraN,
        'https://images-na.ssl-images-amazon.com/images/I/51H5R60vkOL._SX569._SX._UX._SY._UY_.jpg'
      ]
    },
    {
      "id": 102,
      "title": "Chompa femenino",
      "photo": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCUoPcto_KumEjy6pJbxYJrvjTVNuGEgY8cwljSoEIOEnBzTvE&s',
      "description": "Vestibulum ac est lacinia nisi venenatis tristique",
      "precio": 10,
      "categories": ['nuevo', 'trends', 'busos'],
      "gallery": [
        poleraB,
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCUoPcto_KumEjy6pJbxYJrvjTVNuGEgY8cwljSoEIOEnBzTvE&s',
        'https://images-na.ssl-images-amazon.com/images/I/51H5R60vkOL._SX569._SX._UX._SY._UY_.jpg'
      ]
    },
    {
      "id": 103,
      "title": "Chompa femenino",
      "photo": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpD77muCJZQo-dpJDwXj9lbInBs6_xYYygpL3MomA_d-xTmJHe&s',
      "description": "Vestibulum ac est lacinia nisi venenatis tristique",
      "precio": 10,
      "categories": ['nuevo', 'trends', 'busos'],
      "gallery": [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpD77muCJZQo-dpJDwXj9lbInBs6_xYYygpL3MomA_d-xTmJHe&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCUoPcto_KumEjy6pJbxYJrvjTVNuGEgY8cwljSoEIOEnBzTvE&s',
        'https://images-na.ssl-images-amazon.com/images/I/51H5R60vkOL._SX569._SX._UX._SY._UY_.jpg'
      ]
    },
    {
      "id": 104,
      "title": "Chompa femenino",
      "photo": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGa8XsCmdUDQuyCer0ZuViceNJ3O5fqUHZ9BbDPp0PCYcMqjut&s',
      "description": "Vestibulum ac est lacinia nisi venenatis tristique",
      "precio": 10,
      "categories": ['trends'],
      "gallery": [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGa8XsCmdUDQuyCer0ZuViceNJ3O5fqUHZ9BbDPp0PCYcMqjut&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmtEG1onCLVSJz9GavMARNdsk7bS75yx8webnW-mOwPMqO5t0y&s',
        'https://images-na.ssl-images-amazon.com/images/I/51H5R60vkOL._SX569._SX._UX._SY._UY_.jpg'
      ]
    },
    {
      "id": 2, 
      "title": "Polera corta",
      "photo": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgY7f0zKY7Wt0QHwX7mvhwUqswqKJo4ZP_6LFYfP_EbG4Beobf&s',
      "description": "Vestibulum ac est lacinia nisi venenatis tristique",
      "precio": 10,
      "categories": ['trends', 'polera'],
      "gallery": [
        "https://codezeel.com/prestashop/PRS01/PRS010007/PRS17/img/p/3/3-home_default.jpg",
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgY7f0zKY7Wt0QHwX7mvhwUqswqKJo4ZP_6LFYfP_EbG4Beobf&s',
        "https://codezeel.com/prestashop/PRS01/PRS010007/PRS17/img/p/2/2-home_default.jpg"
      ]
    },
    {
      "id": 3,
      "title": "Polera 3",
      "photo": chompa,
      "description": "Vestibulum ac est lacinia nisi venenatis tristique",
      "precio": 10,
      "categories": ['trends'],
      "gallery": [
        "https://codezeel.com/prestashop/PRS01/PRS010007/PRS17/img/p/3/3-home_default.jpg",
        "https://codezeel.com/prestashop/PRS01/PRS010007/PRS17/img/p/4/4-home_default.jpg",
        "https://codezeel.com/prestashop/PRS01/PRS010007/PRS17/img/p/2/2-home_default.jpg"
      ]
    },
    {
      "id": 4,
      "title": 'chompa hombre',
      "photo": chompa,
      "description": "Vestibulum ac est lacinia nisi venenatis tristique",
      "precio": 10,
      "categories": ['nuevo'],
      "gallery": [
        "https://codezeel.com/prestashop/PRS01/PRS010007/PRS17/img/p/3/3-home_default.jpg",
        "https://codezeel.com/prestashop/PRS01/PRS010007/PRS17/img/p/4/4-home_default.jpg",
        "https://codezeel.com/prestashop/PRS01/PRS010007/PRS17/img/p/2/2-home_default.jpg"
      ]
    },
    {
      "id": 5,
      "title": 'chompa gris',
      "photo": 'https://i.linio.com/p/7ae4c691a4a4711fb0d5618ee5bda1be-catalog.jpg',
      "description": "Vestibulum ac est lacinia nisi venenatis tristique",
      "precio": 10,
      "categories": ['nuevo'],
      "gallery": [
        "https://i.linio.com/p/7ae4c691a4a4711fb0d5618ee5bda1be-catalog.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvVpgTI9EZ8ekChxJ7F6U5RxIuSZgyD7KSo1mkDjAb2e2zJIJP&s",
        "https://codezeel.com/prestashop/PRS01/PRS010007/PRS17/img/p/2/2-home_default.jpg"
      ]
    },
    {
      "id": 6,
      "title": 'chompa gris',
      "photo": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvVpgTI9EZ8ekChxJ7F6U5RxIuSZgyD7KSo1mkDjAb2e2zJIJP&s',
      "description": "Vestibulum ac est lacinia nisi venenatis tristique",
      "precio": 10,
      "categories": ['nuevo'],
      "gallery": [
        "https://codezeel.com/prestashop/PRS01/PRS010007/PRS17/img/p/3/3-home_default.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvVpgTI9EZ8ekChxJ7F6U5RxIuSZgyD7KSo1mkDjAb2e2zJIJP&s",
        "https://codezeel.com/prestashop/PRS01/PRS010007/PRS17/img/p/2/2-home_default.jpg"
      ]
    },
    {
      "id": 7,
      "title": 'chompa rosa',
      "photo": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmkr9KIF0YAwi75rrzDnobjlLmIrSU_TYpAfZOu26jf3nzqUy3&s',
      "description": "Vestibulum ac est lacinia nisi venenatis tristique",
      "precio": 10,
      "categories": ['nuevo'],
      "gallery": [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmkr9KIF0YAwi75rrzDnobjlLmIrSU_TYpAfZOu26jf3nzqUy3&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmhwhbtKlWuEEOm3Fwwy-b95AheY3T6PdjPh7CobcRteVzzWFL&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfu2nruMPnQyQG5M5Hvg7WI0bUMdrD7sTkvUlkKYurpG78PAe5&s"
      ]
    },
    {
      "id": 8,
      "title": 'chompa unisex',
      "photo": 'https://images-na.ssl-images-amazon.com/images/I/61E86N6r6yL._SX679._SX._UX._SY._UY_.jpg',
      "description": "Vestibulum ac est lacinia nisi venenatis tristique",
      "precio": 10,
      "categories": ['nuevo'],
      "gallery": [
        "https://images-na.ssl-images-amazon.com/images/I/61E86N6r6yL._SX679._SX._UX._SY._UY_.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmhwhbtKlWuEEOm3Fwwy-b95AheY3T6PdjPh7CobcRteVzzWFL&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfu2nruMPnQyQG5M5Hvg7WI0bUMdrD7sTkvUlkKYurpG78PAe5&s"
      ]
    },
    {
      "id": 9,
      "title": "Polera 3",
      "photo": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHxe8gKm2MYxvsrorhxb0mh9XnbIzAjQfLoSe1si-GmaHfkbBj&s',
      "description": "Vestibulum ac est lacinia nisi venenatis tristique",
      "precio": 10,
      "categories": ['trends'],
      "gallery": [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHxe8gKm2MYxvsrorhxb0mh9XnbIzAjQfLoSe1si-GmaHfkbBj&s",
        "https://codezeel.com/prestashop/PRS01/PRS010007/PRS17/img/p/4/4-home_default.jpg",
        "https://codezeel.com/prestashop/PRS01/PRS010007/PRS17/img/p/2/2-home_default.jpg"
      ]
    },
    {
      "id": 10,
      "title": "Polera 3",
      "photo": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoP42XsedvWXkJRF2XVLr-53p4al63RS7qbIGZLMEJZbjSQP9A&s',
      "description": "Vestibulum ac est lacinia nisi venenatis tristique",
      "precio": 10,
      "categories": ['trends'],
      "gallery": [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt1pzy1EGz92tyeyA-meB6hzI45NEPdCpQYNjmI-ev12zVqOM5&s",
        "https://codezeel.com/prestashop/PRS01/PRS010007/PRS17/img/p/4/4-home_default.jpg",
        "https://codezeel.com/prestashop/PRS01/PRS010007/PRS17/img/p/2/2-home_default.jpg"
      ]
    },
    {
      "id": 11,
      "title": "Polera 3",
      "photo": 'http://www.mesonsaborandaluz.es/images/category_58/Un%20tama%C3%B1o%20FuweiEncore%20Sudaderas%20para%20Mujeres%20Cortas%20con%20Sudadera%20con%20Capucha%20Mujeres%20Cotton%20Green.jpg',
      "description": "Vestibulum ac est lacinia nisi venenatis tristique",
      "precio": 10,
      "categories": ['trends'],
      "gallery": [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt1pzy1EGz92tyeyA-meB6hzI45NEPdCpQYNjmI-ev12zVqOM5&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNpGhhUjyM3mwB03q03iTfs9s6xjUs-wQNNzOQ5ZX6zsoMZHvk&s",
        "https://codezeel.com/prestashop/PRS01/PRS010007/PRS17/img/p/2/2-home_default.jpg"
      ]
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