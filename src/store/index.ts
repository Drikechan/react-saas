import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import global from "./modules/global/reducer";
import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
  Store,
} from "redux";
import reduxThunk from "redux-thunk";
import reduxPromise from "redux-promise";

// 合并多个reducer，返回一个根reducer
const reducer = combineReducers({
  global,
});

// 持久化配置
const persistConfig = {
  key: "redux-state",
  storage,
};
const persistReducerConfig = persistReducer(persistConfig, reducer);

// 开启react-devtools
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 使用 redux 中间件
const middleWares = applyMiddleware(reduxThunk, reduxPromise);

// 创建store
const store: Store = createStore(
  persistReducerConfig,
  composeEnhancers(middleWares)
);

const persistor = persistStore(store);

export { store, persistor };
