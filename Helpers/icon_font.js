import { createIconSetFromFontello } from "@expo/vector-icons";
import fontello from "../assets/config.json";
// import { useFonts } from 'expo-font';

// const [fontsLoaded] = useFonts({
//     IcoMoon: require('../assets/fonts/aquirebox.ttf'),
//   });

const Icon = createIconSetFromFontello(fontello, "aquirebox", "aquirebox.ttf");

export default Icon;
