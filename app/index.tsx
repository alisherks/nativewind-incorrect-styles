import { Stack } from 'expo-router';
import { View } from 'react-native';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <View className="bg-surface border-base h-[150px] w-[150px] border rounded-md items-center justify-center">
        <View className="absolute top-0 left-0 right-0 bottom-0 bg-black/40" />
        <View className="bg-surface border border-base rounded p-8 h-[50px] w-[50px]">
        </View>
      </View>
    </>
  );
}
