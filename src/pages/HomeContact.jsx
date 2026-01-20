import { useState } from 'react';

export default function HomeContact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields (Name, Email, and Message)');
      return;
    }
    
    // Format message for WhatsApp
    const whatsappMessage = `*New Proposal Request*%0A%0A*Name:* ${formData.name}%0A*Company:* ${formData.company || 'Not provided'}%0A*Email:* ${formData.email}%0A*Message:*%0A${formData.message}`;
    
    // WhatsApp number (Oman format: 968 + number)
    const whatsappNumber = '+96871389570';
    
    // Open WhatsApp with pre-filled message
    // window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
    // console.log(whatsappMessage);
    // Show success message
    setShowSuccess(true);
    
    // Reset form
    setFormData({
      name: '',
      company: '',
      email: '',
      message: ''
    });
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <>
      <section id="contact" className="mt-20 py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="reveal">
              <h2 className="text-4xl font-heading font-bold text-brand-dark mb-8">
                Let's Build the Future
              </h2>
              <p className="text-gray-600 mb-10">
                We are ready to handle your next infrastructure or development
                project with the highest level of professionalism.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-slate-100 rounded flex items-center justify-center mr-4 shrink-0 text-brand-accent">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-dark">Our Headquarters</h5>
                    <p className="text-gray-500 text-sm">Muscat, Sultanate of Oman</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-slate-100 rounded flex items-center justify-center mr-4 shrink-0 text-brand-accent">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-dark">Email Us</h5>
                    <p className="text-gray-500 text-sm">info@salmanalaskari.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-slate-100 rounded flex items-center justify-center mr-4 shrink-0 text-brand-accent">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-black">Call Support</h5>
                    <p className="text-gray-500 text-sm">+968 7138 9570</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal" style={{transitionDelay: "200ms"}}>
             

              <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-500 mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded focus:ring-2 focus:ring-brand-accent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-500 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded focus:ring-2 focus:ring-brand-accent outline-none"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-xs font-bold uppercase text-gray-500 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded focus:ring-2 focus:ring-brand-accent outline-none"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-xs font-bold uppercase text-gray-500 mb-1">
                    Message *
                  </label>
                  <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded focus:ring-2 focus:ring-brand-accent outline-none"
                  ></textarea>
                </div>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full bg-black text-white font-bold py-4 hover:bg-slate-800 transition rounded-sm shadow-xl"
                >
                  Send Proposal Request
                </button>
              </div>
               {showSuccess && (
                <div className="m-4 p-4 bg-green-50 border-l-4 border-green-500 rounded">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-bold text-green-800">Success! 🎉</p>
                      <p className="text-sm text-green-700">Your proposal request is being sent. We'll get back to you shortly!</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}