import { View, Text} from "react-native";
import React from "react";

const ItemCarDontainer = ({ name, type, url, data }) => {

  return (
      <View className="rounded-md border border-gray-300 space-y-2 px-3 py-2 shadow-md bg-white w-[320px] my-2">
      {name ? (
        <>
          <Text className="text-[#428288] text-[18px] font-bold">
              Title: {name}
          </Text>

          <View className="flex-row items-center space-x-1">
            <Text className="text-[#428288] text-[14px] font-bold">
              Type: {type}
            </Text>
          </View>
          <View className="flex-row items-center space-x-1">
            <Text className="text-[#428288] text-[14px] font-bold">
              Url: {url}
            </Text>
          </View>
        </>
      ) : (
        <></>
      )}
        </View>
  );
};

export default ItemCarDontainer;
