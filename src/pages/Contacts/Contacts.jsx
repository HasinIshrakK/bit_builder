import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios"

export default function Contacts() {
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedMember, setSelectedMember] = useState(null);

    const axiosInstance = useAxios();

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const response = await axiosInstance.get("/members");
                setMembers(response.data.data);
            } catch (err) {
                console.error("Failed to fetch members:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchMembers();
    }, [axiosInstance]);

    if (loading) return <p className="text-center text-3xl md:text-4xl font-semibold bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent min-h-screen items-center flex justify-center">Loading Contact Info...</p>;

    return (
        <div className="min-h-screen py-16 px-4 text-white">
            {/* Header */}
            <div className="mb-16 text-center">
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    Team Contact Info
                </h1>
                <p className="mt-4 text-gray-400 max-w-md mx-auto">
                    Awesome developers are working together to build the future.
                </p>
            </div>

            {/* Grid Container */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {!loading && members.map((member, idx) => (
                    <div
                        key={idx}
                        onClick={() => { setSelectedMember(member) }}
                        className="group flex items-center gap-6 p-4 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                    >
                        {/* Diamond Image with Glow */}
                        <div className="relative shrink-0">
                            <div className="absolute inset-0 bg-purple-500 blur-lg opacity-0 group-hover:opacity-40 transition-opacity" />
                            <div className="relative w-24 h-24 md:w-32 md:h-32 overflow-hidden [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)] border-2 border-purple-500/30">
                                <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                            </div>
                        </div>

                        {/* Info */}
                        <div className="flex flex-col">
                            <h2 className="text-xl md:text-2xl font-semibold text-purple-100 group-hover:text-white">
                                {member.name}
                            </h2>
                            <a
                                href={`mailto:${member.email}`}
                                className="text-sm text-gray-400 hover:text-purple-400 transition-colors break-all"
                            >
                                {member.email}
                            </a>
                            <div className="mt-3 flex gap-2">
                                <span className="px-3 py-1 text-[10px] uppercase tracking-wider bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
                                    {member.role}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* The Modal UI */}
            {selectedMember && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-300"
                    onClick={() => setSelectedMember(null)}
                >
                    <div
                        className="bg-zinc-950/90 border border-white/10 p-8 rounded-[2.5rem] max-w-sm w-full text-center relative shadow-2xl shadow-purple-500/20"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedMember(null)}
                            className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                        >
                            ✕
                        </button>

                        {/* Profile Image with Diamond Glow */}
                        <div className="relative w-32 h-32 mx-auto mb-6">
                            <div className="absolute inset-0 bg-pink-500 blur-2xl opacity-20 animate-pulse" />
                            <img
                                src={selectedMember.image}
                                className="relative w-full h-full object-cover rounded-2xl border-2 border-pink-500/30 rotate-3 hover:rotate-0 transition-transform duration-500"
                            />
                        </div>

                        {/* Text Content */}
                        <h2 className="text-3xl font-bold bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                            {selectedMember.name}
                        </h2>
                        <p className="text-pink-400/80 font-medium tracking-wide uppercase text-xs mt-1 mb-6">
                            {selectedMember.role}
                        </p>

                        {/* Social Links List */}
                        <div className="space-y-3 mb-8 text-left">
                            <a href={`mailto:${selectedMember.email}`} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-pink-500/30 hover:bg-white/10 transition-all group">
                                <span className="text-pink-500 group-hover:scale-110 transition-transform">📧</span>
                                <div className="overflow-hidden">
                                    <p className="text-[10px] text-gray-500 uppercase font-bold">Email</p>
                                    <p className="text-sm text-gray-300 truncate">{selectedMember.email}</p>
                                </div>
                            </a>

                            {selectedMember.linkedin && (
                                <a href={selectedMember.linkedin} target="_blank" className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-blue-400/30 hover:bg-white/10 transition-all group">
                                    <span className="text-blue-400 group-hover:scale-110 transition-transform">🔗</span>
                                    <div>
                                        <p className="text-[10px] text-gray-500 uppercase font-bold">LinkedIn</p>
                                        <p className="text-sm text-gray-300">View Profile</p>
                                    </div>
                                </a>
                            )}

                            {selectedMember.github && (
                                <a href={selectedMember.github} target="_blank" className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-purple-400/30 hover:bg-white/10 transition-all group">
                                    <span className="text-purple-400 group-hover:scale-110 transition-transform">💻</span>
                                    <div>
                                        <p className="text-[10px] text-gray-500 uppercase font-bold">GitHub</p>
                                        <p className="text-sm text-gray-300">View Repository</p>
                                    </div>
                                </a>
                            )}
                        </div>

                        <button
                            onClick={() => setSelectedMember(null)}
                            className="w-full py-4 text-sm font-bold text-white uppercase tracking-widest bg-linear-to-r from-fuchsia-600 to-pink-600 rounded-2xl hover:shadow-[0_0_20px_rgba(219,39,119,0.4)] transition-all active:scale-95"
                        >
                            Close Profile
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
