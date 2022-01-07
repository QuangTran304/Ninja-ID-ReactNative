import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import styles from './AppStyle';

function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.safeView}>
      <StatusBar barStyle='light-content' />
      <Text style={styles.appBar}>Ninja ID Card</Text>

      <View style={styles.mainScreen}>
        <Image
          source={{ uri: 'https://picsum.photos/200' }}
          style={styles.avatar}
        />

        <View style={styles.line} />

        <Text style={styles.title}>NAME</Text>
        <Text style={styles.textEntry}>Quang Tran</Text>

        <Text style={styles.title}>NINJA LEVEL</Text>
        <Text style={styles.textEntry}>{count}</Text>

        <View style={styles.emailBox}>
          <Ionicons name='mail' size={24} color='lightgray' />
          <Text style={styles.email}>sample-email@test.com</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setCount(count + 1)}
        >
          <AntDesign name='plus' size={20} color='white' />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default App;
