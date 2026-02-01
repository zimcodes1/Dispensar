import { useDarkMode } from '../../utils/useDarkMode'

interface StepIndicatorProps {
    currentStep: number
    totalSteps: number
}

function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }
    
    return (
        <div className="flex items-center justify-center gap-2 mb-8">
            {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
                <div key={step} className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                        step === currentStep 
                            ? 'bg-green-500 text-white scale-110' 
                            : step < currentStep 
                            ? 'bg-green-500 text-white' 
                            : isDarkMode 
                            ? 'bg-gray-700 text-gray-400' 
                            : 'bg-gray-200 text-gray-500'
                    }`}>
                        {step < currentStep ? <i className='bx bx-check text-xl'></i> : step}
                    </div>
                    {step < totalSteps && (
                        <div className={`w-12 h-1 mx-1 ${
                            step < currentStep 
                                ? 'bg-green-500' 
                                : isDarkMode 
                                ? 'bg-gray-700' 
                                : 'bg-gray-200'
                        }`}></div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default StepIndicator
