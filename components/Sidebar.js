import React, { useState } from "react"
import { View, Text, TouchableOpacity, Button } from "react-native";
import { Drawer } from "react-native-drawer-layout";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const showText = () => {
    if(open) {
      return (
        <View>
          <Text>Drawer Content</Text>
      </View>
      )
    } else {
      return;
    }

  }

  return (
    // <View style={{flex: 1}}>
    //   {showText()}
    // </View>
    <Drawer
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      renderDrawerContent={() => showText()}
    >
      <Button
        onPress={() => setOpen((prevOpen) => !prevOpen)}
        title={`${open ? 'Close' : 'Open'} drawer`}
      />
    </Drawer>
  )
};

export default Sidebar;
