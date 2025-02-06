import { View, Text, StyleSheet } from 'react-native';
// import { useContext } from 'react';
import { useSelector } from 'react-redux';
import MealsList from '../components/MealsList/MealsList';

import { MEALS } from '../data/dummy-data';
// import { FavoritesContext } from '../store/context/favorites-context';

export default function FavouritesScreen() {
  // const favouritesContext = useContext(FavoritesContext);
  const favouriteMealIds = useSelector(state => state.favouriteMeals.ids);

  const favouriteMeals = MEALS.filter(meal =>
    favouriteMealIds.includes(meal.id)
  );

  if (favouriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>
          No favorite meals found. Start adding some!
        </Text>
      </View>
    );
  }

  return <MealsList items={favouriteMeals} />;
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
