import { useLayoutEffect } from 'react';

import { MEALS } from '../data/dummy-data';
import MealsList from '../components/MealsList/MealsList';

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

  return <MealsList items={displayedMeals} />;
}
