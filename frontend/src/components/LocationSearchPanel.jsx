import React from 'react'

const LocationSearchPanel = ({ suggestions, setVehiclePanel, setPanelOpen, setPickup, setDestination, activeField }) => {

    const handleSuggestionClick = (suggestion) => {
        if (activeField === 'pickup') {
            setPickup(suggestion)
        } else if (activeField === 'destination') {
            setDestination(suggestion)
        }
        setVehiclePanel(true)
        setPanelOpen(false)
    }

    const sug = ["lorem sdhfhfk sdjhf jkd fhkj dj kjhdf"]

    return (
        <div>
            {/* Display fetched suggestions */}
            {
                suggestions.map((elem, idx) => (
                    <div key={idx} onClick={() => handleSuggestionClick(elem)} className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
                        <h3 className='bg-[#eee] h-10 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill"></i></h3>
                        <h6 className='text-lg'>{elem}</h6>
                    </div>
                ))
            }
        </div>
    )
}

export default LocationSearchPanel