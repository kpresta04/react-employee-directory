import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import { connect } from "react-redux";
import { depFilter } from "../actions/filters";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
}));

function CheckboxList(props) {
	const classes = useStyles();
	const [checked, setChecked] = React.useState([0, 1, 2]);
	const names = ["Management", "Engineers", "Interns"];

	const handleToggle = (value) => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);
		props.dispatch(depFilter(newChecked));
	};

	return (
		<List className={classes.root}>
			{[0, 1, 2].map((value) => {
				const labelId = `checkbox-list-label-${value}`;

				return (
					<ListItem
						key={value}
						role={undefined}
						dense
						button
						onClick={handleToggle(value)}
					>
						<ListItemIcon>
							<Checkbox
								edge="start"
								checked={checked.indexOf(value) !== -1}
								tabIndex={-1}
								disableRipple
								inputProps={{ "aria-labelledby": labelId }}
							/>
						</ListItemIcon>
						<ListItemText id={labelId} primary={names[value]} />
					</ListItem>
				);
			})}
		</List>
	);
}
const mapStateToProps = (state) => {
	return {
		rows: state.rows,
	};
};

export default connect(mapStateToProps)(CheckboxList);
