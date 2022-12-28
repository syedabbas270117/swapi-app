import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { People, Film, Planet, Vehicle, SpaceCraft, Species } from "../assets";
import MenuContainer from "../components/MenuContainer";

import ItemCarDontainer from "../components/ItemCarDontainer";
import axios from "axios";

const HomeScreen = () => {
  const [type, setType] = useState("people");
  const[peoples, setPeoples] = useState([]);

  const getPeoples = async() => {
    try {
      const response = await axios.get('https://swapi.dev/api/people/');
      console.log(response.data.results);
      setPeoples(response.data.results)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getPeoples();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <View className="flex-row items-center justify-between px-8">
        <View>
          <Text className="text-[40px] font-bold">Swapi</Text>
          <Text className="text-gray-400 text-[36px]">api implementation</Text>
        </View>
      </View>
        <ScrollView>
          <View className="flex-row flex-wrap items-center justify-between px-8 mt-8">
            <MenuContainer
              key={"people"}
              title="People"
              imageSrc={People}
              type={type}
              setType={setType}
            />
            <MenuContainer
              key={"vehicles"}
              title="Vehicles"
              imageSrc={Vehicle}
              type={type}
              setType={setType}
            />
            <MenuContainer
              key={"films"}
              title="Films"
              imageSrc={Film}
              type={type}
              setType={setType}
            />
            <MenuContainer
                key={"planets"}
                title="Planets"
                imageSrc={Planet}
                type={type}
                setType={setType}
            />
            <MenuContainer
                key={"starships"}
                title="Starships"
                imageSrc={SpaceCraft}
                type={type}
                setType={setType}
            />
            <MenuContainer
                key={"species"}
                title="Species"
                imageSrc={Species}
                type={type}
                setType={setType}
            />
          </View>

          <View>
            <View className="flex-row items-center justify-between px-4 mt-8">
              <Text className="text-[28px] font-bold">
                Peoples
              </Text>
            </View>

            <View className="px-2 mt-8 flex-row flex-wrap items-center justify-evenly">
              {peoples?.length > 0 ? (
                <>
                  {peoples?.map((data, i) => (
                    <ItemCarDontainer
                      key={i}
                      name={data?.name}
                      type={"peoples"}
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
          </View>
        </ScrollView>

    </SafeAreaView>
  );
};

export default HomeScreen;
