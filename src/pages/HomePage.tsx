import { Link, NavLink } from 'react-router-dom';

export default function HomePage() {
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
      <main className="bg-warm-950 text-warm-100 font-['Noto_Sans_KR']">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-warm-950 py-24 px-6">
          {/* Background orbs */}
          <div className="hero-orb bg-accent-blue w-96 h-96 -top-20 -left-20" />
          <div className="hero-orb bg-accent-purple w-72 h-72 top-1/3 right-10" style={{ animationDelay: '2s' }} />
          <div className="hero-orb bg-accent-cyan w-80 h-80 bottom-1/4 left-1/4" style={{ animationDelay: '4s' }} />
          {/* Grid texture */}
          <div className="absolute inset-0 grid-overlay" />
          {/* Content */}
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <span className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm text-warm-300 mb-8 shadow-premium-sm">
              ✨ 예술을 탐험하세요
            </span>
            <h1 className="gradient-text text-5xl md:text-7xl font-bold tracking-tight mb-6">
              영감을 주는 사진과 작품 갤러리
            </h1>
            <p className="text-warm-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              전 세계의 뛰어난 예술가들이 창조한 숨 막히는 시각 예술의 세계에 빠져보세요. 당신의 영감을 찾고, 새로운 관점을 발견하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-premium bg-gradient-to-r from-accent-blue to-accent-purple text-white px-8 py-4 rounded-xl font-semibold shadow-glow-blue">
                갤러리 둘러보기
              </button>
              <button className="glass-card px-8 py-4 rounded-xl text-warm-200 font-semibold hover:shadow-glow-purple transition-shadow duration-300">
                작품 제출하기
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 px-6 bg-warm-900">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="glass-card p-6 text-center shadow-premium-sm">
                <div className="gradient-text text-4xl font-bold mb-1">10K+</div>
                <div className="text-warm-500 text-sm uppercase tracking-wider">전시된 작품</div>
              </div>
              <div className="glass-card p-6 text-center shadow-premium-sm">
                <div className="gradient-text text-4xl font-bold mb-1">5K+</div>
                <div className="text-warm-500 text-sm uppercase tracking-wider">활동적인 작가</div>
              </div>
              <div className="glass-card p-6 text-center shadow-premium-sm">
                <div className="gradient-text text-4xl font-bold mb-1">2M+</div>
                <div className="text-warm-500 text-sm uppercase tracking-wider">월간 방문자</div>
              </div>
              <div className="glass-card p-6 text-center shadow-premium-sm">
                <div className="gradient-text text-4xl font-bold mb-1">4.9</div>
                <div className="text-warm-500 text-sm uppercase tracking-wider">평점</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Works Section */}
        <section className="py-24 px-6 bg-warm-950">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-warm-50 tracking-tight mb-4">주요 전시 작품</h2>
              <p className="text-warm-400 text-lg max-w-2xl mx-auto">
                엄선된 컬렉션에서 가장 인상 깊은 사진과 예술 작품을 만나보세요.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-card p-5 group hover:shadow-glow-cyan transition-shadow duration-300">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img data-search-keyword="photography studio interior" src="https://images.unsplash.com/photo-1668453814676-c8093305fae6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MDYyMjh8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMHN0dWRpbyUyMGludGVyaW9yfGVufDB8MHx8fDE3Nzc2MDY5Njd8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="스튜디오 내부" className="w-full h-auto rounded-lg object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-warm-100 mb-2">도시의 빛깔</h3>
                <p className="text-warm-400 text-sm leading-relaxed mb-4">
                  네온사인과 그림자가 어우러진 현대 도시의 밤 풍경을 담은 작품입니다.
                </p>
                <button className="text-accent-blue hover:text-accent-purple font-medium flex items-center gap-1 transition-colors duration-200">
                  자세히 보기
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </div>
              <div className="glass-card p-5 group hover:shadow-glow-cyan transition-shadow duration-300">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img data-search-keyword="photography studio detail" src="https://images.unsplash.com/photo-1770319778939-1a6378837803?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MDYyMjh8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMHN0dWRpbyUyMGRldGFpbHxlbnwwfDB8fHwxNzc3NjA2OTY3fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="자연의 숨결" className="w-full h-auto rounded-lg object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-warm-100 mb-2">자연의 숨결</h3>
                <p className="text-warm-400 text-sm leading-relaxed mb-4">
                  고요한 숲 속에서 피어나는 생명의 에너지를 포착한 사진입니다.
                </p>
                <button className="text-accent-blue hover:text-accent-purple font-medium flex items-center gap-1 transition-colors duration-200">
                  자세히 보기
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </div>
              <div className="glass-card p-5 group hover:shadow-glow-cyan transition-shadow duration-300">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img data-search-keyword="photography studio portrait" src="https://images.unsplash.com/photo-1612150672251-4dc54d1a886a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MDYyMjh8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMHN0dWRpbyUyMHBvcnRyYWl0fGVufDB8MHx8fDE3Nzc2MDY5ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="시간의 초상" className="w-full h-auto rounded-lg object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-warm-100 mb-2">시간의 초상</h3>
                <p className="text-warm-400 text-sm leading-relaxed mb-4">
                  깊은 눈빛과 주름 속에 담긴 한 인물의 삶의 흔적을 표현했습니다.
                </p>
                <button className="text-accent-blue hover:text-accent-purple font-medium flex items-center gap-1 transition-colors duration-200">
                  자세히 보기
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* About Us / Call to Action Split Section */}
        <section className="py-24 px-6 bg-warm-900">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-premium-lg">
              <img data-search-keyword="photography studio team" src="https://images.unsplash.com/photo-1758613654311-32525f489a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MDYyMjh8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMHN0dWRpbyUyMHRlYW18ZW58MHwwfHx8MTc3NzYwNjk4NXww&ixlib=rb-4.1.0&q=80&w=1080" alt="갤러리 팀" className="w-full h-full object-cover rounded-xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-950/70 to-transparent rounded-xl" />
              <div className="absolute bottom-6 left-6 text-white text-3xl font-bold">
                <span className="gradient-text-warm">우리의 이야기</span>
              </div>
            </div>
            <div className="glass-card p-8 shadow-premium-md">
              <h2 className="text-3xl md:text-4xl font-bold text-warm-50 tracking-tight mb-6">
                예술을 사랑하는 모든 이를 위한 공간
              </h2>
              <p className="text-warm-400 text-lg leading-relaxed mb-8">
                저희 갤러리는 재능 있는 사진작가와 예술가들이 그들의 독특한 시각과 창의성을 전 세계와 공유할 수 있는 플랫폼을 제공합니다. 우리는 예술이 삶에 가져다주는 영감과 기쁨을 믿습니다.
              </p>
              <button className="btn-premium bg-gradient-to-r from-accent-rose to-accent-amber text-white px-8 py-4 rounded-xl font-semibold shadow-glow-purple">
                우리에 대해 더 알아보기
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 px-6 bg-warm-950">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-warm-50 tracking-tight mb-4">고객 후기</h2>
              <p className="text-warm-400 text-lg max-w-2xl mx-auto">
                저희 갤러리를 경험한 분들의 솔직한 이야기입니다.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="glass-card p-6 shadow-premium-sm hover:shadow-glow-blue transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <img data-search-keyword="photography studio team" src="https://images.unsplash.com/photo-1758613654311-32525f489a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MDYyMjh8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMHN0dWRpbyUyMHRlYW18ZW58MHwwfHx8MTc3NzYwNjk4NXww&ixlib=rb-4.1.0&q=80&w=1080" alt="김민준 아바타" className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold text-warm-100">김민준</div>
                    <div className="text-warm-500 text-sm">사진작가</div>
                  </div>
                </div>
                <p className="text-warm-300 leading-relaxed italic">
                  "제 작품을 전시할 수 있는 최고의 플랫폼입니다. 전 세계 관객들과 소통할 수 있어 정말 기쁩니다."
                </p>
              </div>
              <div className="glass-card p-6 shadow-premium-sm hover:shadow-glow-purple transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <img data-search-keyword="photography studio team" src="https://images.unsplash.com/photo-1758613654311-32525f489a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MDYyMjh8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMHN0dWRpbyUyMHRlYW18ZW58MHwwfHx8MTc3NzYwNjk4NXww&ixlib=rb-4.1.0&q=80&w=1080" alt="박지영 아바타" className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold text-warm-100">박지영</div>
                    <div className="text-warm-500 text-sm">미술 애호가</div>
                  </div>
                </div>
                <p className="text-warm-300 leading-relaxed italic">
                  "항상 새로운 영감을 주는 작품들을 발견합니다. 큐레이션이 정말 훌륭해요!"
                </p>
              </div>
              <div className="glass-card p-6 shadow-premium-sm hover:shadow-glow-cyan transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <img data-search-keyword="photography studio team" src="https://images.unsplash.com/photo-1758613654311-32525f489a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MDYyMjh8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMHN0dWRpbyUyMHRlYW18ZW58MHwwfHx8MTc3NzYwNjk4NXww&ixlib=rb-4.1.0&q=80&w=1080" alt="이서진 아바타" className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold text-warm-100">이서진</div>
                    <div className="text-warm-500 text-sm">큐레이터</div>
                  </div>
                </div>
                <p className="text-warm-300 leading-relaxed italic">
                  "다양한 장르와 스타일의 작품들을 한눈에 볼 수 있어 전문가로서도 만족스럽습니다."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-warm-900">
          <div className="max-w-4xl mx-auto text-center glass-card p-12 shadow-premium-lg">
            <h2 className="gradient-text-warm text-3xl md:text-5xl font-bold tracking-tight mb-6">
              당신의 작품을 세상에 선보이세요
            </h2>
            <p className="text-warm-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              지금 바로 저희 갤러리에 가입하고 당신의 독창적인 예술을 전 세계 관객들과 공유할 기회를 잡으세요.
            </p>
            <button className="btn-premium bg-gradient-to-r from-accent-emerald to-accent-cyan text-white px-10 py-4 rounded-xl font-semibold shadow-glow-cyan">
              지금 시작하기
            </button>
          </div>
        </section>
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