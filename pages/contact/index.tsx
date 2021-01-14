import React from 'react'
import Layout from '../../components/ui/Layout'
import SectionDescription from '../../components/ui/SectionDescription';
import useForm from '../../hooks/useForm';
import { useTranslation } from '../../hooks/useTranslation'

const Contact = () => {
	const { t } = useTranslation();
	const initialState = {
		firstName: "",
		lastName: "",
		subject: "",
		message: "",
	}
	const [formValues, handleInputChange, resetForm] = useForm(initialState)
	const handleContactFormSubmit = () => {
		try {
			window.open(`mailto:juanzitelli7@gmail.com?subject=${formValues.name ?? ""}&body=${formValues.message ?? ""}`)
		} catch (error) {

		}
	}
	return (
		<Layout title={`Contact`}>
			<section className="p-5 sm:p-8 md:p-16 lg:p-32">
				<SectionDescription description={t.contact.emailFormTitle} title={t.contact.title} subtitle={t.contact.subtitle} />
				<div>
					<div className="mt-5 md:mt-0 md:col-span-2">
						<form onSubmit={handleContactFormSubmit}>
							<div className="shadow sm:rounded-md sm:overflow-hidden">
								<div className="px-4 py-5 space-y-6 sm:p-6 md:px-24 lg:px-48">
									<div className="flex flex-col justify-evenly">
										<div className="my-3">
											<label htmlFor="email_address" className="block text-sm font-medium text-white">{t.contact.fields.email}</label>
											<input type="email" name="email_address" id="email_address" autoComplete="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black" placeholder={"email@email.com"} />
										</div>

										<div className="my-3">
											<label htmlFor="first_name" className="block text-sm font-medium text-white">{t.contact.fields.firstName}</label>
											<input type="text" name="first_name" id="first_name" autoComplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black" placeholder="Juan Agustín" />
										</div>

										<div className="my-3">
											<label htmlFor="last_name" className="block text-sm font-medium text-white">{t.contact.fields.lastName}</label>
											<input type="text" name="last_name" id="last_name" autoComplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black" placeholder="Zitelli" />
										</div>
										<div className="my-3">
											<label htmlFor="about" className="block text-sm font-medium text-white">
												{t.contact.fields.message}
											</label>
											<textarea id="about" name="about" rows={3} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md text-black" placeholder=""></textarea>
										</div>
									</div>
									<div className="py-2 text-right sm:px-6">
										<button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition ease-300">{`${t.contact.sendButtonText}`}</button>
									</div>
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
