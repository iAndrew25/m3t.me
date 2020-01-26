import React, {useState} from 'react';
import {ScrollView, Image, View, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import {Avatar, Text, Layout, Button, TopNavigation, Icon, List, Card } from '@ui-kitten/components';

import FullWidthImage from 'react-native-fullwidth-image'
import SafeText from '../safe-text/safe-text';
import {INNER_MARGIN, OUTER_MARGIN} from '../../utils/sizes';
import PostHeader from './post-header/post-header';
import PostFooter from './post-footer/post-footer';

import Comment from './comment/comment';

import getColor from '../../utils/colors';

function Post({id, time, heartsCount, commentsCount, contentType, content, author, comments}) {
	const getContent = () => {
		if(contentType === 'IMAGE') {
			return (
				<FullWidthImage 
					style={style.imageStyle}
					source={{uri: content}}
				/>
			);
		}

		if(contentType === 'TEXT') {
			return (
				<SafeText text={content} />
			);
		}

		return null;
	}

	const handleOnHeartPress = () => {
		console.log('loved it')
	}

	const handleOnCommentPress = () => {
		console.log('open post', id)
	}

	const renderComments = () => {
		return (
			<View style={style.comments}>
				{comments.map(comment => <Comment {...comment} />)}
			</View>
		);		
	}

	return (
		<View style={style.wrapper}>
			<PostHeader author={author} time={time} />
			{getContent()}
			<PostFooter 
				heartsCount={heartsCount} 
				commentsCount={commentsCount}
				onHeartPress={handleOnHeartPress}
				onCommentPress={handleOnCommentPress} />
			{comments.length && renderComments()}
		</View>
	); 
}

Post.defaultProps = {
	comments: []
};

const style = StyleSheet.create({
	wrapper: {
		elevation: 3,
		flexGrow: 1,
		borderRadius: 8,
		backgroundColor: getColor('white'),
		margin: OUTER_MARGIN,
		padding: INNER_MARGIN,
		paddingBottom: 0,
		marginBottom: INNER_MARGIN
	},
	imageStyle: {
		borderRadius: 8
	},
	comments: {
		paddingLeft: INNER_MARGIN
	}
});

export default Post;