import * as React from "react";
import {
  ScrollView,
  View,
  Image,
  Dimensions,
  StyleSheet,
  Platform
} from "react-native";
import { BottomNavigation, Colors } from "react-native-paper";

const PhotoGallery = ({ route }) => {
  const PHOTOS = Array.from({ length: 24 }).map(
    (_, i) => `https://unsplash.it/300/300/?random&__id=${route.key}${i}`
  );
  return (
    <ScrollView contentContainerStyle={styles.content}>
      {PHOTOS.map(uri => (
        <View key={uri} style={styles.item}>
          <Image source={{ uri }} style={styles.photo} />
        </View>
      ))}
    </ScrollView>
  );
};
export default class BottomNavigationExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        {
          key: "album",
          title: "Album",
          icon: "image-album",
          color: Colors.purpleA100
        },
        {
          key: "library",
          title: "Library",
          icon: "inbox",
          color: Colors.purpleA200,
          badge: true
        },
        {
          key: "favorites",
          title: "Favorites",
          icon: "heart",
          color: Colors.purpleA400
        },
        {
          key: "purchased",
          title: "Purchased",
          icon: "shopping-music",
          color: Colors.purpleA700
        }
      ]
    };
  }
  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={index => this.setState({ index })}
        renderScene={BottomNavigation.SceneMap({
          album: PhotoGallery,
          library: PhotoGallery,
          favorites: PhotoGallery,
          purchased: PhotoGallery
        })}
        sceneAnimationEnabled={false}
      />
    );
  }
}
BottomNavigationExample.title = "Bottom Navigation";
const styles = StyleSheet.create({
  ...Platform.select({
    web: {
      content: {
        // there is no 'grid' type in RN :(
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
        gridRowGap: "8px",
        gridColumnGap: "8px",
        padding: 8
      },
      item: {
        width: "100%",
        height: 150
      }
    },
    default: {
      content: {
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 4
      },
      item: {
        height: Dimensions.get("window").width / 2,
        width: "50%",
        padding: 4
      }
    }
  }),
  photo: {
    flex: 1,
    resizeMode: "cover"
  }
});
