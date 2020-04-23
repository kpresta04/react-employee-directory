import { createStore, combineReducers } from "redux";

import rowFilter from "../reducers/rowFilter";

export default () => {
	const store = createStore(
		combineReducers({ rows: rowFilter }),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);

	return store;
};
