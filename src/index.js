export const sayHello = () => { 
	const greeting = "Hello, Hexlet!";
	
	return greeting;
};

import _ from "lodash";

export const fun = () => { 
	const result = _.last(["one", "two"]);
	return result;
};
