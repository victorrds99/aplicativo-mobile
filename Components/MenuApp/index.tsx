import { View } from "react-native";
import { Button, Divider, Menu } from "react-native-paper";
import * as React from 'react';
export function MenuApp() {

    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);
    return(
        
        <View>
            <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={<Button icon="menu" onPress={openMenu} children={undefined}></Button>}>
                <Menu.Item onPress={() => {}} title="Item 1" />
                <Menu.Item onPress={() => {}} title="Item 2" />
                <Divider />
                <Menu.Item onPress={() => {}} title="Item 3" />
            </Menu>
            
        </View>

    )
}


