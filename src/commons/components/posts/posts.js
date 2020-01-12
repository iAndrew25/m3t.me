import React from 'react';
import {ScrollView, Image, StyleSheet} from 'react-native';
import {Avatar, Text, Layout, Button, TopNavigation, Icon, List, Card } from '@ui-kitten/components';

import Post from './post/post';

function Posts({posts, hasAddButton = false}) {
	return (
		<Layout style={style.wrapper}>
			{posts.map(post => (
				<Layout style={style.postWrapper}>
					<Post {...post} />
				</Layout>
			))}
			{hasAddButton && <Layout style={style.postWrapper}>
				<Icon name='plus' style={style.icon} fill="white" width={48} height={48} />
			</Layout>}
			{posts.length % 3 === 1 && <Layout style={[style.postWrapper, style.placeholder]}></Layout>}
		</Layout>
	); 

}

Posts.defaultProps = {
	posts: [{
		type: 'IMAGE',
		imageUri: 'https://via.placeholder.com/150'
	}, {
		type: 'IMAGE',
		imageUri: 'https://via.placeholder.com/150'
	}, {
		type: 'TEXT',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi doloribus voluptate magni labore corporis ex exercitationem, illum odio quibusdam, dignissimos culpa voluptatum amet, minima ea. Voluptatum tempora voluptas hic quas.'
	}, {
		type: 'TEXT',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto accusamus illo nesciunt, molestiae, cumque iure ullam non, officiis vero, repellendus numquam ad modi eum temporibus minus assumenda unde eius ipsa. ipsum dolor sit amet, consectetur adipisicing elit. Quasi doloribus voluptate magni labore corporis ex exercitationem, illum odio quibusdam, dignissimos culpa voluptatum amet, minima ea. Voluptatum tempora voluptas hic quas.'
	}, {
		type: 'TEXT',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto accusamus illo nesciunt, molestiae, cumque iure ullam non, officiis vero, repellendus numquam ad modi eum temporibus minus assumenda unde eius ipsa. ipsum dolor sit amet, consectetur adipisicing elit. Quasi doloribus voluptate magni labore corporis ex exercitationem, illum odio quibusdam, dignissimos culpa voluptatum amet, minima ea. Voluptatum tempora voluptas hic quas.'
	}, {
		type: 'VIDEO',
		videoUri: 'asfa video'
	}, {
		type: 'VIDEO',
		videoUri: 'asfa video'
	}]
}

const style = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between'
	},
	postWrapper: {
		backgroundColor: '#111',
		justifyContent: 'center',
		alignItems: 'center',
		width: 100,
		height: 100,
		marginBottom: 12,
		borderRadius: 4,
		overflow: 'hidden'
	},
	icon: {
		justifyContent: 'center',
		alignSelf: 'center'		
	},
	placeholder: {
		backgroundColor: 'transparent'
	}
});

export default Posts;