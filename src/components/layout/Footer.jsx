import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t border-white/5 bg-surface py-12">
            <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h3 className="text-lg font-bold text-white mb-2">Grace Gameonai</h3>
                    <p className="text-text-secondary text-sm">Building digital worlds & intelligent apps.</p>
                </div>
                <div className="text-text-secondary text-sm">
                    &copy; {new Date().getFullYear()} Grace Gameonai. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
