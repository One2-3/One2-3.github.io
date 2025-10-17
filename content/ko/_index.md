---
# Leave the homepage title empty to use the site title
title: ''
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: '6rem'

sections:
  - block: markdown
    id: top-carousel
    content:
      title: ''
      text: |-
        <!-- AlpineJS (슬라이더 로직 실행용) -->
        <script src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js" defer></script>

        <style>
          /* Alpine 초기 깜빡임 방지 */
          [x-cloak]{display:none}

          /* 화살표 버튼: 원형 아님, 반투명 < >  */
          .hero-arrow{
            position:absolute; top:50%;
            transform:translateY(-50%);
            font-size:3rem; line-height:1;
            color:rgba(255,255,255,.7);
            text-shadow:0 2px 8px rgba(0,0,0,.45);
            padding:.25rem .5rem;
            transition:opacity .2s ease, color .2s ease, transform .2s ease;
            user-select:none;
            z-index:10;
          }
          .hero-arrow:hover{ color:#fff; transform:translateY(-50%) scale(1.06); }
          .hero-arrow--left{ left:.75rem }
          .hero-arrow--right{ right:.75rem }

          /* 밑줄형 인디케이터 ___ */
          .hero-dots{ position:absolute; left:0; right:0; bottom:.75rem; display:flex; gap:.5rem; justify-content:center; z-index:10 }
          .hero-dot{
            height:3px; width:28px; opacity:.6; background:#fff;
            transition:all .25s ease;
          }
          .hero-dot--active{ width:44px; opacity:1 }
        </style>

        <div
          x-data="{
            slides: ['/media/slider1.jpg','/media/slider2.jpg','/media/slider3.jpg'],
            i: 0,
            t: null,
            start(){ this.stop(); this.t = setInterval(()=>{ this.i=(this.i+1)%this.slides.length }, 4000) },
            stop(){ if(this.t) clearInterval(this.t) },
            goto(n){ this.i=(n+this.slides.length)%this.slides.length; this.start() }
          }"
          x-init="start()"
          @mouseenter="stop()" @mouseleave="start()"
          class="relative w-full h-[33vh] overflow-hidden"
          x-cloak
        >
          <!-- 배경 슬라이드: 영역을 꽉 채움 -->
          <template x-for="(src, idx) in slides" :key="idx">
            <div
              class="absolute inset-0 bg-center bg-cover transition-opacity duration-700"
              :class="i===idx ? 'opacity-100' : 'opacity-0'"
              :style="`background-image:url(${src})`">
            </div>
          </template>

          <!-- 좌/우 네비게이션 -->
          <button class="hero-arrow hero-arrow--left" @click="goto(i-1)" aria-label="Previous">&lsaquo;</button>
          <button class="hero-arrow hero-arrow--right" @click="goto(i+1)" aria-label="Next">&rsaquo;</button>

          <!-- 밑줄형 인디케이터 -->
          <div class="hero-dots">
            <template x-for="(src, idx) in slides" :key="'dot'+idx">
              <div @click="goto(idx)" class="hero-dot" :class="i===idx ? 'hero-dot--active' : ''"></div>
            </template>
          </div>
        </div>

    design:
      columns: '1'
      spacing:
        padding: ['0', '0', '0', '0']

  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: |-
        - 나이 : 22세(04년)
        - 성별 : 여
        - 전화번호 : 010-5809-8035
        - 메일 : qkrwldb1695@naver.com
      # Show a call-to-action button under your biography? (optional)
      button:
        text: 이력서 다운로드
        url: '/uploads/resume.pdf'
      headings:
        about: ''
        education: ''
        interests: ''
        summary: ''
    design:
      # Apply a gradient background
      css_class: hbx-bg-gradient
      # Avatar customization
      avatar:
        size: medium # Options: small (150px), medium (200px, default), large (320px), xl (400px), xxl (500px)
        shape: circle # Options: circle (default), square, rounded
  - block: markdown
    content:
      title: '소개'
      subtitle: ''
      text: |-
        전북대학교 컴퓨터인공지능학부 재학생 박지유입니다.
    design:
      columns: '1'
  - block: collection
    content:
      title: Publications
      text: ''
      filters:
        folders:
          - publications
        exclude_featured: false
    design:
      view: badge-card
    active: false
  - block: collection
    id: talks
    active: false
    content:
      title: Recent & Upcoming Talks
      filters:
        folders:
          - events
    design:
      view: card
  - block: collection
    id: news
    active: false
    content:
      title: Recent News
      subtitle: ''
      text: ''
      # Page type to display. E.g. post, talk, publication...
      page_type: blog
      # Choose how many pages you would like to display (0 = all pages)
      count: 5
      # Filter on criteria
      filters:
        author: ''
        category: ''
        tag: ''
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        publication_type: ''
      # Choose how many pages you would like to offset by
      offset: 0
      # Page order: descending (desc) or ascending (asc) date.
      order: desc
    design:
      # Choose a layout view
      view: mini-card
      # Reduce spacing
      spacing:
        padding: [0, 0, 0, 0]
  - block: cta-card
    demo: true # Only display this section in the Hugo Blox Builder demo site
    content:
      title: 👉 Build your own academic website like this
      text: |-
        This site is generated by Hugo Blox Builder - the FREE, Hugo-based open source website builder trusted by 250,000+ academics like you.

        <a class="github-button" href="https://github.com/HugoBlox/hugo-blox-builder" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star HugoBlox/hugo-blox-builder on GitHub">Star</a>

        Easily build anything with blocks - no-code required!

        From landing pages, second brains, and courses to academic resumés, conferences, and tech blogs.
      button:
        text: Get Started
        url: https://hugoblox.com/templates/
    design:
      card:
        # Card background color (CSS class)
        css_class: 'bg-primary-300'
        css_style: ''
---
