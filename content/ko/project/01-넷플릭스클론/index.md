---
title: '넷플릭스 클론'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - 이가은

# Author notes (optional)
author_notes:
  - 'Corresponding author'
# {{equal}}

# Schedule page publish date (NOT publication's date).
publishDate: '2024-11-01'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: 웹서비스설계   
publication_short: 웹서비스 설계

abstract: ChatGPT와 협업하여 넷플릭스 클론 웹사이트를 개발했습니다. ChatGPT는 프론트엔드를, 저는 백엔드를 구현하였으며 GitHub Pages를 통해 배포하였습니다.

# Summary. An optional shortened abstract.
summary: ''

tags: ['넥플릭스 클론', 'ChatGPT', '프론트엔드', '백엔드', 'GitHub Pages', '로그인', '즐겨찾기', '개인 프로젝트']

# Display this page in the Featured widget?
featured: true

---
<div style="text-align: justify;">

## 🎬 넷플릭스 클론 과제

TMDB 데이터를 바탕으로 홈/인기/검색/위시리스트/인증(로그인·회원가입 모달)을 구현한 React 프로젝트입니다. 모달 매니저, 커스텀 훅, 그리드·로우 컴포넌트로 **확장 가능한 UI 구조**를 갖췄습니다.

</div>
---

## ✨ 주요 기능 (Features)

* **배너 & 카테고리 로우**: `Banner`, `MovieRow`로 섹션형 콘텐츠 노출
* **검색 페이지**: 키워드 기반 필터링 및 그리드 표시
* **인기 페이지**: TMDB 인기작 모아보기
* **위시리스트**: `useWishlist` 훅으로 추가/삭제/중복 방지
* **인증 모달**: `LoginModal`, `SignupModal` + `ModalManager`
* **반응형 스타일**: 개별 CSS 모듈로 섹션별 스타일링

---

## 🛠 기술 스택

* **React** (CRA 구조)
* **CSS** (페이지/컴포넌트 단위 스타일 파일)
* **TMDB API** (영화 데이터)
* 커스텀 훅 / 유틸 함수 (`useWishlist`, `tmdb.js`, `URL.js`, `Authentication.js`)

---

## 🚀 시작하기 (Getting Started)

### 1) 필수 요구 사항

* **Node.js & npm** 설치

### 2) 설치 & 실행

```bash
# 패키지 설치
npm install

# 개발 서버 시작
npm start
```

### (선택) TMDB API 키 설정

`src/utils/tmdb.js` 또는 `src/utils/URL.js`를 사용하는 경우, 내부에서 **TMDB API 키**가 필요할 수 있습니다.
`.env` 사용 시:

```bash
# .env
REACT_APP_TMDB_API_KEY=여기에_본인_API키
```

코드에서 `process.env.REACT_APP_TMDB_API_KEY`를 참조하도록 구성하세요.

---

## 🧭 라우팅 개요 (Pages)

* `/` → **Home** (`Home.jsx`): 배너 + 카테고리별 로우
* `/popular` → **PopularPage.jsx**: 인기 영화 리스트
* `/search` → **SearchPage.jsx**: 키워드 검색
* `/wishlist` → **WishlistPage.jsx**: 위시리스트
* `/auth` → **AuthPage.jsx**: 인증 관련 페이지(모달 연동)

---

## 🧩 핵심 컴포넌트

* `Header` : 전역 내비게이션/검색 진입
* `Banner` : 메인 상단 하이라이트 영역
* `ContentGrid` : 카드 그리드 배치
* `MovieRow` : 가로 스크롤 리스트
* `ModalManager` : 로그인/회원가입 모달 상태 관리
* `LoginModal` / `SignupModal` : 인증 UI

---

## 🧠 커스텀 훅 & 유틸

* `useWishlist` : 위시리스트 상태, 토글, 중복 방지
* `Authentication.js` : 로그인/회원가입 유틸
* `tmdb.js` : TMDB 요청/엔드포인트 관리
* `URL.js` : 라우트/쿼리 유틸

---

## 📁 디렉토리 구조

<details>
<summary><b>접기/펼치기</b></summary>

```
├── 📂 src
│   ├── 📂 components
│   │   ├── 📄 Banner.jsx
│   │   ├── 📄 ContentGrid.jsx
│   │   ├── 📄 Header.jsx
│   │   ├── 📄 LoginModal.jsx
│   │   ├── 📄 ModalManager.jsx
│   │   ├── 📄 MovieRow.jsx
│   │   ├── 📄 SignupModal.jsx
│   ├── 📂 hooks
│   │   ├── 📄 useWishlist.js
│   ├── 📂 pages
│   │   ├── 📄 AuthPage.jsx
│   │   ├── 📄 Home.jsx
│   │   ├── 📄 PopularPage.jsx
│   │   ├── 📄 SearchPage.jsx
│   │   ├── 📄 WishlistPage.jsx
│   ├── 📂 styles
│   │   ├── 📄 Auth.css
│   │   ├── 📄 Banner.css
│   │   ├── 📄 ContentGrid.css
│   │   ├── 📄 Header.css
│   │   ├── 📄 LoginModal.css
│   │   ├── 📄 Modal.css
│   │   ├── 📄 MovieRow.css
│   │   ├── 📄 PopularPage.css
│   │   ├── 📄 SignupModal.css
│   │   ├── 📄 WishlistPage.css
│   ├── 📂 utils
│   │   ├── 📄 Authentication.js
│   │   ├── 📄 tmdb.js
│   │   ├── 📄 URL.js
│   ├── 📄 App.css
│   ├── 📄 App.js
│   ├── 📄 App.test.js
│   ├── 📄 index.css
│   ├── 📄 index.js
│   ├── 📄 logo.svg
│   ├── 📄 reportWebVitals.js
│   └── 📄 setupTests.js
```

