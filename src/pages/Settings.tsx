import { NavLink } from 'react-router-dom';

export default function Settings() {
  return (
<div className="min-h-screen bg-warm-950 text-warm-100 font-['Noto_Sans_KR'] relative overflow-hidden">
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
              <NavLink to="/settings" className="flex items-center gap-3 px-4 py-2 rounded-lg text-warm-50 bg-accent-blue/20 shadow-glow-blue/20" end>
                <svg className="w-5 h-5" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c.996 .608 2.296 .13 2.572 -1.065z" />
                  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                </svg>
                <span>일반 설정</span>
              </NavLink>
            </li>
             {/* Add other settings links here */}
          </ul>
        </div>
      </nav>

      {/* Settings Content */}
      <div className="lg:w-3/4">
        <div className="glass-card p-8 shadow-premium-md">
          <h2 className="text-2xl font-bold text-warm-50 mb-6">프로필 정보</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-warm-300 mb-2">사용자 이름</label>
              <input type="text" id="username" className="form-input" value="ArtExplorer92" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-warm-300 mb-2">이메일 주소</label>
              <input type="email" id="email" className="form-input" value="artist@example.com" />
            </div>
            <div>
              <label htmlFor="bio" className="block text-sm font-medium text-warm-300 mb-2">소개</label>
              <textarea id="bio" rows={4} className="form-input">디지털 아티스트 및 사진작가. 미니멀리즘과 초현실주의 탐구.</textarea>
            </div>
            <div className="pt-4">
              <button type="submit" className="btn-premium bg-gradient-to-r from-accent-blue to-accent-purple text-white px-6 py-3 rounded-lg font-semibold shadow-glow-blue">
                변경 사항 저장
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}
