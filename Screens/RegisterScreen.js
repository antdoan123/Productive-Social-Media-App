import react from 'react'
import { TextInput, StyleSheet, Text, KeyboardAvoidingView, View} from 'react-native'

const RegisterScreen = () => {
	return(
		<KeyboardAvoidingView
			style={styles.container}
			behavior="padding"

		>
		<View>
			<Text>Register </Text>
		</View>
		</KeyboardAvoidingView>
	)
}

export default RegisterScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
})