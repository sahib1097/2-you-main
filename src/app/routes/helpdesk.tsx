import { useEffect } from "react";
import type { Route } from "./+types/home";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router";
import Footer from "../components/Footer";
import { faRocket, faMagnifyingGlass, faCreditCard, faShield, faShieldHalved, faFileLines } from "@fortawesome/free-solid-svg-icons";

export function meta({}: Route.MetaArgs) {
    return [
      { title: "2YOU" },
      { name: "description", content: "Welcome to 2YOU!" },
    ];
  }

  export default function HelpDesk() {
    return(
        <div id="main-container" className="min-h-screen bg-white">
            <header id="header" className="fixed w-full bg-white border-b z-50">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                        <Link to="/" className="flex items-center">
                            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                                <span className="text-white text-2xl font-bold">2</span>
                            </div>
                            <span className="ml-2 text-2xl font-bold text-red-600">YOU</span>
                        </Link>
                        </div>
                        <div className="flex items-center space-x-6">
                            <button className="text-gray-600 hover:text-red-600"></button>
                            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
                                Submit a request
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <section id="hero" className="pt-24 pb-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">How can we help you?</h1>
                        <div className="relative">
                            <input type="text" placeholder="Search for answers..." className="w-full text-gray-400 px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-red-600 focus:outline-none shadow-sm"/>
                            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-600">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="fa-solid text-lg"></FontAwesomeIcon>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="categories" className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div id="category-1" className="bg-white p-8 rounded-xl border hover:border-red-600 transition-all">
                            <div className="text-red-600 mb-4">
                                <FontAwesomeIcon icon={faRocket} className="fa-solid text-2xl"></FontAwesomeIcon>
                            </div>
                            <h3 className="text-xl text-black font-bold mb-3">Getting Started</h3>
                            <ul className="space-y-3">
                                <li><span  className="text-gray-600 hover:text-red-600 cursor-pointer">Quick Start Guide</span></li>
                                <li><span  className="text-gray-600 hover:text-red-600 cursor-pointer">Account Setup</span></li>
                                <li><span  className="text-gray-600 hover:text-red-600 cursor-pointer">Basic Features</span></li>
                            </ul>
                        </div>

                        <div id="category-2" className="bg-white p-8 rounded-xl border hover:border-red-600 transition-all">
                            <div className="text-red-600 mb-4">
                                <FontAwesomeIcon icon={faCreditCard} className="fa-solid text-2xl"></FontAwesomeIcon>
                            </div>
                            <h3 className="text-xl text-black font-bold mb-3">Account & Billing</h3>
                            <ul className="space-y-3">
                                <li><span  className="text-gray-600 hover:text-red-600 cursor-pointer">Subscription Plans</span></li>
                                <li><span  className="text-gray-600 hover:text-red-600 cursor-pointer">Payment Methods</span></li>
                                <li><span  className="text-gray-600 hover:text-red-600 cursor-pointer">Billing FAQ</span></li>
                            </ul>
                        </div>

                        <div id="category-3" className="bg-white p-8 rounded-xl border hover:border-red-600 transition-all">
                            <div className="text-red-600 mb-4">
                                <FontAwesomeIcon icon={faShieldHalved} className="fa-solid text-2xl"></FontAwesomeIcon>
                            </div>
                            <h3 className="text-xl text-black font-bold mb-3">Security</h3>
                            <ul className="space-y-3">
                                <li><span  className="text-gray-600 hover:text-red-600 cursor-pointer">Privacy Settings</span></li>
                                <li><span  className="text-gray-600 hover:text-red-600 cursor-pointer">2FA Setup</span></li>
                                <li><span  className="text-gray-600 hover:text-red-600 cursor-pointer">Data Protection</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section id="popular-articles" className="py-16 text-black bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold mb-8">Popular Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div id="article-1" className="bg-white p-6 rounded-lg hover:shadow-md transition-all">
                            <div className="flex items-center space-x-4">
                                <div className="text-red-600">
                                    <FontAwesomeIcon icon={faFileLines} className="fa-solid text-xl"></FontAwesomeIcon>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-1">How to reset your password</h3>
                                    <p className="text-sm text-gray-500">Last updated 2 days ago</p>
                                </div>
                            </div>
                        </div>

                        <div id="article-2" className="bg-white p-6 rounded-lg hover:shadow-md transition-all">
                            <div className="flex items-center space-x-4">
                                <div className="text-red-600">
                                    <FontAwesomeIcon icon={faFileLines} className="fa-solid text-xl"></FontAwesomeIcon>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-1">Integration guide with API</h3>
                                    <p className="text-sm text-gray-500">Last updated 1 week ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact-support" className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl text-black font-bold mb-4">Still need help?</h2>
                        <p className="text-gray-600 mb-8">Our support team is available 24/7 to assist you with any questions</p>
                        <div className="flex justify-center space-x-4">
                            <a href="#" className="inline-flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700">
                                <i className="fa-regular fa-message"></i>
                                <span>Contact Support</span>
                            </a>
                            <a href="#" className="inline-flex items-center space-x-2 bg-white border-2 border-red-600 text-red-600 px-6 py-3 rounded-lg hover:bg-red-50">
                                <i className="fa-solid fa-phone"></i>
                                <span>Schedule a Call</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    );
}
