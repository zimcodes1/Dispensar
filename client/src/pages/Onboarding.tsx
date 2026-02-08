import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDarkMode } from '../utils/useDarkMode'
import StepIndicator from '../components/onboarding/StepIndicator'
import BasicInfoStep from '../components/onboarding/BasicInfoStep'
import LocationStep from '../components/onboarding/LocationStep'
import ContactStep from '../components/onboarding/ContactStep'
import AdditionalDetailsStep from '../components/onboarding/AdditionalDetailsStep'
import ReviewStep from '../components/onboarding/ReviewStep'

function Onboarding() {
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }
    const navigate = useNavigate()
    const [currentStep, setCurrentStep] = useState(1)
    const totalSteps = 5

    const [formData, setFormData] = useState({
        pharmacyName: '',
        registrationNumber: '',
        ownerName: '',
        address: '',
        city: '',
        state: '',
        postalCode: '',
        country: '',
        primaryPhone: '',
        secondaryPhone: '',
        email: '',
        website: '',
        operatingHours: '',
        description: '',
        pharmacyImage: null
    })

    useEffect(() => {
        document.title = 'Pharmacy Onboarding | Dispensar'
    }, [])

    const handleNext = () => {
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1)
        }
    }

    const handlePrevious = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1)
        }
    }

    const handleSubmit = () => {
        // Handle form submission here
        console.log('Form submitted:', formData)
        // Navigate to dashboard after successful submission
        navigate('/dashboard')
    }

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <BasicInfoStep formData={formData} setFormData={setFormData} />
            case 2:
                return <LocationStep formData={formData} setFormData={setFormData} />
            case 3:
                return <ContactStep formData={formData} setFormData={setFormData} />
            case 4:
                return <AdditionalDetailsStep formData={formData} setFormData={setFormData} />
            case 5:
                return <ReviewStep formData={formData} />
            default:
                return <BasicInfoStep formData={formData} setFormData={setFormData} />
        }
    }

    const isStepValid = () => {
        switch (currentStep) {
            case 1:
                return formData.pharmacyName && formData.registrationNumber && formData.ownerName
            case 2:
                return formData.address && formData.city && formData.state && formData.country
            case 3:
                return formData.primaryPhone && formData.email
            case 4:
                return true // Optional fields
            case 5:
                return true
            default:
                return false
        }
    }

    return (
		<div
			className={`w-full p-4 min-h-dvh flex justify-center items-center ${isDarkMode ? "bg-linear-to-br from-gray-900 via-gray-800 to-gray-900" : "bg-linear-to-br from-slate-900 via-emerald-900 to-slate-900"}`}
		>
            <div className={`w-full max-w-2xl rounded-2xl shadow-2xl p-8 ${
                isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'
            }`}>
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <img src="/images/logo.png" alt="Logo" className="w-12 h-12" />
                        <div>
                            <h1 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                <span className="text-green-500">Dispensar</span> Setup
                            </h1>
                            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                Step {currentStep} of {totalSteps}
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={() => navigate('/login')}
                        className={`text-sm ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                    >
                        <i className='bx bx-x text-2xl'></i>
                    </button>
                </div>

                {/* Step Indicator */}
                <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />

                {/* Form Content */}
                <div className="mb-8">
                    {renderStep()}
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between gap-4">
                    <button
                        onClick={handlePrevious}
                        disabled={currentStep === 1}
                        className={`px-6 py-3 rounded-lg font-medium transition-all ${
                            currentStep === 1
                                ? isDarkMode
                                    ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                : isDarkMode
                                ? 'bg-gray-700 text-white hover:bg-gray-600'
                                : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                        }`}
                    >
                        <i className='bx bx-left-arrow-alt mr-2'></i>
                        Previous
                    </button>

                    {currentStep < totalSteps ? (
                        <button
                            onClick={handleNext}
                            disabled={!isStepValid()}
                            className={`px-6 py-3 rounded-lg font-medium transition-all ${
                                !isStepValid()
                                    ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                                    : 'bg-green-500 text-white hover:bg-green-600 shadow-md hover:shadow-lg'
                            }`}
                        >
                            Next
                            <i className='bx bx-right-arrow-alt ml-2'></i>
                        </button>
                    ) : (
                        <button
                            onClick={handleSubmit}
                            className="px-6 py-3 rounded-lg font-medium bg-green-500 text-white hover:bg-green-600 shadow-md hover:shadow-lg transition-all"
                        >
                            Complete Setup
                            <i className='bx bx-check ml-2'></i>
                        </button>
                    )}
                </div>

                {/* Progress Text */}
                <div className={`text-center mt-6 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {currentStep < totalSteps ? (
                        <p>Fill in the required fields to continue</p>
                    ) : (
                        <p>Review your information and complete the setup</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Onboarding
