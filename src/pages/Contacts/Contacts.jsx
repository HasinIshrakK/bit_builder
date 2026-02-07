const team = [
  { name: "Ahmed Abrar Zayad", role:"Team member", email: "ahmedabrarzayad@gmail.com", img: "https://avatars.githubusercontent.com/u/88761193?v=4" },
  { name: "Mahfuzur Rahman", role:"Team member", email: "ripon301252@gmail.com", img: "https://avatars.githubusercontent.com/u/93132951?v=4" },
  { name: "Amina Akther Asha", role:"Team member", email: "ashaamina91@gmail.com", img: "/image.jpg" },
  { name: "Faisal", role:"Team member", email: "itsfaisalhossen@gmail.com", img: "https://avatars.githubusercontent.com/u/108367521?v=4" },
  { name: "Tahmid Ahmed", role:"Team member", email: "tahmid7282@gmail.com", img: "https://avatars.githubusercontent.com/u/218386621?v=4" },
  { name: "MD. HASIN ISHRAK KHAN", role:"Team leader", email: "hasinishrakk@gmail.com", img: "https://avatars.githubusercontent.com/u/219306826?v=4" },
];

export default function Contacts() {
  return (
    <div className="min-h-screen py-16 px-4 text-white">
      {/* Header */}
      <div className="mb-16 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          The Dream Team
        </h1>
        <p className="mt-4 text-gray-400 max-w-md mx-auto">
          Innovators, designers, and developers working together to build the future.
        </p>
      </div>

      {/* Grid Container */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {team.map((member, idx) => (
          <div 
            key={idx} 
            className="group flex items-center gap-6 p-4 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
          >
            {/* Diamond Image with Glow */}
            <div className="relative shrink-0">
              <div className="absolute inset-0 bg-purple-500 blur-lg opacity-0 group-hover:opacity-40 transition-opacity" />
              <div className="relative w-24 h-24 md:w-32 md:h-32 overflow-hidden [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)] border-2 border-purple-500/30">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
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
    </div>
  );
}
