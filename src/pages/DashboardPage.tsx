import { Link, NavLink } from 'react-router-dom';

export default function DashboardPage() {
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-white font-semibold border-b-2 border-accent-blue px-3 py-2 text-sm"
      : "text-warm-400 hover:text-white transition-colors px-3 py-2 text-sm";

  return (
    <div className="min-h-screen bg-warm-950 text-white font-sans">
      <header className="sticky top-0 z-50 bg-warm-950/90 backdrop-blur-md border-b border-warm-800/50">
        <nav className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link to="/" className="gradient-text font-bold text-lg">Site</Link>
          <div className="flex items-center gap-1">
            <NavLink to="/" className={navLinkClasses}>Home</NavLink>
            <NavLink to="/dashboard" className={navLinkClasses}>Dashboard</NavLink>
            <NavLink to="/settings" className={navLinkClasses}>Settings</NavLink>
          </div>
        </nav>
      </header>
      <main className="min-h-screen bg-warm-950 text-warm-100 font-['Noto_Sans_KR']">
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
                <img data-search-keyword="photography studio team" src="https://images.unsplash.com/photo-1758613654311-32525f489a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MDYyMjh8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMHN0dWRpbyUyMHRlYW18ZW58MHwwfHx8MTc3NzYwNjk4NXww&ixlib=rb-4.1.0&q=80&w=1080" alt="사용자 아바타" className="w-12 h-12 rounded-full object-cover border-2 border-accent-blue/50 shadow-premium-sm" />
                <span className="absolute bottom-0 right-0 block w-3 h-3 bg-accent-emerald rounded-full ring-2 ring-warm-950"></span>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="glass-card p-6 text-center">
              <div className="gradient-text text-4xl font-bold mb-1">1,234</div>
              <div className="text-warm-500 text-sm uppercase tracking-wider">총 작품 수</div>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="gradient-text text-4xl font-bold mb-1">8,765</div>
              <div className="text-warm-500 text-sm uppercase tracking-wider">총 방문자</div>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="gradient-text text-4xl font-bold mb-1">4.8</div>
              <div className="text-warm-500 text-sm uppercase tracking-wider">평균 평점</div>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="gradient-text text-4xl font-bold mb-1">12K+</div>
              <div className="text-warm-500 text-sm uppercase tracking-wider">좋아요</div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Works */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-warm-50 mb-6">최근 작품</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-card p-4 group">
                  <img data-search-keyword="photography studio interior" src="https://images.unsplash.com/photo-1668453814676-c8093305fae6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MDYyMjh8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMHN0dWRpbyUyMGludGVyaW9yfGVufDB8MHx8fDE3Nzc2MDY5Njd8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="최근 작품 1" className="w-full h-48 object-cover rounded-lg mb-4 transform group-hover:scale-105 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold text-warm-100 mb-2">도시의 빛</h3>
                  <p className="text-warm-400 text-sm mb-3">2024년 5월 10일 업로드</p>
                  <div className="flex justify-between items-center">
                    <span className="text-accent-blue text-sm font-medium">사진</span>
                    <button className="glass-card px-4 py-2 rounded-lg text-warm-300 text-sm hover:shadow-glow-blue">
                      상세 보기
                    </button>
                  </div>
                </div>
                <div className="glass-card p-4 group">
                  <img data-search-keyword="photography studio detail" src="https://images.unsplash.com/photo-1770319778939-1a6378837803?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MDYyMjh8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMHN0dWRpbyUyMGRldGFpbHxlbnwwfDB8fHwxNzc3NjA2OTY3fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="최근 작품 2" className="w-full h-48 object-cover rounded-lg mb-4 transform group-hover:scale-105 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold text-warm-100 mb-2">자연의 숨결</h3>
                  <p className="text-warm-400 text-sm mb-3">2024년 5월 08일 업로드</p>
                  <div className="flex justify-between items-center">
                    <span className="text-accent-purple text-sm font-medium">회화</span>
                    <button className="glass-card px-4 py-2 rounded-lg text-warm-300 text-sm hover:shadow-glow-blue">
                      상세 보기
                    </button>
                  </div>
                </div>
                <div className="glass-card p-4 group">
                  <img data-search-keyword="photography studio equipment" src="https://images.unsplash.com/photo-1588420635201-3a9e2a2a0a07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MDYyMjh8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMHN0dWRpbyUyMGVxdWlwbWVudHxlbnwwfDB8fHwxNzc3NjA3MDc2fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="최근 작품 3" className="w-full h-48 object-cover rounded-lg mb-4 transform group-hover:scale-105 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold text-warm-100 mb-2">추상적 공간</h3>
                  <p className="text-warm-400 text-sm mb-3">2024년 5월 05일 업로드</p>
                  <div className="flex justify-between items-center">
                    <span className="text-accent-emerald text-sm font-medium">설치미술</span>
                    <button className="glass-card px-4 py-2 rounded-lg text-warm-300 text-sm hover:shadow-glow-blue">
                      상세 보기
                    </button>
                  </div>
                </div>
                <div className="glass-card p-4 group">
                  <img data-search-keyword="photography studio portrait" src="https://images.unsplash.com/photo-1612150672251-4dc54d1a886a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MDYyMjh8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMHN0dWRpbyUyMHBvcnRyYWl0fGVufDB8MHx8fDE3Nzc2MDY5ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="최근 작품 4" className="w-full h-48 object-cover rounded-lg mb-4 transform group-hover:scale-105 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold text-warm-100 mb-2">인물의 깊이</h3>
                  <p className="text-warm-400 text-sm mb-3">2024년 5월 02일 업로드</p>
                  <div className="flex justify-between items-center">
                    <span className="text-accent-rose text-sm font-medium">사진</span>
                    <button className="glass-card px-4 py-2 rounded-lg text-warm-300 text-sm hover:shadow-glow-blue">
                      상세 보기
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Activity Feed */}
            <div>
              <h2 className="text-2xl font-bold text-warm-50 mb-6">최근 활동</h2>
              <div className="glass-card p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <img data-search-keyword="photography studio artist" src="https://images.unsplash.com/photo-1643666804755-5a19711048ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MDYyMjh8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMHN0dWRpbyUyMGFydGlzdHxlbnwwfDB8fHwxNzc3NjUzNDYxfDA&ixlib=rb-4.1.0&q=80&w=1080" alt="활동 아바타 1" className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="text-warm-200">
                      <span className="font-semibold text-accent-blue">김민준</span> 님이 <span className="font-semibold text-warm-100">"도시의 빛"</span> 작품에 댓글을 남겼습니다.
                    </p>
                    <p className="text-warm-500 text-sm mt-1">10분 전</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <img data-search-keyword="photography studio event" src="https://images.unsplash.com/photo-1762028895833-bfcf6c6052cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MDYyMjh8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMHN0dWRpbyUyMGV2ZW50fGVufDB8MHx8fDE3Nzc2NTM0NjF8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="활동 아바타 2" className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="text-warm-200">
                      <span className="font-semibold text-accent-purple">이지아</span> 님이 <span className="font-semibold text-warm-100">"자연의 숨결"</span> 작품을 좋아합니다.
                    </p>
                    <p className="text-warm-500 text-sm mt-1">30분 전</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <img data-search-keyword="photography studio gallery" src="https://images.unsplash.com/photo-1611755217171-67c8e51055ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MDYyMjh8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMHN0dWRpbyUyMGdhbGxlcnl8ZW58MHwwfHx8MTc3NzYwNzA3Nnww&ixlib=rb-4.1.0&q=80&w=1080" alt="활동 아바타 3" className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="text-warm-200">
                      <span className="font-semibold text-accent-emerald">박서준</span> 님이 <span className="font-semibold text-warm-100">"추상적 공간"</span> 작품을 공유했습니다.
                    </p>
                    <p className="text-warm-500 text-sm mt-1">1시간 전</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <img data-search-keyword="photography studio light" src="https://images.unsplash.com/photo-1612052355380-d7c1d631f00f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MDYyMjh8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMHN0dWRpbyUyMGxpZ2h0fGVufDB8MHx8fDE3Nzc2NTM0NjF8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="활동 아바타 4" className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="text-warm-200">
                      <span className="font-semibold text-accent-rose">최유리</span> 님이 <span className="font-semibold text-warm-100">"인물의 깊이"</span> 작품에 별점 5점을 주었습니다.
                    </p>
                    <p className="text-warm-500 text-sm mt-1">2시간 전</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-warm-50 mb-6">빠른 작업</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <button className="glass-card p-6 text-center flex flex-col items-center justify-center hover:shadow-glow-blue transition-shadow duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20v-8M5 12h14M12 4v8"/></svg>
                </div>
                <span className="text-lg font-semibold text-warm-100">새 컬렉션</span>
              </button>
              <button className="glass-card p-6 text-center flex flex-col items-center justify-center hover:shadow-glow-purple transition-shadow duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-purple to-accent-cyan flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M12 18h.01M12 14h.01M12 10h.01"/></svg>
                </div>
                <span className="text-lg font-semibold text-warm-100">보고서 생성</span>
              </button>
              <button className="glass-card p-6 text-center flex flex-col items-center justify-center hover:shadow-glow-cyan transition-shadow duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-cyan to-accent-emerald flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5z"/></svg>
                </div>
                <span className="text-lg font-semibold text-warm-100">설정</span>
              </button>
              <button className="glass-card p-6 text-center flex flex-col items-center justify-center hover:shadow-glow-blue transition-shadow duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-emerald to-accent-blue flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 12H7M12 17V7"/></svg>
                </div>
                <span className="text-lg font-semibold text-warm-100">새로운 이벤트</span>
              </button>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t border-warm-800/50 py-16 px-6 bg-warm-950">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <span className="gradient-text font-bold text-lg">Site</span>
            <p className="text-warm-500 text-sm leading-relaxed mt-3 max-w-sm">Building the future, one pixel at a time.</p>
          </div>
          <div>
            <h4 className="font-semibold text-warm-300 mb-4">Pages</h4>
            <ul className="space-y-2 text-sm text-warm-500">
              <li><Link to="/" className="hover:text-accent-blue transition-colors">Home</Link></li>
              <li><Link to="/dashboard" className="hover:text-accent-blue transition-colors">Dashboard</Link></li>
              <li><Link to="/settings" className="hover:text-accent-blue transition-colors">Settings</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-warm-300 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-warm-500">
              <li><a href="#" className="hover:text-accent-blue transition-colors">About</a></li>
              <li><a href="#" className="hover:text-accent-blue transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-accent-blue transition-colors">Privacy</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-warm-800/50 text-center text-warm-600 text-sm">
          © 2026 Site. All rights reserved.
        </div>
      </footer>
    </div>
  );
}