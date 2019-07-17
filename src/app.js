import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import {addExpense, removeExpense, editExpense} from './actions/expenses';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();


store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});


store.dispatch(addExpense({ description: 'Water Bill'}));
store.dispatch(addExpense({ description: 'Gas Bill', createdAt: 1000}));
store.dispatch(addExpense({ description: 'Rent',amount: 109500 }));
store.dispatch(addExpense({ description: 'Car Insurance', amount: 3000, createdAt: 2100}));


const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx,document.getElementById('app'))
