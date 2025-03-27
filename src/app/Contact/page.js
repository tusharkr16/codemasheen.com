'use client';

import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobile: '',
      
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);
        
        try {
            const payload = {
                name: formData.fullName,
                email: formData.email,
                mobile: formData.mobile,
               
                message: formData.message
            };

            const response = await fetch('https://cm-s0hj.onrender.com/v1/query', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                console.log('Network response was not ok');
            }

            const data = await response.json();
            console.log('Success:', data);
            setSubmitStatus({ success: true, message: 'Message sent successfully!' });
            setFormData({
                fullName: '',
                email: '',
                mobile: '',
                
                message: ''
            });
        } catch (error) {
            console.log('Error:', error);
            setSubmitStatus({ success: false, message: 'Failed to send message. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen p-4 md:p-8">
            <h1 className="text-4xl text-blue-500 font-bold text-center mb-6">Let's Connect and Collaborate</h1>
            <div className="flex flex-col md:flex-row">
                {/* Form Section */}
                <div className="bg-white shadow-md p-6 rounded-lg w-full md:w-1/2">
                {submitStatus !== null && (
                        <div className={`mb-4 p-3 rounded ${submitStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                            {submitStatus.message}
                        </div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full border rounded p-2 outline-blue-500"
                                placeholder="Full Name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border rounded p-2 outline-blue-500"
                                placeholder="Email"
                            />
                        </div>
                        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                           
                            <div className="w-full ">
                                <label className="block text-sm font-medium">Mobile</label>
                                <input
                                    type="text"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2 outline-blue-500"
                                    placeholder="Country code followed by number"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full border rounded p-2 outline-blue-500"
                                placeholder="Message"
                                rows="4"
                            ></textarea>
                        </div>
                        <button onClick={handleSubmit} className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                         disabled={isSubmitting}>
                            {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}</button>
                    </form>
                </div>

                {/* Contact Info Section */}
                <div className="mt-6 md:mt-0 md:ml-8 w-full md:w-1/2">
                    <h2 className="text-xl font-semibold">Email Us</h2>
                    <p className="text-gray-600">For Projects, Partnerships And Collaboration Opportunities</p>
                    <p className="text-blue-600 font-semibold">info@codemasheen.com</p>
                    <p className="mt-4 text-gray-600">For Career Opportunities</p>
                    <p className="text-blue-600 font-semibold">info@codemasheen.com</p>

                    <h2 className="mt-6 text-xl font-semibold">Our Office</h2>


                    <div className="h-40 w-full rounded-lg overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14015.456457652781!2d77.30660547460746!3d28.683962481992874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfba4e41ffbe7%3A0xe839c4fb27d6dffb!2sDilshad%20Garden%2C%20Delhi%2C%20110095!5e0!3m2!1sen!2sin!4v1703423408395!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    <h3 className="mt-4 font-semibold">India Office</h3>
                    <p className="text-gray-600">Dilshad Garden , Delhi - 110095</p>

                    
                </div>
            </div>
        </div>
    );
}
