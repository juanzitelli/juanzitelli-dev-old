import axios from 'axios';
import React, { FormEvent, useState } from 'react'
import Layout from '../../components/ui/Layout'
import SectionDescription from '../../components/ui/SectionDescription';
import useForm from '../../hooks/useForm';
import { useTranslation } from '../../hooks/useTranslation'
import Loader from 'react-loader-spinner'

interface useFormContactInterface {
	firstName: string; lastName: string; email: string; message: string;
}

const Contact = () => {
	const [emailSendStatus, setEmailSendStatus] = useState("")
	const [emailSendError, setEmailSendError] = useState(false)
	const [isEmailSending, setIsEmailSending] = useState(false)
	const { t } = useTranslation();
	const initialState: useFormContactInterface = {
		firstName: "",
		lastName: "",
		email: "",
		message: "",
	}
	const [formValues, handleInputChange, resetForm] = useForm<useFormContactInterface>(initialState)
	const { firstName, lastName, email, message } = formValues;
	const handleContactFormSubmit = async (e: FormEvent) => {
		setIsEmailSending(true)
		try {
			e.preventDefault();
			await axios.post('/api/contact', {
				firstName, lastName, email, message
			})
			resetForm();
			setIsEmailSending(false)
			setEmailSendStatus(t.contact.email.emailSentSuccess)
			setEmailSendError(false);
		} catch (error) {
			setIsEmailSending(false)
			setEmailSendStatus(t.contact.email.emailSentError)
			setEmailSendError(true);
			console.error(error)
		}
	}
	return (
		<Layout title={`${t.contact.title}`}>
			<section className="p-5 sm:p-8 md:p-16 lg:p-32">
				<SectionDescription description={t.contact.emailFormTitle} title={t.contact.title} subtitle={t.contact.subtitle} />
				<div>
					<div className="mt-5 md:mt-0 md:col-span-2">
						<form onSubmit={handleContactFormSubmit}>
							<div>
								<div className="px-4 py-5 space-y-6 sm:p-6 md:px-48 lg:px-64">
									<div className="flex flex-col justify-evenly">
										<div className="my-3">
											<label htmlFor="email" className="block text-sm font-medium text-white">{t.contact.fields.email}</label>
											<input onChange={handleInputChange} value={email} type="email" name="email" id="email" autoComplete="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black" placeholder={"email@email.com"} />
										</div>

										<div className="my-3">
											<label htmlFor="firstName" className="block text-sm font-medium text-white">{t.contact.fields.firstName}</label>
											<input onChange={handleInputChange} value={firstName} type="text" name="firstName" id="firstName" autoComplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black" placeholder="John" />
										</div>

										<div className="my-3">
											<label htmlFor="lastName" className="block text-sm font-medium text-white">{t.contact.fields.lastName}</label>
											<input onChange={handleInputChange} value={lastName} type="text" name="lastName" id="lastName" autoComplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black" placeholder="Doe" />
										</div>
										<div className="my-3">
											<label htmlFor="message" className="block text-sm font-medium text-white">
												{t.contact.fields.message}
											</label>
											<textarea onChange={handleInputChange} value={message} id="message" name="message" rows={3} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md text-black" placeholder=""></textarea>
										</div>
									</div>
									<div className=" flex flex-row justify-end py-2 text-right sm:px-6">
										{
											!isEmailSending ?
												<button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition ease-300">{`${t.contact.email.sendButtonText}`}</button>
												: <Loader
													type="ThreeDots"
													color="#059669"
													width={50}
													height={50}
													key="loader"
													timeout={3000} //3 secs
												/>
										}
									</div>
									<span className={`${emailSendError ? "text-red-500" : "text-green-500"}`}>{emailSendStatus}</span>
								</div>

							</div>
						</form>
					</div>
				</div>
			</section>

		</Layout>
	)
}

export default Contact
