import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* About */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">About</h3>
                        <p className="text-sm text-gray-400">
                            Full-stack developer passionate about creating beautiful and functional web experiences.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition">Projects</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition">About</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Connect</h3>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-white transition">GitHub</a>
                            <a href="#" className="text-gray-400 hover:text-white transition">LinkedIn</a>
                            <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex justify-between items-center">
                    <p className="text-sm text-gray-500">
                        © {currentYear} Pamuditha Senanayaka. All rights reserved.
                    </p>
                    <p className="text-xs text-gray-600">
                        Designed & Built with React
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;