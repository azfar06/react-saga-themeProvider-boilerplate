import { configureStore } from '@reduxjs/toolkit';
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from 'store/reducers';
import rootSaga from 'sagas/rootSaga';

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = compose(
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore)(reducers);

sagaMiddleware.run(rootSaga);