import { useDarkMode } from '../../utils/useDarkMode'

interface ReviewStepProps {
    formData: any
}

function ReviewStep({ formData }: ReviewStepProps) {
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }

    const InfoCard = ({ icon, label, value }: { icon: string; label: string; value: string }) => (
        <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
            <div className="flex items-start gap-3">
                <i className={`${icon} text-xl text-green-500 mt-1`}></i>
                <div className="flex-1">
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{label}</p>
                    <p className={`font-medium mt-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {value || <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>Not provided</span>}
                    </p>
                </div>
            </div>
        </div>
    )

    return (
        <div className="space-y-6">
            <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${isDarkMode ? 'bg-green-500/20' : 'bg-green-100'}`}>
                    <i className='bx bx-check-circle text-3xl text-green-500'></i>
                </div>
                <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Review Your Information</h2>
                <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Please verify all details before submitting</p>
            </div>

            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                <div>
                    <h3 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Basic Information</h3>
                    <div className="space-y-3">
                        <InfoCard icon="bx bx-building" label="Pharmacy Name" value={formData.pharmacyName} />
                        <InfoCard icon="bx bx-id-card" label="Registration Number" value={formData.registrationNumber} />
                        <InfoCard icon="bx bx-user" label="Owner Name" value={formData.ownerName} />
                    </div>
                </div>

                <div>
                    <h3 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Location</h3>
                    <div className="space-y-3">
                        <InfoCard icon="bx bx-home" label="Address" value={formData.address} />
                        <div className="grid grid-cols-2 gap-3">
                            <InfoCard icon="bx bx-buildings" label="City" value={formData.city} />
                            <InfoCard icon="bx bx-map-pin" label="State" value={formData.state} />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <InfoCard icon="bx bx-envelope" label="Postal Code" value={formData.postalCode} />
                            <InfoCard icon="bx bx-world" label="Country" value={formData.country} />
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Contact Information</h3>
                    <div className="space-y-3">
                        <InfoCard icon="bx bx-phone" label="Primary Phone" value={formData.primaryPhone} />
                        <InfoCard icon="bx bx-phone-call" label="Secondary Phone" value={formData.secondaryPhone} />
                        <InfoCard icon="bx bx-envelope" label="Email" value={formData.email} />
                        <InfoCard icon="bx bx-globe" label="Website" value={formData.website} />
                    </div>
                </div>

                <div>
                    <h3 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Additional Details</h3>
                    <div className="space-y-3">
                        <InfoCard icon="bx bx-time" label="Operating Hours" value={formData.operatingHours} />
                        <InfoCard icon="bx bx-message-square-detail" label="Description" value={formData.description} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewStep
