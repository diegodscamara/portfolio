import { ChangeEvent, FormEvent, useState } from 'react'
import {
	ErrorMessage,
	Form,
	Input,
	SucessMessage,
	TextArea,
	Title,
	Wrapper,
} from './styles'

import { Button } from '../../components/button'
import axios from 'axios'

interface Inputs {
	email: string
	subject: string
	message: string
}

/**
 * Contact form component
 * @return {JSX.Element}
 */
export function Contact(): JSX.Element {
	const [inputs, setInputs] = useState<Inputs>({
		email: '',
		subject: '',
		message: '',
	})

	const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
	const [errorMessage, setErrorMessage] = useState<string>('')

	/**
	 * Handles the onChange event of an input element.
	 *
	 * @param {ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} event - The event object.
	 * @return {void} This function does not return anything.
	 */
	function handleOnChange(
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	): void {
		event.persist()
		setInputs((prev: Inputs) => ({
			...prev,
			[event.target.id]: event.target.value,
		}))
	}

	/**
	 * Validates the form by checking if the email, subject, and message inputs are filled.
	 *
	 * @return {boolean} Returns true if all fields are filled, false otherwise.
	 */
	function validateForm(): boolean {
		if (!inputs.email || !inputs.subject || !inputs.message) {
			setErrorMessage('Please fill in all fields')
			return false
		}
		return true
	}

	/**
	 * Handle form submission.
	 *
	 * @param {FormEvent<HTMLFormElement>} event - The form submission event.
	 * @return {void} This function does not return anything.
	 */
	function handleOnSubmit(event: FormEvent<HTMLFormElement>): void {
		event.preventDefault()

		if (validateForm()) {
			axios
				.post('https://formbold.com/s/ozV0l', inputs)
				.then(() => {
					setIsSubmitted(true)
					setErrorMessage('')
				})
				.catch(() => {
					setIsSubmitted(false)
					setErrorMessage('An error occurred. Please try again.')
				})
		}
	}

	return (
		<Wrapper id='Contact'>
			<Title>Contact Me</Title>
			<Form onSubmit={handleOnSubmit}>
				{isSubmitted ? (
					<SucessMessage>Form submitted successfully!</SucessMessage>
				) : (
					<>
						<Input
							onChange={handleOnChange}
							value={inputs.email}
							id='email'
							type='email'
							name='email'
							placeholder='Email'
							required
						/>
						<Input
							onChange={handleOnChange}
							value={inputs.subject}
							id='subject'
							type='text'
							name='subject'
							placeholder='Subject'
							required
						/>
						<TextArea
							onChange={handleOnChange}
							value={inputs.message}
							id='message'
							name='message'
							placeholder='Type your message'
							rows={5}
							required
						/>
						<Button variant='filled' type='submit'>
							Send Message
						</Button>
						{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
					</>
				)}
			</Form>
		</Wrapper>
	)
}
