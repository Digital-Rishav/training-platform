export default function ComingSoon() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-6">
      <div className="max-w-3xl text-center text-white">
        
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-wide">
            Ecowish Training<span className="text-indigo-400">...</span>
          </h1>
        </div>

        {/* Heading */}
        <h2 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Something Amazing
          <span className="block text-indigo-400">
            Is Coming Soon
          </span>
        </h2>

        {/* Description */}
        <p className="mt-6 text-lg text-slate-300 max-w-xl mx-auto">
          We are working hard to bring you an incredible experience.
          Stay tuned — we will launch very soon.
        </p>


        {/* Countdown Cards */}
        <div className="mt-10 grid grid-cols-4 gap-4 max-w-lg mx-auto">
          {[
            { value: "30", label: "Days" },
            { value: "12", label: "Hours" },
            { value: "45", label: "Minutes" },
            { value: "20", label: "Seconds" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10"
            >
              <div className="text-3xl font-bold">
                {item.value}
              </div>
              <div className="text-sm text-slate-300">
                {item.label}
              </div>
            </div>
          ))}
        </div>


        {/* Email Form */}
        <div className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-5 py-3 rounded-xl bg-white text-black outline-none"
          />

          <button
            className="px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition font-semibold"
          >
            Notify Me
          </button>
        </div>


        {/* Social */}
        <p className="mt-10 text-sm text-slate-400">
          © {new Date().getFullYear()} Ecowish Training... All rights reserved.
        </p>

      </div>
    </main>
  );
}