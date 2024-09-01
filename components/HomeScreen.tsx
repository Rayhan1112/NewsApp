import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Dimensions, StatusBar } from 'react-native';
import axios from 'axios';
import Card from './Card';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import analytics from '@react-native-firebase/analytics';


const { width } = Dimensions.get('window');

export interface Article {
  title: string;
  description: string;
  urlToImage: string;
  url: string;
  publishedAt: string;
  author: string;
}

const HomeScreen = ({navigation}: {navigation: any} ) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [active, setActive] = useState(2);
  const [timeSpent, setTimeSpent] = useState<{ [key: string]: number }>({});
  const [startTime, setStartTime] = useState<number>(Date.now());
  const [customApi, setCustomApi] = useState<string>('');

  const today = new Date();
  const yesterday = new Date(today.setDate(today.getDate() - 1));
  const formattedYesterday = yesterday.toISOString().split('T')[0];

  const handleLogout = async()=>{
    AsyncStorage.removeItem('Status')
    auth().signOut();
    navigation.navigate("Login");
  }



  const categoryItem = [
    { id: 1, name: 'Suggestions', api: customApi },
    { id: 2, name: 'Headlines', api: `https://newsapi.org/v2/everything?q=headlines&from=${formattedYesterday}&to=${formattedYesterday}&language=en&sortBy=popularity&apiKey=63ca8d4e733741f4bb5e48562182749c` },
    { id: 3, name: 'India', api: 'https://newsapi.org/v2/top-headlines?country=in&apiKey=63ca8d4e733741f4bb5e48562182749c' },
    { id: 4, name: 'Sports', api: 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=63ca8d4e733741f4bb5e48562182749c' },
    { id: 5, name: 'World', api: `https://newsapi.org/v2/everything?q=world&from=${formattedYesterday}&to=${formattedYesterday}&apiKey=63ca8d4e733741f4bb5e48562182749c` },
    { id: 6, name: 'Business', api: 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=63ca8d4e733741f4bb5e48562182749c' }
  ];

  const onCategorySelect = (id: number) => {
    const previousCategory = categoryItem.find(item => item.id === active);
    if (previousCategory && previousCategory.id !== 1) {
      const endTime = Date.now();
      const duration = Math.round((endTime - startTime) / 1000);
      console.log(`Time spent on previous category: ${duration} seconds`);

      setTimeSpent(prevTimeSpent => {
        const updatedTimeSpent = { ...prevTimeSpent };
        const categoryName = previousCategory.name;
        updatedTimeSpent[categoryName] = (updatedTimeSpent[categoryName] || 0) + duration;
        console.log(`Updated time spent on categories:`, updatedTimeSpent);

        // Determine the category with the most time spent
        const maxTimeCategory = Object.keys(updatedTimeSpent).reduce((a, b) => updatedTimeSpent[a] > updatedTimeSpent[b] ? a : b);

        analytics().logEvent('max_time_spent', {
    category: maxTimeCategory,
    time_spent: updatedTimeSpent[maxTimeCategory],
  });

        // Update the custom category's API based on the most time-spent category
        const customApiUrl = `https://newsapi.org/v2/everything?q=${maxTimeCategory}&from=${formattedYesterday}&to=${formattedYesterday}&language=en&sortBy=popularity&apiKey=63ca8d4e733741f4bb5e48562182749c`;
        setCustomApi(customApiUrl);

        return updatedTimeSpent;
      });
    }

    setActive(id);
    setStartTime(Date.now()); // set startTime to current time when category is selected
  };

  const fetchNews = async (categoryId: number) => {
    try {
      const selectedCategory = categoryItem.find(item => item.id === categoryId);
      if (selectedCategory) {
        const response = await axios.get(selectedCategory.api);
        setArticles(response.data.articles);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (active === 1 && customApi) {
      // Fetch news for the "Custom" category if selected and API is set
      fetchNews(1);
    } else {
      fetchNews(active);
    }
    setStartTime(Date.now()
    );
  }, [active, customApi]);

  const renderItem = ({ item }: { item: Article }) => {
    if (item.title && item.title.toLowerCase().includes("removed") || item.description && item.description.toLowerCase().includes("removed")) {
      return null;
    }
    return (
      <Card
        title={item.title}
        description={item.description}
        imageUrl={item.urlToImage}
        publishedAt={item.publishedAt}
        author={item.author}
      />
    );
  };

  return (
    <View style={styles.MainContainer}>
      <StatusBar backgroundColor={'black'} />
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
        <Text style={styles.logoText}>NewApp</Text>
        <TouchableOpacity
          style={{ top: 34, left: 170 }}
          onPress={handleLogout}>
          <Image style={{ height: 23, width: 23, tintColor: 'white' }} source={require('../assets/logout.png')}
          />
        </TouchableOpacity>
      </View>

      <View style={{ backgroundColor: 'grey', borderRadius: 25, top: 10 }}>
        <View style={{ top: 10, paddingBottom: 15 }}>
          <FlatList
            horizontal
            style={{ marginHorizontal: 10, marginVertical: 15 }}
            data={categoryItem}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => onCategorySelect(item.id)}>
                <Text
                  style={
                    item.id === active
                      ? {
                        ...styles.select,
                        fontSize: width * 0.045,
                        paddingHorizontal: width * 0.02,
                      }
                      : {
                        ...styles.unselect,
                        fontSize: width * 0.04,
                        paddingHorizontal: width * 0.02,
                      }
                  }
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>

        <FlatList
          data={articles}
          keyExtractor={(item, index) => `${item.url}-${index}`}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: 'black',
    flex: 1,
    bottom:5
  },
  container: {
    flexDirection: 'row',
    marginLeft: 12,
  },
  logo: {
    height: 50,
    width: 50,
    marginTop: 20,
    marginLeft: 10,
  },
  logoText: {
    marginTop: 30,
    fontSize: 21,
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  select: {
    color: 'black',
    backgroundColor: 'wheat',
    borderRadius: width * 0.02,
    fontWeight: '700',
    paddingBottom: 1.5
  },
  unselect: {
    color: 'white',
    backgroundColor: 'transparent',
    borderRadius: width * 0.01,
    marginTop: 2,
    fontWeight: '600'
  },
});

// 63ca8d4e733741f4bb5e48562182749c