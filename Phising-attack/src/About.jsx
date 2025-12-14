
import './App.css'

function About() {


    return (
        <>
            <div className="min-h-screen bg-linear-to-b from-[#070819] to-[#0a0a20] text-white">

                


                {/* ===== PAGE HEADER ===== */}
                <div className="text-center pt-20 pb-12 px-6">
                    <h1 className="text-4xl font-bold text-cyan-400 mb-4">
                        About Our Project
                    </h1>
                    <p className="text-gray-400 max-w-3xl mx-auto">
                        This phishing detection website is a UI-based academic project
                        developed to demonstrate the design and structure of a
                        cybersecurity application.
                    </p>
                </div>

                {/* ===== PROJECT OVERVIEW ===== */}
                <section className="max-w-5xl mx-auto px-6 mb-20">
                    <div className="bg-black/30 p-8 rounded-xl border border-white/10">
                        <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
                            Project Overview
                        </h2>
                        <p className="text-gray-300 leading-relaxed">
                            Phishing is a major cybersecurity threat where attackers attempt
                            to trick users into revealing sensitive information such as
                            usernames, passwords, or financial details.
                            <br /><br />
                            This project focuses on building a clean and user-friendly
                            interface that simulates how a phishing detection system may
                            look and function. The current version is intended for academic
                            and demonstration purposes only.
                        </p>
                    </div>
                </section>

                {/* ===== TEAM MEMBERS ===== */}
                <section className="max-w-6xl mx-auto px-6 pb-20">
                    <h2 className="text-3xl font-semibold text-center text-cyan-400 mb-12">
                        Project Team Members
                    </h2>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

                        {/* MEMBER CARD */}
                        <div className="bg-black/30 p-6 rounded-xl border border-white/10 text-center">
                            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-cyan-500/20" />
                            <h3 className="text-xl font-semibold">Debayan Chakraborty</h3>
                            <p className="text-cyan-400 text-sm">Team Leader</p>
                            <p className="text-gray-400 text-sm mt-3">
                                Responsible for project planning, coordination, and overall
                                UI design.
                            </p>
                        </div>

                        <div className="bg-black/30 p-6 rounded-xl border border-white/10 text-center">
                            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-cyan-500/20" />
                            <h3 className="text-xl font-semibold">Keshav Singh</h3>
                            <p className="text-cyan-400 text-sm">Frontend Developer</p>
                            <p className="text-gray-400 text-sm mt-3">
                                Developed the user interface using React and Tailwind CSS.
                            </p>
                        </div>

                        <div className="bg-black/30 p-6 rounded-xl border border-white/10 text-center">
                            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-cyan-500/20" />
                            <h3 className="text-xl font-semibold">Shivam Kumar, Abhishek Mishra, Shivam Singh</h3>
                            <p className="text-cyan-400 text-sm">Research & Documentation</p>
                            <p className="text-gray-400 text-sm mt-3">
                                Worked on phishing research, documentation, and project reports.
                            </p>
                        </div>

                    </div>
                </section>

                {/* ===== FOOTER ===== */}
                <footer className="text-center py-6 border-t border-white/10 text-gray-500">
                    Academic Project | Phishing Detection Website
                </footer>

            </div>
        </>
    )
}

export default About
