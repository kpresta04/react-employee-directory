import React from "react";
import Menu from "@material-ui/core/Menu";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import MenuList from "./MenuList.component";

import FilterListIcon from "@material-ui/icons/FilterList";

export default function SimpleMenu() {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<Tooltip title="Filter departments">
				<IconButton
					onClick={handleClick}
					aria-label="filter list"
					aria-controls="simple-menu"
					aria-haspopup="true"
				>
					<FilterListIcon />
				</IconButton>
			</Tooltip>

			<Menu
				id="simple-menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<MenuList />
			</Menu>
		</div>
	);
}
