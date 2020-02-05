import React from 'react';
import {StyleSheet, View, Switch, Text} from 'react-native';

import {INNER_MARGIN, OUTER_MARGIN} from '../../utils/sizes';
import getColor from '../../utils/colors';

function Toggle({label, state, setState}) {
	return (
		<View style={style.wrapper}>
			<Text style={style.label}>{label}</Text>
			<Switch value={state} onValueChange={setState} />
		</View>
	);
}

const style = StyleSheet.create({
	wrapper: {
		paddingHorizontal: INNER_MARGIN,
		paddingVertical: OUTER_MARGIN,
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderColor: getColor('divider'),
	},
	label: {
		flexGrow: 1,
	},
});

export default Toggle;
