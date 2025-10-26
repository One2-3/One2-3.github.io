# 지유 박 — 포트폴리오 (README)

박지유의 개인 포트폴리오 사이트입니다.  
공개 URL 경로는 그대로 **`/ko/`** 아래에 두었고, 위젯 기반 레이아웃(front matter의 `widget:`, `headless:`, `weight:` 등)을 사용합니다.  

---

## ✨ 주요 섹션

- **About Me**: `authors/admin/_index.md` 및 `about/` 위젯에서 프로필/소개 구성
- **Key Skills**: 백엔드/프런트엔드/게임/클라우드/DB/지속 학습 항목 소개
- **Projects**: `Project 1–3` 템플릿(역할, 목표, 해결, 지표, 회고)
- **Contact**: 이메일/전화/위치 및 지도(전북대 공대 7호관 인근 좌표)
- **Home**: 인트로/스킬/프로젝트 카드/CTA/슬라이더로 구성된 랜딩

---

## 🗂 디렉터리 구조(발췌)

```
├─ about/
  ├─ _index.md
  ├─ avatar.md
  ├─ intro.md
├─ authors/
  ├─ _index.md
  ├─ authors/admin/
    ├─ _index.md
    ├─ avatar.png
├─ blog/
  ├─ _index.md
  ├─ blog/data-visualization/
    ├─ featured.jpg
    ├─ index.md
    ├─ line-chart.json
    ├─ results.csv
  ├─ blog/get-started/
    ├─ featured.jpg
    ├─ index.md
  ├─ blog/project-management/
    ├─ featured.jpg
    ├─ index.md
  ├─ blog/second-brain/
    ├─ featured.jpg
    ├─ index.md
  ├─ blog/teach-courses/
    ├─ ambient-piano.mp3
    ├─ featured.jpg
    ├─ index.md
├─ contact/
  ├─ _index.md
├─ home/
  ├─ cta.md
  ├─ debug.md
  ├─ features.md
  ├─ index.md
  ├─ intro_center.md
  ├─ profile_intro.md
  ├─ projects.md
  ├─ slider.md
├─ project/
  ├─ _index.md
  ├─ p1.md
  ├─ p2.md
  ├─ p3.md
```

> 각 섹션 페이지는 `headless`, `weight`, `widget`으로 노출 여부/정렬/레이아웃을 제어합니다.

---

## 🧭 자주 수정하는 파일

- `authors/admin/_index.md` — 이름/역할/학교·전공/소셜/“Download CV” 라벨
- `about/_index.md`, `about/intro.md` — 자기소개 섹션 및 본문
- `home/intro_center.md` — 랜딩 인사말과 목표 문장
- `home/features.md` — “Key Skills” 그리드(아이콘·설명)
- `home/projects.md` — 홈의 프로젝트 사이드 카드 목록
- `home/cta.md` — 콜투액션 문구와 버튼 링크
- `home/slider.md` — 슬라이더(태그라인/프로젝트 소개/협업 제안)
- `project/p1.md`, `project/p2.md`, `project/p3.md` — 각 프로젝트 상세(역할/목표/해결/성과/배운 점)
- `contact/_index.md` — 연락처 라벨 및 지도 팝업 문구

> 현재 공개 링크는 `/ko/` 접두어를 사용합니다. 추후 영어를 `/en/` 또는 루트(`/`)에 두고 싶다면 다국어 설정과 내부 링크를 함께 조정하세요.

---

## 🚀 로컬 개발(Hugo 기준)

이 프로젝트는 위젯 중심의 Hugo(또는 유사 SSG) 구성을 가정합니다. Hugo Extended 권장.

1. **Hugo Extended**(v0.124+)와 Git 설치
2. 저장소 클론 후, 테마/서브모듈이 있다면 초기화
   ```bash
   git submodule update --init --recursive
   ```
3. 개발 서버 실행
   ```bash
   hugo server
   ```
4. 브라우저에서 로컬 URL 접속(보통 http://localhost:1313)

> 다른 SSG를 쓰는 경우에도 콘텐츠/프론트매터 구조는 그대로 활용 가능합니다.

---

## 🏗 빌드 & 배포

- **프로덕션 빌드**
  ```bash
  hugo --minify
  ```
  결과물은 `public/` 폴더에 생성됩니다.

- **GitHub Pages 배포(예시 워크플로)**

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          submodules: true
      - uses: peaceiris/actions-hugo@v3
        with:
          hugo-version: 'latest'
          extended: true
      - run: hugo --minify
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{{{ secrets.GITHUB_TOKEN }}}}
          publish_dir: ./public
```

---

## 🔧 커스터마이즈 팁

- **언어 경로 전환**: 영어를 `/en/` 또는 루트에 두려면 i18n/섹션 설정과 내부 링크(`/ko/about/` → `/about/`) 동시 수정
- **프로젝트 이미지**: `/media/pro*.jpg`를 프로젝트 스크린샷으로 교체(절대 URL도 가능)
- **아이콘**: features 위젯은 의미 기반 아이콘 이름(`server`, `monitor`, `gamepad`, `cloud`, `database`, `graduation-cap`)을 사용합니다. 테마/아이콘 세트와 호환되는 이름을 적용하세요.
- **프로필 & 이력서**: 프로필 사진과 “Download Resume” 링크의 대상 파일이 존재하는지 확인

---

## 📄 라이선스

원하는 라이선스를 선택해 루트에 추가하세요(예: MIT). 별도 라이선스가 없다면 기본적으로 **All Rights Reserved**입니다.

---

## 🙌 감사의 말

- 위젯 기반 Hugo 레이아웃(Wowchemy 스타일 프론트매터)에서 동작합니다.
- 원문은 한국어이며, 파일명/경로를 그대로 유지한 채 영어로 현지화했습니다.

---

## 📬 연락

- **Email**: `contact/_index.md`와 `authors/admin/_index.md`에서 갱신
- **Location**: 전북대학교 공과대학 7호관(지도 팝업)
- **Collaboration**: 홈의 CTA 버튼 또는 이 저장소의 이슈를 통해 제안해 주세요.
