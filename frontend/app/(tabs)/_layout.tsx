import { StatusBar } from "expo-status-bar";
import { Redirect, Tabs } from "expo-router";
import { Image, Text, View } from "react-native";

import { icons } from "../../constants";
//import { Loader } from "../../components";
//import { useGlobalContext } from "../../context/GlobalProvider";

interface TabIconProps {
  icon: any;
  color: string;
  name: string;
  focused: boolean;
}

const TabIcon: React.FC<TabIconProps> = ({ icon, color, name, focused }) => {
  return (
    <View className="flex items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout: React.FC = () => {
  //const { loading, isLogged } = useGlobalContext();

  //if (!loading && !isLogged) return <Redirect href="/sign-in" />;

  return (
    <>
      <Tabs
      
        screenOptions={{
          tabBarActiveTintColor: "#eab308",
          tabBarInactiveTintColor: "#ffff",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#008000",
            borderTopWidth: 1,
            borderTopColor: "#008000",
            height: 75,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="chat"
          options={{
            title: "Chat",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.chat}
                color={color}
                name="Jamani Help"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="health"
          options={{
            title: "Health",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.health}
                color={color}
                name="Farm Health"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
{
      /*
      
          <Loader isLoading={loading} />
          */
       }
      <StatusBar backgroundColor="#f7fee7" style="dark" />
    </>
  );
};

export default TabsLayout;
