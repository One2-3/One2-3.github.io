---
widget: projects_side_cards   # ← 새 위젯 이름
id: projects
headless: true
weight: 30
id: projects

content:
  title: "프로젝트"
  text: "최근 작업입니다."
  items:
    - title: "프로젝트 1"
      summary: "소개할만한 프로젝트가 없어 칸만 만들어둠"
      bullets:
        - "기능 A"
        - "기능 B"
      image: "pro1.jpg"       # 같은 번들 리소스 / assets/media/pro1.jpg / 절대 URL 모두 OK
      url: "/ko/project/p1/"
    - title: "프로젝트 2"
      summary: "간단 설명 한 줄…"
      bullets:
        - "요약 1"
        - "요약 2"
      image: "pro2.jpg"
      url: "/ko/project/p2/"
    - title: "프로젝트 3"
      summary: "간단 설명 한 줄…"
      bullets:
        - "포인트 1"
        - "포인트 2"
      image: "pro3.jpg"
      url: "/ko/project/p3/"
---
