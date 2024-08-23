import React, { useState } from 'react';
import Select from 'react-select';
import { Country, State, City } from 'country-state-city';

const ShippingForm = () => {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);

    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        postalCode: '',
        address: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            ...formData,
            country: selectedCountry?.name,
            state: selectedState?.name,
            city: selectedCity?.name,
        });
    };

    const countryOptions = Country.getAllCountries().map((country) => ({
        label: country.name,
        value: country.isoCode,
    }));

    const stateOptions = selectedCountry
        ? State.getStatesOfCountry(selectedCountry.value).map((state) => ({
            label: state.name,
            value: state.isoCode,
        }))
        : [];

    const cityOptions = selectedState
        ? City.getCitiesOfState(selectedCountry.value, selectedState.value).map((city) => ({
            label: city.name,
            value: city.name,
        }))
        : [];

    return (
        <form onSubmit={handleSubmit} className='text-sm'>
            <div className='w-full flex md:flex-row gap-5'>
                <div className="mb-4 w-1/2">
                    <label className="block text-gray-700 text-xs font-semibold mb-2" htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                        className="w-full px-3 py-2 rounded-lg shadow-md outline-none" />
                </div>
                <div className="mb-4 w-1/2">
                    <label className="block text-gray-700 text-xs font-semibold mb-2" htmlFor="mobile">Mobile Number</label>
                    <input type="tel" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} required
                        className="w-full px-3 py-2 rounded-lg shadow-md outline-none" />
                </div>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-xs font-semibold mb-2" htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                    className="w-full px-3 py-2 rounded-lg shadow-md outline-none" />
            </div>

            <div className='w-full flex md:flex-row gap-5'>
                <div className="mb-4 w-1/2">
                    <label className="block text-gray-700 text-xs font-semibold mb-2" htmlFor="country">Country</label>
                    <Select
                        id="country"
                        options={countryOptions}
                        value={selectedCountry}
                        onChange={(option) => {
                            setSelectedCountry(option);
                            setSelectedState(null); // Reset state when country changes
                            setSelectedCity(null); // Reset city when country changes
                        }}
                        placeholder="Select Country"
                        className="w-full rounded-lg shadow-md outline-none"
                    />
                </div>
                <div className="mb-4 w-1/2">
                    <label className="block text-gray-700 text-xs font-semibold mb-2" htmlFor="state">State</label>
                    <Select
                        id="state"
                        options={stateOptions}
                        value={selectedState}
                        onChange={(option) => {
                            setSelectedState(option);
                            setSelectedCity(null); // Reset city when state changes
                        }}
                        placeholder="Select State"
                        className="w-full rounded-lg shadow-md outline-none"
                        isDisabled={!selectedCountry}
                    />
                </div>
            </div>

            <div className='w-full flex md:flex-row gap-5'>
                <div className="mb-4 w-1/2">
                    <label className="block text-gray-700 text-xs font-semibold mb-2" htmlFor="city">City</label>
                    <Select
                        id="city"
                        options={cityOptions}
                        value={selectedCity}
                        onChange={setSelectedCity}
                        placeholder="Select City"
                        className="w-full rounded-lg shadow-md outline-none"
                        isDisabled={!selectedState}
                    />
                </div>

                <div className="mb-4 w-1/2">
                    <label className="block text-gray-700 text-xs font-semibold mb-2" htmlFor="postalCode">Postal Code</label>
                    <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 rounded-lg shadow-md outline-none"
                    />
                </div>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-xs font-semibold mb-2" htmlFor="address">Address</label>
                <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 rounded-lg shadow-md outline-none"
                />
            </div>

            {/* <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg">
                Submit
            </button> */}
        </form>
    );
};

export default ShippingForm;
