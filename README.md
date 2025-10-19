# 이가은 포트폴리오 웹사이트

전북대학교 컴퓨터인공지능학부 이가은의 개인 포트폴리오 웹사이트입니다.
<img width="1440" height="900" alt="image" src="https://github.com/user-attachments/assets/7c8ecb0c-b0c0-4947-a920-984fd1fcdd3f" />



## 🌟 소개

웹 개발자가 되고 싶은 학부생으로서, 프론트엔드에서 시작해 풀스택까지의 여정을 담은 포트폴리오 사이트입니다.

## 🚀 기술 스택

- **정적 사이트 생성기**: Hugo
- **테마**: HugoBlox (Wowchemy 기반)
- **호스팅**: GitHub Pages
- **빌드 도구**: Netlify
- **언어**: 한국어/영어 다국어 지원

## 📁 프로젝트 구조

```
igaeun8.github.io/
├── content/           # 콘텐츠 파일들
│   ├── ko/           # 한국어 콘텐츠
│   └── en/           # 영어 콘텐츠
├── config/           # Hugo 설정 파일
├── assets/           # 정적 자산 (CSS, 이미지 등)
├── layouts/          # 커스텀 레이아웃
└── public/           # 빌드된 정적 파일들
```

## 🛠️ 로컬 개발 환경 설정

### 필요 조건
- Hugo 0.135.0 이상
- Go 1.15 이상

### 설치 및 실행

1. 저장소 클론
```bash
git clone https://github.com/igaeun8/igaeun8.github.io.git
cd igaeun8.github.io
```

2. Hugo 모듈 다운로드
```bash
hugo mod get
```

3. 로컬 서버 실행
```bash
hugo server
```

4. 브라우저에서 `http://localhost:1313` 접속

## 📝 주요 기능

- **반응형 디자인**: 모바일, 태블릿, 데스크톱 최적화
- **다크/라이트 모드**: 사용자 선호에 따른 테마 전환
- **다국어 지원**: 한국어/영어 콘텐츠
- **프로젝트 포트폴리오**: 진행한 프로젝트들 소개
- **여행 기록**: 해외 여행 경험 공유
- **기술 스택**: 보유 기술 및 관심 분야 소개
- **블로그**: 학습 과정 및 경험 공유

## 🎨 커스터마이징

### 테마 설정
`config/_default/params.yaml` 파일에서 다음을 수정할 수 있습니다:
- 사이트 제목 및 설명
- 색상 테마
- 소셜 링크
- SEO 설정

### 콘텐츠 추가
- **프로젝트**: `content/ko/project/` 디렉토리에 새 파일 추가
- **블로그 포스트**: `content/ko/post/` 디렉토리에 새 파일 추가
- **여행 기록**: `content/ko/travel_*/` 디렉토리에 새 파일 추가

## 🚀 배포

이 사이트는 GitHub Pages를 통해 자동으로 배포됩니다:
- `main` 브랜치에 푸시하면 자동으로 빌드 및 배포
- Netlify를 통한 추가 빌드 최적화

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 📞 연락처

- **이메일**: igaeun8@gmail.com
- **GitHub**: [@igaeun8](https://github.com/igaeun8)
- **웹사이트**: [https://igaeun8.github.io](https://igaeun8.github.io)

---

⭐ 이 저장소가 도움이 되었다면 스타를 눌러주세요!
