import {createStore} from 'redux';

const incrementCount = ({incrementBy=1}={}) =>({
                                                type: 'INCREMENT',
                                                incrementBy
                                              })

const decrementCount = ({decrementBy=1}={}) =>({
                                                type: 'DECREMENT',
                                                decrementBy
                                              })
const setCount = ({count}={}) =>({
                                  type: 'SET',
                                  count
                                })

const reset = () => ({
                      type:'RESET'
                    })

const countReducer = (state={count:0}, action) => {
  switch (action.type)
  {
    case 'INCREMENT':
      return {count:state.count+ action.incrementBy};
    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {count:state.count- decrementBy};
    case 'SET' :
      return {count:action.count}
    case 'RESET' :
      return {count:0};
    default:
      return state;
  }
}

const store = createStore(countReducer);

store.subscribe(()=>{console.log(store.getState())})

// store.dispatch({type: 'INCREMENT',incrementBy:5});
store.dispatch(incrementCount({incrementBy:5}));
store.dispatch(incrementCount());

store.dispatch(reset());

store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy:11}));

store.dispatch(setCount({count:101}));
