import { createStackNavigator } from "@react-navigation/stack";

import CartScreen from "../screens/Cart/Cart";
//import CartDetailedScreen from "../screens/Cart/CartDetailed";

const CStack = createStackNavigator();

const CartStack = () => {
  return (
    <CStack.Navigator detachInactiveScreens>
      <CStack.Screen
        name="cart"
        component={CartScreen}
        options={{ headerShown: false }}
      />
      {/* <CStack.Screen
        name="cartDetailed"
        component={CarttDetailedScreen}
        options={{ headerShown: false }}
      /> */}
    </CStack.Navigator>
  );
};

export default CartStack;
