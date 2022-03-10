import react, {useState} from 'react'
import { Platform, Image, TextInput, Button, StyleSheet, Text, KeyboardAvoidingView, TouchableOpacity, View} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient';

const LoginScreen = () => {
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
				<Image 
				style={styles.logo}
				source={require('../assets/Logo.png')}/>
				<Text style={styles.titleText}> TODOLU </Text>
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
				<TouchableOpacity
					onPress = {() => { }}
				>
					<Text style ={styles.forgetlink}> Forgot Password? </Text>
				</TouchableOpacity>
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

			<View style={styles.bottomContainer}>
				<Text style={styles.footerText}>Created Using React Native </Text>					
			</View>
		</KeyboardAvoidingView>
		 </LinearGradient> //remove this code to remove background
	)
}

export default LoginScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		//backgroundColor: '#263238',
	},

	logo: {
	resizeMode: 'contain',
	width: 169, 
	height: 183, 
	shadowOffset: {
		width: 0,
		height: 0,
	},
	shadowOpacity: 0.1,
	shadowRadius: 2,
	},

	titleContainer: {
		padding: 10,
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
		paddingVertical: 12,
		borderRadius: 15,
		marginTop: 15,
	},

	forgetlink: {
		marginTop: 10,
		color: '#B9BCC2',
		fontSize: 14,
		textAlign: 'right',
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