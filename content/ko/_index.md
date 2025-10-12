---
# 메인 페이지 - Modern Minimalism Design
title:
date: 2025-10-05
type: landing

sections:
  - block: custom
    content:
      title: ""
      text: |
        <style>
        :root {
          --prog: 0;
          --p: 0;   /* 사람 등장 */
          --q: 0;   /* 접시/팔 퇴장 */
        }
        
        .scroll-demo-section {
          margin: 0;
          background: #fff;
          color: #111;
          font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
          min-height: 100vh;
        }
        
        /* === 장면 1: 스크롤 고정 시퀀스 === */
        .scene {
          height: 220vh;
          position: relative;
        }
        
        .stage {
          position: sticky;
          top: 0;
          height: 100vh;
          overflow: hidden;
          display: grid;
          place-items: center;
          background: #fff;
        }
        
        /* 접시+팔 */
        .plate-wrap {
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
          pointer-events: none;
          transform: none;
          opacity: 1;
        }
        
        .plate {
          max-width: min(60vw, 600px);
          width: 50vw;
          height: auto;
          user-select: none;
        }
        
        /* 사람: 아래에서 위로 떠오르며 나타남 */
        .person {
          position: absolute;
          left: 55%;
          bottom: 30vh;
          transform: translate(-50%, calc(120px * (1 - var(--p))));
          opacity: var(--p);
          width: min(20vw, 200px);
          will-change: transform, opacity;
          filter: drop-shadow(0 12px 24px rgba(0,0,0,.15));
          transition: opacity .1s linear;
        }
        
        /* 다음 섹션 */
        .next {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f7f7f9;
          min-height: 100vh;
        }
        
        .next h2 {
          font-weight: 700;
          letter-spacing: .2px;
          margin: 0;
        }
        </style>
        
        <div class="scroll-demo-section">
          <!-- 장면 1 -->
          <section class="scene" id="scene1">
            <div class="stage">
              <div class="plate-wrap">
                <!-- 접시+팔 이미지 -->
                <img class="plate" src="/projects/scroll-animation-demo/images/plate-arm.png" alt="접시와 팔">
              </div>
              
              <!-- 아래에서 떠오를 사람 -->
              <img class="person" src="/projects/scroll-animation-demo/images/person.png" alt="사람">
            </div>
          </section>
          
          <!-- 다음 페이지 섹션 -->
          <section class="next">
            <h2>스크롤 애니메이션 데모 완료!</h2>
          </section>
        </div>
        
        <script>
        /*
          스크롤 진행도 계산:
          - prog: 장면 전체 진행도 0~1
          - p   : 사람 등장 (0.0~0.65 구간을 0~1로 매핑)
          - q   : 접시/팔 퇴장 (0.65~1.0 구간을 0~1로 매핑)
        */
        (function(){
            const scene = document.getElementById('scene1');
            const root  = document.documentElement;
          
            const clamp01 = v => Math.max(0, Math.min(1, v));
            let ticking = false;
          
            function update(){
              ticking = false;
          
              const rect  = scene.getBoundingClientRect();
              const vh    = window.innerHeight || 1;
              const start = window.scrollY + rect.top;
              const end   = start + rect.height - vh;
              const denom = Math.max(1, end - start);
              const prog  = clamp01((window.scrollY - start) / denom);
          
              // 컷 분할 포인트
              const split = 0.7;
              const personStop = 0.4;  // 사람이 멈추는 지점 (0.4 = 40%)
          
              // 사람은 0~personStop 구간에서만 움직임
              const p = clamp01(prog / personStop);
              const q = clamp01((prog - split) / (1 - split));
          
              root.style.setProperty('--prog', prog.toFixed(4));
              root.style.setProperty('--p', p.toFixed(4));
              root.style.setProperty('--q', q.toFixed(4));
            }
          
            function onScroll(){
              if(!ticking){
                requestAnimationFrame(update);
                ticking = true;
              }
            }
          
            window.addEventListener('scroll', onScroll, {passive:true});
            window.addEventListener('resize', onScroll);
            update(); // 초기 렌더
          })();
        </script>

# # 미니멀 메인 페이지 
#   - block: hero
#     content:
#       title: 이가은
#       subtitle: "웹 개발자 지망생"
#       text: "Visionary Creator 🟪 | Linux Devotee 🐧 | Eternal Explorer 🚀 | Embracing Open Horizons ⭐"
#       image:
#         filename: avatar.jpg
#         alt: 이가은 프로필 사진
#       cta:
#         label: 연락하기
#         url: contact
#         classes: btn-primary
#       cta_alt:
#         label: 프로젝트 보기
#         url: project
#     design:
#       background:
#         gradient_end: '#ffffff'
#         gradient_start: '#ffffff'
#         text_color_light: false
#       spacing:
#         padding: ["100px", "0", "100px", "0"]
#       columns: '1'
#       image_position: top
#       image_anchor: center
#       text_position: center
#       align: center

  - block: slider
    content:
      slides:
      - title: About Me
        content: 컴퓨터와 더 친해지고 싶은
        align: center
        background:
          image:
            filename: human_computer_interaction.jpg
            filters:
              brightness: 0.35
          position: center
          color: '#000'

      - title: Interests
        content: 다양한 분야에 관심이 많은
        align: center
        background:
          image:
            filename: data_science.jpg
            filters:
              brightness: 0.35
          position: center
          color: '#000'

      - title: Travel
        content: 여행을 사랑하는
        align: center
        background:
          image:
            filename: fukuoka.jpg
            filters:
              brightness: 0.35
          position: center
          color: '#000'

      - title: Developer
        content: 끊임없이 성장하는 개발자
        align: center
        background:
          image:
            filename: coding.jpg
            filters:
              brightness: 0.35
          position: center
          color: '#000'

      - title: Contact
        content: 저에 대해 더 알고 싶으신가요?
        align: center
        background:
          image:
            filename: web_develop.jpg
            filters:
              brightness: 0.35
          position: center
          color: '#000'
        link:
          icon: arrow-right
          icon_pack: fas
          text: 자세히 보기
          url: contact

    design:
      slide_height: '550px'
      is_fullscreen: false
      loop: true
      interval: 4000

  - block: features
    id: features
    content:
      title: Information
      text: 이가은의 기본 정보
      items:
        - name: 이름
          icon: user
          icon_pack: fas
          description: 이가은
        - name: 생년월일
          icon: calendar-days
          icon_pack: fas
          description: 2003.01.23
        - name: 위치
          icon: location-dot
          icon_pack: fas
          description: 전북대학교 공과대학 7호관
        - name: 연락처
          icon: phone
          icon_pack: fas
          description: 010-5906-5988
        - name: 이메일
          icon: envelope
          icon_pack: fas
          description: igaeun8@gmail.com
        - name: 학력
          icon: graduation-cap
          icon_pack: fas
          description: 전북대학교 컴퓨터인공지능학부
    design:
      columns: '3'


  - block: collection
    content:
      id: section-1
      title: Projects
      subtitle: 진행했던 프로젝트들을 확인해보세요
      text:
      count: 3
      offset: 0
      order: desc
      filters:
        folders:
          - project
    design:
      view: community/custom_card
      columns: '2'

  - block: collection
    content:
      title: Travel
      subtitle: 여행 기록을 함께 나눠요
      text:
      count: 3
      filters:
        folders:
          - travel_jejudo
          - travel_fukuoka
          - travel_danang
    design:
      view: community/custom_card
      columns: '2'


 
---