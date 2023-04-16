import { React, useState }from 'react'

const CheckOutInfo = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');


  return (
    <div className="bg-gray-100 rounded-lg p-6 m-16 w-2/5">
        <h1 className='font-semibold text-3xl mb-6'>Checking Your Information</h1>
        <label className="block font-medium mb-2">Full Name:</label>
        <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full px-4 py-2 mb-8 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-3" disabled/>

        <label className="block font-medium mb-2">Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 mb-8 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-3" disabled/>

        <label className="block font-medium mb-2">Phone:</label>
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full px-4 py-2 mb-8 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-3" disabled/>

    </div>
  )
}

export default CheckOutInfo