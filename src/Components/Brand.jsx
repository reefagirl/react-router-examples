import React, { Fragment, useEffect } from "react";
import { StyleSheet, css } from "aphrodite/no-important";
import { useParams, useRouteMatch, Switch, Route } from "react-router-dom";
import ReactGA from 'react-ga';

import Model from "./Model";
import SubMenu from "./SubMenu";

const styles = StyleSheet.create({
	conatiner: {
		display: "flex",
	},
	row: {
		padding: "5px",
	},
	h1: {
		fontWeight: "300",
		margin: "10px 20px",
		fontSize: "45px",
		color: "#a1352a",
	},
});


const Brand = () => {
	const { brand } = useParams();
	const { url } = useRouteMatch();

	
useEffect(() => {
    ReactGA.event({
		category: "Brands",
		action: 'Click the button on ' + brand
	})
	console.log('Send info to GA click: ' + brand)
	
}, [brand]);

	return (
		<Fragment>
			<h1 className={css(styles.h1)}>{brand}</h1>
			<div className={css(styles.conatiner)}>
				<SubMenu />
				<div className={css(styles.row)}>
					<Switch>
						<Route path={`${url}/:model`}>
							<Model />
						</Route>
					</Switch>
				</div>
			</div>
		</Fragment>
	);
};

export default Brand;
