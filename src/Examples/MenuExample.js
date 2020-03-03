import * as React from "react";
import { View, StyleSheet, Platform } from "react-native";
import {
  Menu,
  Appbar,
  Divider,
  Button,
  withTheme,
  List,
  TouchableRipple,
  Colors
} from "react-native-paper";

const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";

class MenuExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible1: false,
      visible2: false,
      visible3: false,
      contextualMenuCoord: { x: 0, y: 0 }
    };
    this._handleLongPress = event => {
      const { nativeEvent } = event;
      console.log("!@# nativeEvent: ", nativeEvent);
      this.setState(
        {
          contextualMenuCoord: {
            x: nativeEvent.pageX,
            y: nativeEvent.pageY
            // x: nativeEvent.locationX,
            // y: nativeEvent.locationY
          }
        },
        this._openMenu3
      );
    };
    this._openMenu1 = () => this.setState({ visible1: true });
    this._openMenu2 = () => this.setState({ visible2: true });
    this._openMenu3 = () => this.setState({ visible3: true });
    this._closeMenu1 = () => this.setState({ visible1: false });
    this._closeMenu2 = () => this.setState({ visible2: false });
    this._closeMenu3 = () => this.setState({ visible3: false });
  }
  render() {
    const {
      theme: {
        colors: { background }
      },
      navigation
    } = this.props;
    const { visible1, visible2, visible3, contextualMenuCoord } = this.state;
    navigation.setOptions({
      headerShown: false
    });
    return (
      <View style={styles.screen}>
        <Appbar.Header
          theme={{
            colors: { primary: Colors.purpleA700 }
          }}
        >
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title="Menu" />
          <Menu
            visible={visible1}
            onDismiss={this._closeMenu1}
            anchor={
              <Appbar.Action
                icon={MORE_ICON}
                color="white"
                onPress={this._openMenu1}
              />
            }
          >
            <Menu.Item onPress={() => {}} title="Undo" />
            <Menu.Item onPress={() => {}} title="Redo" />
            <Divider />
            <Menu.Item onPress={() => {}} title="Cut" disabled />
            <Menu.Item onPress={() => {}} title="Copy" disabled />
            <Menu.Item onPress={() => {}} title="Paste" />
          </Menu>
        </Appbar.Header>
        <View style={[styles.container, { backgroundColor: background }]}>
          <View style={styles.alignCenter}>
            <Menu
              visible={visible2}
              onDismiss={this._closeMenu2}
              anchor={
                <Button mode="outlined" onPress={this._openMenu2}>
                  Menu with icons
                </Button>
              }
            >
              <Menu.Item icon="undo" onPress={() => {}} title="Undo" />
              <Menu.Item icon="redo" onPress={() => {}} title="Redo" />
              <Divider />
              <Menu.Item
                icon="content-cut"
                onPress={() => {}}
                title="Cut"
                disabled
              />
              <Menu.Item
                icon="content-copy"
                onPress={() => {}}
                title="Copy"
                disabled
              />
              <Menu.Item
                icon="content-paste"
                onPress={() => {}}
                title="Paste"
              />
            </Menu>
          </View>
          <Menu
            visible={visible3}
            onDismiss={this._closeMenu3}
            anchor={contextualMenuCoord}
          >
            <Menu.Item onPress={() => {}} title="Item 1" />
            <Menu.Item onPress={() => {}} title="Item 2" />
            <Divider />
            <Menu.Item onPress={() => {}} title="Item 3" disabled />
          </Menu>
          <List.Section style={styles.list} title="Contextual menu">
            <TouchableRipple
              onPress={() => {}}
              onLongPress={this._handleLongPress}
            >
              <List.Item
                title="List item"
                description="Long press me to open contextual menu"
              />
            </TouchableRipple>
          </List.Section>
        </View>
      </View>
    );
  }
}
MenuExample.title = "Menu";
const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  container: {
    flex: 1,
    paddingTop: 48
  },
  list: {
    marginTop: 48
  },
  alignCenter: {
    alignItems: "center"
  }
});
export default withTheme(MenuExample);
