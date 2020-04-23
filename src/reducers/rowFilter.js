function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const managementRows = [
	createData("John Smith", 305, "Management", "COO", 4.3),
	createData("Haley Jules", 408, "Management", "Team Lead", 6.5),
	createData("Doug Douglas", 360, "Management", "CEO", 8),
	createData("Catherine Carter", 518, "Management", "CTO", 7.0),
];

const internRows = [
	createData("Jelly Chris", 375, "Interns", "Intern", 0.0),
	createData("Katie Anne", 392, "Interns", "Intern", 0.0),
];
const engRows = [
	createData("Sally June", 452, "Engineering", "Developer", 4.9),
	createData("Peter Bob", 262, "Engineering", "Senior Developer", 6.0),
	createData("Frodo Baggins", 159, "Engineering", "Developer", 4.0),
	createData("Tom Bombadil", 356, "Engineering", "Senior Developer", 3.9),
	createData("Alice Swift", 237, "Engineering", "Developer", 4.3),
	createData("Lucy Marsh", 318, "Engineering", "Junior Developer", 2.0),
	createData("Oreo Jones", 437, "Engineering", "Developer", 4.0),
];

const rowDict = {
	0: managementRows,
	1: engRows,
	2: internRows,
};

const initialRows = [...managementRows, ...engRows, ...internRows];

const rowsReducer = (state = initialRows, action) => {
	switch (action.type) {
		case "DEPARTMENT_FILTER":
			let stateArray = [];
			action.depArray.forEach((el) => {
				stateArray = [...stateArray, ...rowDict[el]];
			});
			state = stateArray;

			return state;

		default:
			return state;
	}
};

export default rowsReducer;
