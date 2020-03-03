import * as React from "react";
import { DefaultTheme, Appbar, useTheme, Colors } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import ExampleList, { examples } from "./ExampleList";

const Stack = createStackNavigator();

export default function Root() {
  const theme = useTheme({
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: Colors.purpleA700,
      accent: Colors.pinkA700
    }
  });

  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={{
        header: ({ navigation, scene, previous }) => (
          <Appbar.Header theme={theme}>
            {previous ? (
              <Appbar.BackAction onPress={() => navigation.goBack()} />
            ) : navigation.openDrawer ? (
              <Appbar.Action
                icon="menu"
                onPress={() => navigation.openDrawer()}
              />
            ) : null}
            <Appbar.Content title={scene.descriptor.options.title} />
          </Appbar.Header>
        )
      }}
    >
      <Stack.Screen
        name="Home"
        component={ExampleList}
        options={{
          title: "Examples"
        }}
      />
      {Object.keys(examples).map(id => (
        <Stack.Screen
          key={id}
          name={id}
          component={examples[id]}
          options={{ title: examples[id].title }}
        />
      ))}
    </Stack.Navigator>
  );
}
