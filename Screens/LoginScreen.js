import react, {useState} from 'react'
import { TextInput, Button, StyleSheet, Text, KeyboardAvoidingView, TouchableOpacity, View} from 'react-native'

const LoginScreen = () => {
	const [email, setEmail] = useState ('')
	const [password, setPassword] = useState ('')

	return(
		<KeyboardAvoidingView
			style={styles.container}
			behavior="padding"

		>
			<View style = {styles.titleContainer}>
				<Text style={styles.titleText}> POMODORO PAL </Text>
			</View>

			<View style={styles.inputContainer}>
				<TextInput
					placeholder = "Email"
					value = {email}
					onChangeText = {text => setEmail(text)}
					style={styles.input}
				/>
				<TextInput
					placeholder = "Password"
					value = {password}
					onChangeText = {text => setPassword(text)}
					style={styles.input}
					secureTextEntry
				/>
			</View>

			<View style={styles.buttonContainer}>
				<TouchableOpacity
					onPress = {() => { }}
					style={styles.button}
				>
					<Text style={styles.buttonText}>Login</Text>
				</TouchableOpacity>

				<TouchableOpacity
					onPress = {() => { }}
					style={styles.buttonOutline}
				>
					<Text style={styles.buttonOutlineText}>Need an Account? Click Here</Text>
				</TouchableOpacity>
			</View>

		</KeyboardAvoidingView>
	)
}

export default LoginScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#263238',
	},

	titleContainer: {
		padding: 30,
		justifyContent: 'center',
		alignItems: 'center',
	},

	titleText: {
		fontWeight: 'bold',
		color: '#B9BCC2',
		fontSize: 30,
	},

	inputContainer: {
		width: '80%'
	},

	input: {
		backgroundColor: 'white',
		paddingHorizontal: 15,
		paddingVertical: 10,
		borderRadius: 10,
		marginTop: 5,
	},

	buttonContainer: {
		width: '60%',
		justifyContent: 'center',
		marginTop: 40,
	},

	button: {
		backgroundColor: '#085097',
		width: '100',
		padding: 15,
		borderRadius: 10,
		alignItems: 'center',
	},

	buttonOutline: {
		marginTop: 15,
		alignItems: 'center',
	},

	buttonText: {
		color: '#B9BCC2',
		fontWeight: '700',
		fontSize: 16,
	},

	buttonOutlineText: {
		color: '#B9BCC2',
		fontWeight: '700',
		fontSize: 16,
	},
})