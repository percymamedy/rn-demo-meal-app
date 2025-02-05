import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  Button,
} from 'react-native';
import { useLayoutEffect } from 'react';

import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';

export default function MealDetailsScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const mealTitle = route.params.mealTitle;

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  function headerButtonPressHandler() {
    console.log('Marked as favorite!');
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: mealTitle,
      headerRight: () => {
        return (
          <IconButton
            icon="star"
            color="white"
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [navigation, headerButtonPressHandler, mealTitle]);

  return (
    <ScrollView
      style={styles.rootContainer}
      contentContainerStyle={styles.screen}
    >
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailsText}
      />
      <View style={styles.listContainer}>
        <Subtitle>Ingredients:</Subtitle>
        <List data={selectedMeal.ingredients} />
        <Subtitle>Steps:</Subtitle>
        <List data={selectedMeal.steps} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
  },
  rootContainer: {
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailsText: {
    color: 'white',
  },
  listContainer: {
    width: '80%',
  },
});
