import { FlatList } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

export default function CategoriesScreen({ navigation }) {
  const categoryItem = ({ item }) => (
    <CategoryGridTile
      id={item.id}
      title={item.title}
      color={item.color}
      onPress={() =>
        navigation.navigate('MealsOverview', {
          categoryId: item.id,
          categoryTitle: item.title,
        })
      }
    />
  );

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={categoryItem}
      numColumns={2}
    />
  );
}
