import react, {useState} from 'react'
import { Platform, Image, TextInput, Button, StyleSheet, Text, KeyboardAvoidingView, TouchableOpacity, View} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient';

const RegisterScreen = () => {
	const [email, setEmail] = useState ('')
	const [password, setPassword] = useState ('')

	return(
		<LinearGradient
			colors={['#373B44', '#4286f4', '#373B44']}
			style={{
			flex: 1,
			}}
		>
		<KeyboardAvoidingView
			style={styles.container}
			behavior="padding"
		>
			<View style = {styles.titleContainer}>
				<Text style={styles.titleText}> WELCOME! </Text>
			</View>

			<View style={styles.inputContainer}>
				<TextInput
					placeholder = "Enter First Name..."
					value = {email}
					onChangeText = {text => setEmail(text)}
					style={styles.input}
				/>
				<TextInput
					placeholder = "Enter Last Name..."
					value = {password}
					onChangeText = {text => setPassword(text)}
					style={styles.input}
				/>
				<TextInput
					placeholder = "Enter Email..."
					value = {email}
					onChangeText = {text => setEmail(text)}
					style={styles.input}
				/>
				<TextInput
					placeholder = "Enter Password..."
					value = {password}
					onChangeText = {text => setPassword(text)}
					style={styles.input}
					secureTextEntry
				/>
				<TextInput
					placeholder = "Re-Enter Password..."
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
					<Text style={styles.buttonText}>Register</Text>
				</TouchableOpacity>

				<TouchableOpacity
					onPress = {() => { }}
					style={styles.buttonOutline}
				>
					<Text style={styles.buttonOutlineText}>Have an Account? Click Here</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.bottomContainer}>
				<Text style={styles.footerText}>Created Using React Native </Text>					
			</View>
		</KeyboardAvoidingView>
		 </LinearGradient> //remove this code to remove background
	)
}

export default RegisterScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		marginTop: 30,
		//backgroundColor: '#263238',
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
		paddingVertical: 15,
		borderRadius: 15,
		marginTop: 20,
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

	bottomContainer:{
		width: '100%',
		height: 50,
		position: 'absolute',
		bottom: 0,
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: 50,
		backgroundColor: '#085097',
	},


	footerText: {
		justifyContent: 'center',
		alignItems: 'center',
		color: '#B9BCC2',
		fontSize: 14,
	},

})