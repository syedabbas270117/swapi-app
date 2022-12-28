import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image, TouchableOpacity,
} from "react-native";
import React, {useEffect, useLayoutEffect, useState} from "react";
import { useNavigation } from "@react-navigation/native";
import ItemCarDontainer from "../components/ItemCarDontainer";
import axios from "axios";
import {FontAwesome5} from "@expo/vector-icons";

const RescourceScreen = ({ route }) => {
  const[resources, setResources] = useState([]);
  const navigation = useNavigation();

  const title = route?.params?.param;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const getResources = async() => {
    try {
      const response = await axios.get('https://swapi.dev/api/'+title+'/');
      console.log(response.data.results);
      setResources(response.data.results)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    console.log("route",route)
    getResources();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <View className="absolute flex-row inset-x-0 top-5 justify-between px-6">

      </View>
      <ScrollView className="flex-1 px-2 py-4">
          <View className="flex-row items-center px-4 mt-8">
            <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                className="w-10 h-10 rounded-md items-center justify-center bg-white"
            >
              <FontAwesome5 name="chevron-left" size={24} color="#06B2BE" />
            </TouchableOpacity>
            <Text className="text-[28px] font-bold">
              {title.toUpperCase()}
            </Text>
          </View>

          <View className="px-2 mt-6 flex-row flex-wrap items-center justify-evenly">
            {resources?.length > 0 ? (
                <>
                  {resources?.map((data, i) => (
                      <ItemCarDontainer
                          key={i}
                          name={data?.name ? data?.name : data?.title}
                          type={title}
                          url={data?.url}
                          data={data}
                      />
                  ))}
                </>
            ) : (
                <>
                </>
            )}
          </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RescourceScreen;
