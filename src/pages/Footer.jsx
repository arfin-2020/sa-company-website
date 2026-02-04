import { Link } from "react-router-dom";
import logo from '../assets/logo.png'
function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-400 py-8">
       <footer className="bg-brand-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
             <img
                          src={logo}
                          alt="Logo"
                          className="w-40 h-15 object-contain rounded-lg "
                        />
            <span className="text-2xl font-heading font-bold block mb-4"
              >SALMAN AL ASKARI GROUP</span
            >
            <p className="text-gray-400 max-w-sm mb-6">
              A leading engineering and contracting force in the Sultanate of
              Oman, committed to delivering sustainable infrastructure and
              premium living spaces.
            </p>
          </div>
          <div>
            <h6
              className="font-bold text-brand-accent uppercase text-xs tracking-widest mb-6"
            >
              Quick Links
            </h6>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition"
                  >About Our History</Link
                >
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition"
                  >Our Expertise</Link
                >
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition"
                  >Featured Work</Link
                >
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition"
                  >Project Inquiries</Link
                >
              </li>
            </ul>
          </div>
          <div>
            <h6
              className="font-bold text-brand-accent uppercase text-xs tracking-widest mb-6"
            >
              Services
            </h6>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Civil Contracting</li>
              <li>Asphalt Paving</li>
              <li>Villa Construction</li>
              <li>Ready-Mix Logistics</li>
            </ul>
          </div>
        </div>
        <div
          className="border-t border-slate-800 pt-8 flex flex-col md:row justify-between items-center text-xs text-gray-500"
        >
          <p>&copy; 2026 Salman Al Askari Group. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-brand-accent">Privacy Policy</Link>
            <Link href="#" className="hover:text-brand-accent">Quality Assurance</Link>
            <Link href="#" className="hover:text-brand-accent">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
    </footer>
  );
}
export default Footer;