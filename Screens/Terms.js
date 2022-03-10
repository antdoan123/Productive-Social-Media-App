import react, {useState} from 'react'
import { Platform, Image, TextInput, Button, StyleSheet, Text, KeyboardAvoidingView, TouchableOpacity, View} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient';
import {useNavigation} from '@react-navigation/core';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Terms = () => {
	return(
		<LinearGradient
			colors={['#373B44', '#4286f4', '#373B44']}

		>
			<KeyboardAvoidingView
				style={styles.container}
				behavior="padding"
			>
			<View>
				<Text style={styles.Title}>
					Welcome to TODOLU!
				</Text>

				<Text style={styles.paragraph}>
					These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (&quot;you&quot;) 
					and TODOLU (&quot;we,&quot; &quot;us&quot; or &quot;our&quot;), concerning your access to and use of the TODOLU application as well 
					as any other media form, media channel, mobile website or web application related, linked, or otherwise connected thereto (collectively, the &quot;TODOLU&quot;).
				</Text>

				<Text style={styles.paragraph}>
					You agree that by accessing TODOLU, you have read, understood, and agree to be bound by all of these Terms of Use. If you do not agree with all of these Terms of Use, 
					then you are expressly prohibited from using TODOLU and you must discontinue use immediately.
				</Text>

				<Text style={styles.paragraph}>
					Supplemental Terms of Use or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. 
					We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Use at any time and for any reason.
				</Text>

				<Text style={styles.paragraph}>
					We will alert you about any changes by updating the &quot;Last updated&quot; date of these Terms of Use, and you waive any right to receive specific 
					notice of each such change.
				</Text>

				<Text style={styles.paragraph}>
					It is your responsibility to periodically review these Terms of Use to stay informed of updates. You will be subject to, and will be deemed to 
					have been made aware of and to have accepted, the changes in any revised Terms of Use by your continued use of the Site after the date such revised 
					Terms of Use are posted.
				</Text>

				<Text style={styles.paragraph}>
					The information provided on the Site is not intended for distribution to or use by any person or entity in any jurisdiction or country where such
					distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country.
				</Text>

				<Text style={styles.paragraph}>
					Accordingly, those persons who choose to access the Site from other locations do so on their own initiative and are solely responsible for compliance with 
					local laws, if and to the extent local laws are applicable.
				</Text>

				<Text style={styles.paragraph}>
				ARBITRATION NOTICE: YOU AGREE THAT DISPUTES BETWEEN YOU AND US WILL BE RESOLVED BY BINDING, INDIVIDUAL ARBITRATION AND YOU WAIVE YOUR RIGHT TO PARTICIPATE IN A CLASS ACTION LAWSUIT OR CLASS-WIDE ARBITRATION. 
				WE EXPLAIN SOME EXCEPTIONS AND HOW YOU CAN OPT OUT OF ARBITRATION BELOW.
				</Text>
			</View>
			</KeyboardAvoidingView>
		</LinearGradient>
	)
}

export default Terms

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},

	Title: {
		color: 'white',
		margin: 24,
		fontSize: 22,
		textAlign: 'center',	
		fontWeight: '700',
	},

	paragraph: {
		color: 'white',
		margin: 24,
		fontSize: 18,
		textAlign: 'center',		
	},
})