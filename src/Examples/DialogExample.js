import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Colors, Button, withTheme } from "react-native-paper";

import {
  DialogWithCustomColors,
  DialogWithLoadingIndicator,
  DialogWithLongText,
  DialogWithRadioBtns,
  UndismissableDialog
} from "./Dialogs";

class DialogExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false,
      visible5: false
    };
    this._openDialog1 = () => this.setState({ visible1: true });
    this._openDialog2 = () => this.setState({ visible2: true });
    this._openDialog3 = () => this.setState({ visible3: true });
    this._openDialog4 = () => this.setState({ visible4: true });
    this._openDialog5 = () => this.setState({ visible5: true });
    this._closeDialog1 = () => this.setState({ visible1: false });
    this._closeDialog2 = () => this.setState({ visible2: false });
    this._closeDialog3 = () => this.setState({ visible3: false });
    this._closeDialog4 = () => this.setState({ visible4: false });
    this._closeDialog5 = () => this.setState({ visible5: false });
  }
  render() {
    const {
      theme: {
        colors: { background }
      }
    } = this.props;
    const { visible1, visible2, visible3, visible4, visible5 } = this.state;
    return (
      <View style={[styles.container, { backgroundColor: background }]}>
        <Button
          mode="outlined"
          onPress={this._openDialog1}
          style={styles.button}
        >
          Long text
        </Button>
        <Button
          mode="outlined"
          onPress={this._openDialog2}
          style={styles.button}
        >
          Radio buttons
        </Button>
        <Button
          mode="outlined"
          onPress={this._openDialog3}
          style={styles.button}
        >
          Progress indicator
        </Button>
        <Button
          mode="outlined"
          onPress={this._openDialog4}
          style={styles.button}
        >
          Undismissable Dialog
        </Button>
        <Button
          mode="outlined"
          onPress={this._openDialog5}
          style={styles.button}
        >
          Custom colors
        </Button>
        <DialogWithLongText visible={visible1} close={this._closeDialog1} />
        <DialogWithRadioBtns visible={visible2} close={this._closeDialog2} />
        <DialogWithLoadingIndicator
          visible={visible3}
          close={this._closeDialog3}
        />
        <UndismissableDialog visible={visible4} close={this._closeDialog4} />
        <DialogWithCustomColors visible={visible5} close={this._closeDialog5} />
      </View>
    );
  }
}
DialogExample.title = "Dialog";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grey200,
    padding: 12
  },
  button: {
    margin: 4
  }
});
export default withTheme(DialogExample);
