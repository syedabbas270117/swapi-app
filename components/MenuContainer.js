import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import {useNavigation} from "@react-navigation/native";

const MenuContainer = ({ title, imageSrc, type, setType }) => {
    const navigation = useNavigation();
    const handlePress = () => {
      setType(title.toLowerCase());
    };
    return (
      <TouchableOpacity
        className="items-center justify-center space-y-2"
        onPress={() => {
          handlePress
          navigation.navigate("Resource",{ param: title.toLowerCase() })
        }
        }
      >
      <View
        className={`w-24 h-24 p-2 shadow-sm rounded-full items-center justify-center ${
          type === title.toLowerCase() ? "bg-gray-200" : ""
        }`}
      >
        <Image source={imageSrc} className="w-full h-full object-contain" />
      </View>
      <Text className="text-gray-400 text-xl font-semibold">{title}</Text>
    </TouchableOpacity>
  );
};

export default MenuContainer;
