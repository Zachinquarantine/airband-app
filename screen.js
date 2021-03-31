import React from 'react';
import {View, StatusBar} from 'react-native';
import {useTheme} from '../theme/ThemeProvider';

export const Screen = (props) => {
    const {children} = props;

    // Using the custom hook we made to pull the theme colors
    const {colors, isDark} = useTheme();

    const containerStyle = {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        /* 
        * the colors.background value will change dynamicly with
        * so if we wanna change its value we can go directly to the pallet
        * this will make super easy to change and maintain mid or end project
        */
        backgroundColor: colors.background,
    };

    return (
        <>
            {/* We can also use the isDark prop to set the statusbar style accordingly */}
            <StatusBar animated barStyle={isDark ? "light-content" : "dark-content"}/>
            <View style={containerStyle}>
                {children}
            </View>
        </>
    );
}
