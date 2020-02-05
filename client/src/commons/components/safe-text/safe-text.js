import React, {Fragment, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Text} from '@ui-kitten/components';

import getColor from '../../utils/colors';

function SafeText({text, numberOfLines, style: componentStyle}) {
	const [numberOfLinesDisplayed, setNumberOfLinesDisplayed] = useState(
		numberOfLines,
	);
	const [maxNumberOfLines, setMaxNumberOfLines] = useState();

	const handleOnTextLayout = ({nativeEvent}) =>
		setMaxNumberOfLines(nativeEvent.lines.length);
	const handleLoadMore = () => setNumberOfLinesDisplayed(maxNumberOfLines);

	const renderLoadMore = () => {
		if (maxNumberOfLines > numberOfLinesDisplayed) {
			return (
				<Text
					category="c2"
					style={style.loadMore}
					onPress={handleLoadMore}>
					Load more
				</Text>
			);
		} else {
			return null;
		}
	};

	return (
		<Fragment>
			<Text
				numberOfLines={numberOfLinesDisplayed}
				category="c2"
				style={[style.text, componentStyle]}
				onTextLayout={handleOnTextLayout}>
				{text}
			</Text>
			{renderLoadMore()}
		</Fragment>
	);
}

const style = StyleSheet.create({
	loadMore: {
		color: getColor('secondaryText'),
		textAlign: 'center',
		marginVertical: 8,
	},
	text: {
		color: getColor('primaryText'),
	},
});

SafeText.defaultProps = {
	numberOfLines: 5,
	style: {},
};

export default SafeText;
