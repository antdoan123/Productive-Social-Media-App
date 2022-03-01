import react from 'react'
import { TextInput, StyleSheet, Text, KeyboardAvoidingView, View} from 'react-native'

const HomeScreen = () => {
	return(
		<KeyboardAvoidingView
			style={styles.container}
			behavior="padding"

		>
		<View>
			<Text></Text>
		</View>
		</KeyboardAvoidingView>
	)
}

export default HomeScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
})