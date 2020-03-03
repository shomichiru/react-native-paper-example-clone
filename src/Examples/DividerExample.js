import * as React from "react";
import { FlatList } from "react-native";
import { Divider, List, withTheme } from "react-native-paper";

const items = ["Apple", "Banana", "Coconut", "Lemon", "Mango", "Peach"];

const DividerExample = props => {
  const {
    theme: {
      colors: { background }
    }
  } = props;
  return (
    <FlatList
      style={{ backgroundColor: background }}
      renderItem={({ item }) => <List.Item title={item} />}
      keyExtractor={item => item}
      ItemSeparatorComponent={Divider}
      data={items}
    />
  );
};
DividerExample.title = "Divider";
export default withTheme(DividerExample);
