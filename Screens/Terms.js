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

				<Text style={styles.Title}>
					The TODOLU Service
				</Text>

				<Text style={styles.paragraph}>
					We agree to provide you with the TODOLU Service. The Service includes all of the TODOLU products, features, applications, services, technologies, and software that we provide to advance 
					TODOLU's mission: To promote productivity and success. The Service is made up of the following aspects:
				</Text>

				<Text style={styles.paragraph}> 
					<Text style={styles.Title}>
						&bull; Offering personalized opportunities to create, connect, communicate, discover, and share. 
					</Text>
						People are different. We understand that life can get very chaotic and that each individuals managed their schedule differnetly.
						So we build a system that try to help you manage your time better and to give other people an idea on how they should manage 
						their time as well. In order to do that, we allow you to create, plan, customize, and share your schedule to others.
						This way allows you to experience TODOLU on and off the application.
				</Text>

				<Text style={styles.paragraph}>
					<Text style={styles.Title}>
						&bull; Fostering a positive and safe community.
					</Text>
						Working in a community can be very helpful. However, we understand that there are people that will abuse and misuse
						our community. We will constantly monitor and work to combat abuse and violations of our Terms and policies. We use 
						all the information we have-including your information-to try to keep our platform secure. We also may share information 
						about misuse or harmful content with law enforcement.
				</Text>

				<Text style={styles.paragraph}>
					<Text style={styles.Title}>
						&bull; Help dealing with stress and anxiety.
					</Text>		
						Life is tough. We get that. From working to studying to dealing with personal issues, we understand that many people will
						stress and/or experience anxiety. To help out a bit, we implemented a podomoro timer that allows individuals to take a proper
						break in between study/work time. We also implemented a gaming system to help destressed and escape from reality a bit.
				</Text>

				<Text style={styles.paragraph}>
					<Text style={styles.Title}>
						&bull; Research and innovation
					</Text>		
					We use the information we have to study our Service and collaborate with others on research to make our Service better and 
					contribute to the well-being of our community.
				</Text>

				<Text style={styles.Title}>
					Commitments and Requirements
				</Text>

				<Text style={styles.paragraph}>
					TODOLU is committed to provide you a safe and productive community. In exchanged, we asked 
					that you make the below commitments to us.
				</Text>

				<Text style={styles.Title}>
					Who Can Use TODOLU.
				</Text>	

				<Text style={styles.paragraph}>
					As much as we want everyone to be able to use our applications. We also want it to be safe, secure, and in accordance with
					the law. So, we need you to commit to a few restrictions in order to be a part of our community.
				</Text>

				<Text style={styles.paragraph}>
					&bull; You must be at least 13 years old
				</Text>

				<Text style={styles.paragraph}>
					&bull; You must not be prohibited from receiving any aspect of our Service under applicable laws or engaging in payments 
					related Services if you are on an applicable denied party listing.
				</Text>

				<Text style={styles.paragraph}>
					&bull; We must not have previously disabled your account for violation of law or any of our policies.
				</Text>

				<Text style={styles.paragraph}>
					&bull; You must not be a convicted sex offender.	
				</Text>

				<Text style={styles.Title}>
					Who Can Use TODOLU.
				</Text>	

				<Text style={styles.paragraph}>
					As much as we want everyone to be able to use our applications. We also want it to be safe, secure, and in accordance with
					the law. So, we need you to commit to a few restrictions in order to be a part of our community.
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