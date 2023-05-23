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
                <View style={{height: "80vw", width: "80vw", backgroundColor: "blue", zIndex: 1}}>
                  <Text style={{color: "white"}}>Drawer Content</Text>
                </View>
            </Text>
         </View>

      )
    }

  }

  return (
    <View style={{position: "absolute"}}>
    <Drawer
    open={open}
    onOpen={() => setOpen(true)}
    onClose={() => setOpen(false)}
    renderDrawerContent={() => showText()}
    overlayStyle={{height: "80vw"}}
  >
    <Text onPress={() => setOpen((prevOpen) => !prevOpen)}
      title={`${open ? 'Close' : 'Open'} drawer`}>
      <FontAwesomeIcon icon={faBars} size="2x" style={{marginRight: "80vw"}}/>
    </Text>
  </Drawer>
  </View>
  )
};

export default Topbar;
