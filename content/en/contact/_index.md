---
title: "Contact"
type: page        # single page
layout: contact
slug: "contact"
url: "/ko/contact/"
---

You can find me at Engineering Building 7, Jeonbuk National University.

<div class="mt-6 space-y-6">

  <!-- Email -->
  <div class="flex items-center gap-4">
    <!-- mail icon (lucide) -->
    <svg class="h-8 w-8 text-gray-200 dark:text-gray-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z"/>
      <path d="m22 6-10 7L2 6"/>
    </svg>
    <a href="mailto:qkrwldb1695@naver.com" class="text-xl">qkrwldb1695@naver.com</a>
  </div>

  <!-- Phone -->
  <div class="flex items-center gap-4">
    <!-- phone icon -->
    <svg class="h-8 w-8 text-gray-200 dark:text-gray-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.09 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.31 1.78.57 2.64a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.44-1.14a2 2 0 0 1 2.11-.45c.86.26 1.74.45 2.64.57A2 2 0 0 1 22 16.92Z"/>
    </svg>
    <span class="text-xl">010-5809-8035</span>
  </div>

  <!-- Location -->
  <div class="flex items-center gap-4">
    <!-- map-pin icon -->
    <svg class="h-8 w-8 text-gray-200 dark:text-gray-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M20.84 18.36A9 9 0 1 0 3.16 18.36L12 22l8.84-3.64Z"/>
      <circle cx="12" cy="11" r="3"/>
    </svg>
    <span class="text-xl">Engineering Building 7, Jeonbuk National University, Jeonju, Jeollabuk-do 54896</span>
  </div>
</div>

<!-- Leaflet Styles/Scripts (CDN) -->
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

<!-- Map container -->
<div id="map" class="mt-6 rounded-xl overflow-hidden" style="height: 420px;"></div>

<script>
  // Approximate coordinates near JBNU Engineering (replace with exact if needed)
  const lat = 35.84614386613747;
  const lng = 127.13450518747047;

  // Create map
  const map = L.map('map').setView([lat, lng], 16);

  // Tile layer (OpenStreetMap)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // Marker + popup
  const marker = L.marker([lat, lng]).addTo(map);
  marker.bindPopup('Near Engineering Building 7, JBNU').openPopup();
</script>
