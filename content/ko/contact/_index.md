---
title: "Contact"
type: page        # 일반 단일 페이지
layout: contact
slug: "contact"
url: "/ko/contact/"
---

전북대학교 공과대학 7호관에서 만날 수 있습니다.

<div class="mt-6 space-y-6">

  <!-- 이메일 -->
  <div class="flex items-center gap-4">
    <!-- mail 아이콘 (lucide) -->
    <svg class="h-8 w-8 text-gray-200 dark:text-gray-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z"/>
      <path d="m22 6-10 7L2 6"/>
    </svg>
    <a href="mailto:qkrwldb1695@naver.com" class="text-xl">qkrwldb1695@naver.com</a>
  </div>

  <!-- 전화 -->
  <div class="flex items-center gap-4">
    <!-- phone 아이콘 -->
    <svg class="h-8 w-8 text-gray-200 dark:text-gray-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.09 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.31 1.78.57 2.64a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.44-1.14a2 2 0 0 1 2.11-.45c.86.26 1.74.45 2.64.57A2 2 0 0 1 22 16.92Z"/>
    </svg>
    <span class="text-xl">010-5809-8035</span>
  </div>

  <!-- 위치 -->
  <div class="flex items-center gap-4">
    <!-- map-pin 아이콘 -->
    <svg class="h-8 w-8 text-gray-200 dark:text-gray-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M20.84 18.36A9 9 0 1 0 3.16 18.36L12 22l8.84-3.64Z"/>
      <circle cx="12" cy="11" r="3"/>
    </svg>
    <span class="text-xl">전북대학교 공과대학 7호관, 전주시, 전라북도 54896</span>
  </div>
</div>

<!-- Leaflet 스타일/스크립트 (CDN) -->
<link
  rel="stylesheet"
  href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
  integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
  crossorigin=""
/>
<script
  src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
  integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
  crossorigin=""
></script>

<!-- 지도 영역 -->
<div id="map" class="mt-6 rounded-xl overflow-hidden" style="height: 420px;"></div>

<script>
  // 전북대 공대 인근 대략 좌표 (원하면 정확 좌표로 수정)
  const lat = 35.84614386613747;
  const lng = 127.13450518747047;

  // 지도 생성
  const map = L.map('map').setView([lat, lng], 16);

  // 타일 레이어 (OpenStreetMap)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // 마커 + 팝업
  const marker = L.marker([lat, lng]).addTo(map);
  marker.bindPopup('전북대학교 공과대학 7호관 근처').openPopup();
</script>
