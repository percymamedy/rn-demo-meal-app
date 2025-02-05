import { useLayoutEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

export default function MealsOverviewScreen({ route, navigation }) {
  const categoryId = route.params.categoryId;
  const categoryTitle = route.params.categoryTitle;

  const displayedMeals = MEALS.filter(mealItem =>
    mealItem.categoryIds.includes(categoryId)
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation, categoryTitle]);

  const renderMealItem = ({ item }) => {
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };

    return <MealItem {...mealItemProps} />;
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
  },
});
