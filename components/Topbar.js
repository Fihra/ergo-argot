import { Text, View} from 'react-native';
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Drawer } from "react-native-drawer-layout";

const Topbar = () => {
  const [open, setOpen] = useState(false);

  const showText = () => {
    if(open) {
      return (
        <View>
            <Text onPress={() => setOpen((prevOpen) => !prevOpen)} title={`${open ? 'Close' : 'Open'} drawer`}>
                <FontAwesomeIcon icon={faBars} size="2x" style={{marginLeft: "60vw"}}/>
            </Text>
          <Text>Drawer Content</Text>
      </View>
      )
    } else {
      return;
    }

  }

  return (
    // <View>
    //   <Text onPress={handleClick} >
    //     <FontAwesomeIcon icon={faBars} size="3x" style={{marginRight: "80vw"}}/>
    //   </Text>
    // </View>
    <Drawer
    open={open}
    onOpen={() => setOpen(true)}
    onClose={() => setOpen(false)}
    renderDrawerContent={() => showText()}
    drawerStyle={{position: "absolute"}}
  >
    <Text onPress={() => setOpen((prevOpen) => !prevOpen)}
      title={`${open ? 'Close' : 'Open'} drawer`}>
      <FontAwesomeIcon icon={faBars} size="2x" style={{marginRight: "80vw"}}/>
    </Text>
  </Drawer>
  )
};

export default Topbar;
