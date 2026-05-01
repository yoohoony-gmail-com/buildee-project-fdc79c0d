export default function Dashboard() {
  return (
    <div className="relative text-warm-100">
      {/* Background Orbs */}
      <div className="hero-orb bg-accent-blue w-96 h-96 -top-20 -left-20" />
      <div className="hero-orb bg-accent-purple w-72 h-72 top-1/3 right-10" style={{ animationDelay: '2s' }} />
      <div className="hero-orb bg-accent-cyan w-80 h-80 bottom-0 left-1/4" style={{ animationDelay: '4s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-20">
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="gradient-text text-4xl md:text-5xl font-bold tracking-tight mb-2">
              갤러리 대시보드
            </h1>
            <p className="text-warm-400 text-lg">
              당신의 작품을 관리하고 방문자 통계를 확인하세요.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="btn-premium bg-gradient-to-r from-accent-blue to-accent-purple text-white px-6 py-3 rounded-xl font-semibold shadow-glow-blue">
              <svg className="w-5 h-5 inline-block mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>
              새 작품 업로드
            </button>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1758613654311-32525f489a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MDYyMjh8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMHN0dWRpbyUyMHRlYW18ZW58MHwwfHx8MTc3NzYwNjk4NXww&ixlib=rb-4.1.0&q=80&w=1080" alt="사용자 아바타" className="w-12 h-12 rounded-full object-cover border-2 border-accent-blue/50 shadow-premium-sm" />
              <span className="absolute bottom-0 right-0 block w-3 h-3 bg-accent-emerald rounded-full ring-2 ring-warm-950"></span>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        </div>
      </div>
    </div>
  );
}
