// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import { useRouter } from 'expo-router';

// export default function Login() {
//   const router = useRouter();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>
//       <Text style={styles.subtitle}>Good to see you back!</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         placeholderTextColor="#aaa"
//         value={email}
//         onChangeText={setEmail}
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         placeholderTextColor="#aaa"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//       />

//       <TouchableOpacity style={styles.button}>
//         <Text style={styles.buttonText}>Next</Text>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={() => router.push('/register')}>
//         <Text style={styles.createAccount}>Create account here</Text>
//       </TouchableOpacity>

//       <TouchableOpacity>
//         <Text style={styles.cancel}>Cancel</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 30, justifyContent: 'center', backgroundColor: '#fff' },
//   title: { fontSize: 34, fontWeight: 'bold', color: '#000' },
//   subtitle: { fontSize: 16, color: '#555', marginBottom: 30 },
//   input: {
//     backgroundColor: '#f3f3f3',
//     borderRadius: 10,
//     paddingHorizontal: 15,
//     paddingVertical: 12,
//     marginBottom: 15,
//     fontSize: 16,
//   },
//   button: {
//     backgroundColor: '#00A651',
//     paddingVertical: 14,
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
//   createAccount: { marginTop: 15, textAlign: 'center', color: '#00A651', fontSize: 14 },
//   cancel: { marginTop: 10, textAlign: 'center', color: '#999' },
// });




import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>Good to see you back!</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={() => router.push('/profile')}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/register')}>
        <Text style={styles.createAccount}>Create account here</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.cancel}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 30, justifyContent: 'center', backgroundColor: '#fff' },
  title: { fontSize: 34, fontWeight: 'bold', color: '#000' },
  subtitle: { fontSize: 16, color: '#555', marginBottom: 30 },
  input: {
    backgroundColor: '#f3f3f3',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#00A651',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  createAccount: { marginTop: 15, textAlign: 'center', color: '#00A651', fontSize: 14 },
  cancel: { marginTop: 10, textAlign: 'center', color: '#999' },
});
