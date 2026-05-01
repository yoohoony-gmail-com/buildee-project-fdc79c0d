import { Link, NavLink } from 'react-router-dom';

export default function SettingsPage() {
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
      <main className="min-h-screen bg-warm-950 text-warm-100 font-['Noto_Sans_KR'] relative overflow-hidden">
        {/* Background Orbs */}
        <div className="hero-orb bg-accent-purple w-80 h-80 -top-20 -right-20 animate-float" />
        <div className="hero-orb bg-accent-cyan w-64 h-64 bottom-1/4 left-1/4 animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute inset-0 grid-overlay" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center mb-16">
            <h1 className="gradient-text text-4xl md:text-6xl font-bold tracking-tight mb-4">
              계정 설정
            </h1>
            <p className="text-warm-400 text-lg max-w-2xl mx-auto">
              갤러리 계정 정보를 관리하고 개인 설정을 조정하세요.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Navigation */}
            <nav className="lg:w-1/4">
              <div className="glass-card p-4 sticky top-28">
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="flex items-center gap-3 px-4 py-2 rounded-lg text-warm-50 bg-accent-blue/20 shadow-glow-blue/20">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c.996 .608 2.296 .13 2.572 -1.065z" />
                        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                      </svg>
                      <span>프로필</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center gap-3 px-4 py-2 rounded-lg text-warm-300 hover:bg-warm-800/50 hover:text-warm-50 transition">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                        <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                        <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                      </svg>
                      <span>계정 정보</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center gap-3 px-4 py-2 rounded-lg text-warm-300 hover:bg-warm-800/50 hover:text-warm-50 transition">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M3 21l18 0" />
                        <path d="M9 8l1 0" />
                        <path d="M9 12l1 0" />
                        <path d="M9 16l1 0" />
                        <path d="M14 8l1 0" />
                        <path d="M14 12l1 0" />
                        <path d="M14 16l1 0" />
                        <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" />
                      </svg>
                      <span>갤러리 설정</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center gap-3 px-4 py-2 rounded-lg text-warm-300 hover:bg-warm-800/50 hover:text-warm-50 transition">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M10 5a2 2 0 1 1 4 0a2 2 0 1 1 -4 0" />
                        <path d="M4 20h16" />
                        <path d="M5 16v-1a7 7 0 0 1 7 -7h0a7 7 0 0 1 7 7v1" />
                      </svg>
                      <span>보안</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center gap-3 px-4 py-2 rounded-lg text-warm-300 hover:bg-warm-800/50 hover:text-warm-50 transition">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M10 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                        <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                      </svg>
                      <span>개인정보 보호</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center gap-3 px-4 py-2 rounded-lg text-warm-300 hover:bg-warm-800/50 hover:text-warm-50 transition">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                        <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l-.7 .7m12.9 -1.4l-.7 .7m-12.2 9.2l-.7 .7m12.9 -.7l-.7 .7" />
                      </svg>
                      <span>알림</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center gap-3 px-4 py-2 rounded-lg text-warm-300 hover:bg-warm-800/50 hover:text-warm-50 transition">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                        <path d="M12 12l3 -3" />
                        <path d="M12 12l-3 3" />
                        <path d="M12 12v7" />
                        <path d="M12 5v7" />
                        <path d="M5 12h7" />
                        <path d="M19 12h-7" />
                      </svg>
                      <span>결제</span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>

            {/* Main Content Area */}
            <div className="lg:w-3/4 space-y-8">
              {/* Profile Settings */}
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-warm-50 mb-6">프로필 설정</h2>
                <div className="flex items-center gap-6 mb-8">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-accent-blue/50 shadow-glow-blue/30">
                    <img data-search-keyword="photography studio portrait" src="https://images.unsplash.com/photo-1612150672251-4dc54d1a886a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MDYyMjh8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMHN0dWRpbyUyMHBvcnRyYWl0fGVufDB8MHx8fDE3Nzc2MDY5ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="프로필 사진" className="w-full h-full object-cover" />
                    <button className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity text-white text-sm">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M4 4h16v16h-16z" />
                        <path d="M15 11l-3 3l-3 -3" />
                        <path d="M12 14v-8" />
                      </svg>
                    </button>
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-warm-100">김민준</p>
                    <p className="text-warm-400">사진작가</p>
                    <button className="btn-premium bg-gradient-to-r from-accent-blue to-accent-purple text-white px-4 py-2 rounded-lg text-sm mt-3">
                      사진 변경
                    </button>
                  </div>
                </div>

                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-warm-300 mb-2">이름</label>
                    <input type="text" id="name" defaultValue="김민준" className="w-full p-3 bg-warm-800/50 border border-warm-700/50 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent outline-none text-warm-100" />
                  </div>
                  <div>
                    <label htmlFor="bio" className="block text-sm font-medium text-warm-300 mb-2">소개</label>
                    <textarea id="bio" rows={4} defaultValue="빛과 그림자로 이야기를 만드는 사진작가입니다. 주로 인물과 풍경 사진을 촬영하며, 순간의 아름다움을 포착하는 데 열정적입니다." className="w-full p-3 bg-warm-800/50 border border-warm-700/50 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent outline-none text-warm-100"></textarea>
                  </div>
                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-warm-300 mb-2">웹사이트</label>
                    <input type="url" id="website" defaultValue="https://minjoon-gallery.com" className="w-full p-3 bg-warm-800/50 border border-warm-700/50 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent outline-none text-warm-100" />
                  </div>
                  <div className="flex justify-end">
                    <button type="submit" className="btn-premium bg-gradient-to-r from-accent-emerald to-accent-cyan text-white px-6 py-3 rounded-xl font-semibold shadow-glow-emerald">
                      변경 사항 저장
                    </button>
                  </div>
                </form>
              </div>

              {/* Account Information */}
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-warm-50 mb-6">계정 정보</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-warm-300 mb-2">이메일 주소</label>
                    <input type="email" id="email" defaultValue="minjoon.kim@example.com" className="w-full p-3 bg-warm-800/50 border border-warm-700/50 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent outline-none text-warm-100" />
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-warm-300 mb-2">비밀번호</label>
                    <input type="password" id="password" defaultValue="********" className="w-full p-3 bg-warm-800/50 border border-warm-700/50 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent outline-none text-warm-100" />
                    <button type="button" className="text-accent-blue text-sm mt-2 hover:underline">비밀번호 변경</button>
                  </div>
                  <div className="flex justify-end">
                    <button type="submit" className="btn-premium bg-gradient-to-r from-accent-emerald to-accent-cyan text-white px-6 py-3 rounded-xl font-semibold shadow-glow-emerald">
                      계정 정보 업데이트
                    </button>
                  </div>
                </form>
              </div>

              {/* Gallery Settings */}
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-warm-50 mb-6">갤러리 설정</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="gallery_name" className="block text-sm font-medium text-warm-300 mb-2">갤러리 이름</label>
                    <input type="text" id="gallery_name" defaultValue="김민준 사진 스튜디오" className="w-full p-3 bg-warm-800/50 border border-warm-700/50 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent outline-none text-warm-100" />
                  </div>
                  <div>
                    <label htmlFor="display_mode" className="block text-sm font-medium text-warm-300 mb-2">기본 전시 모드</label>
                    <select id="display_mode" className="w-full p-3 bg-warm-800/50 border border-warm-700/50 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent outline-none text-warm-100 appearance-none">
                      <option>그리드 뷰</option>
                      <option>슬라이드쇼</option>
                      <option>메이슨리 레이아웃</option>
                    </select>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-warm-300">워터마크 사용</span>
                    <label htmlFor="watermark_toggle" className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" id="watermark_toggle" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-warm-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-accent-blue rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-warm-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent-blue"></div>
                    </label>
                  </div>
                  <div className="flex justify-end">
                    <button type="submit" className="btn-premium bg-gradient-to-r from-accent-emerald to-accent-cyan text-white px-6 py-3 rounded-xl font-semibold shadow-glow-emerald">
                      갤러리 설정 저장
                    </button>
                  </div>
                </form>
              </div>

              {/* Delete Account */}
              <div className="glass-card p-8 border border-accent-rose/50 shadow-glow-rose/20">
                <h2 className="text-2xl font-bold text-warm-50 mb-6">계정 삭제</h2>
                <p className="text-warm-400 mb-6">
                  계정을 삭제하면 모든 사진, 작품 및 관련 데이터가 영구적으로 제거됩니다. 이 작업은 되돌릴 수 없습니다.
                </p>
                <button className="btn-premium bg-gradient-to-r from-accent-rose to-accent-purple text-white px-6 py-3 rounded-xl font-semibold shadow-glow-rose">
                  계정 삭제
                </button>
              </div>
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