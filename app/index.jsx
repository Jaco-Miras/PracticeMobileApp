import {
  Button,
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView className="h-full bg-slate-100 flex items-center justify-center flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-row flex-wrap justify-center gap-x-6 mt-10">
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => alert("Pressed!")}
            className="bg-white p-4 border border-gray-200 w-[100px] h-20 flex items-center justify-center rounded"
          >
            <Text className="text-center">1</Text>
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => alert("Pressed!")}
            className="bg-white p-4 border border-gray-200 w-[100px] h-20 flex items-center justify-center rounded"
          >
            <Text className="text-center">2</Text>
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => alert("Pressed!")}
            className="bg-white p-4 border border-gray-200 w-[100px] h-20 flex items-center justify-center rounded"
          >
            <Text className="text-center">3</Text>
          </TouchableHighlight>
        </View>

        <View className="">
          <Text>sss</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
