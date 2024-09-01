import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import React from 'react';

export interface Article {
  title: string;
  description: string;
  imageUrl?: string;
  publishedAt: string;
  author: string;
}

const card: React.FC<Article> = ({ title, description, imageUrl, publishedAt, author }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <Text style={styles.live}>Live</Text>
        <Text style={styles.publish}>{publishedAt}</Text>

        <Text style={styles.title}>{title}</Text>
        {imageUrl ? (
          <Image
            source={{ uri: imageUrl }}
            style={styles.bannerImage}
            resizeMode="cover"
          />
        ) : (
          <Text style={{ color: 'black' }}>No Image</Text>
        )}
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.authorContainer}>Author: {author}</Text>
        <View style={styles.iconContainer}>
          <Image source={require('../assets/like.png')} style={styles.icon} />
          <Image source={require('../assets/comment.png')} style={styles.icon} />
          <Image source={require('../assets/send.png')} style={styles.icon} />
        </View>
      </View>
      
    </View>
  );
};

export default card;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    marginHorizontal: 20,
    borderRadius: 25,
    marginVertical:10,
    backgroundColor: 'wheat',
  },
  card: {
    flex: 1,
    flexDirection: 'column',
    padding: 15,
  },
  live: {
    marginLeft: 10,
    marginTop: 5,
    backgroundColor: 'red',
    width: '20%', // Use relative width
    textAlign: 'center',
    borderRadius: 10,
    padding: 3,
    fontWeight: '500',
    color: 'white',
  },
  publish: {
    color: 'black',
    marginLeft: 10,
    marginTop: 10,
    fontWeight: '700',
  },
  title: {
    color: 'black',
    fontSize: 21, // Increase font size for better readability
    marginLeft: 0,
    marginTop: 15,
    fontWeight: '700',
    marginBottom: 10,
  },
  description: {
    color: 'black',
    marginTop:1,
    fontSize: 16, // Increase font size for better readability
    lineHeight: 24, // Increase line height for better readability
  },
  bannerImage: {
    width: '100%',
    height: 150, // Set a reasonable height for the image
    borderRadius: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent:'flex-end',
    padding: 10,
  },
  icon: {
    height: 25,
    width: 25,
    marginRight: 10, // Add margin between icons
  },
  authorContainer: {
    marginTop: 13,
    marginLeft: 1,
    color: 'black',
    fontWeight: '700',
    fontSize: 17,
    marginBottom: 15,
  },
});