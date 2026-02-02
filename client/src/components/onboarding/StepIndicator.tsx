import { useDarkMode } from '../../utils/useDarkMode'

interface StepIndicatorProps {
    currentStep: number
    totalSteps: number
}

function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }
    
    return (
        <div className="flex items-center justify-center gap-1 sm:gap-2 mb-8 hide-scrollbar overflow-x-auto px-4">
            {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
                <div key={step} className="flex items-center shrink-0">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-semibold text-sm sm:text-base transition-all ${
                        step === currentStep 
                            ? 'bg-green-500 text-white scale-110' 
                            : step < currentStep 
                            ? 'bg-green-500 text-white' 
                            : isDarkMode 
                            ? 'bg-gray-700 text-gray-400' 
                            : 'bg-gray-200 text-gray-500'
                    }`}>
                        {step < currentStep ? <i className='bx bx-check text-lg sm:text-xl'></i> : step}
                    </div>
                    {step < totalSteps && (
                        <div className={`w-6 sm:w-12 h-1 mx-0.5 sm:mx-1 ${
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
