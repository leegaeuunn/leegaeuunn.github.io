---
title: "전북대학교 이가은 | 포트폴리오"
date: 2025-10-05
type: landing

  
sections:
  - block: slider
    content:
      slides:
      - title: About Me
        content: 컴퓨터와 더 친해지고 싶은
        align: center
        background:
          image:
            filename: desk.png
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
      slide_height: '100vh'
      is_fullscreen: true
      loop: true
      interval: 4000

  - block: markdown
    content:
      title: ""
      text: |
        
        <div style="text-align: justify; max-width: 800px; margin: 0 auto; padding: 40px 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <img src="avatar.jpg" alt="이가은 프로필 사진" style="width: 200px; height: 200px; border-radius: 50%; object-fit: cover; margin: 0 auto 20px auto; display: block;">
            <h2>안녕하세요, 이가은입니다</h2>
          </div>
          <p>안녕하세요. 저는 전북대학교 컴퓨터 인공지능 학부에 재학 중인 이가은입니다. 여러 경험을 통해 다양한 기술과 능력을 향상시켜 편리한 UX를 제공할 수 있는 프론트엔드 개발자가 되고 싶습니다.</p>
          
          <div class="profile-section">
            <h3>소속</h3>
            <div class="profile-tags-container">
              <a href="https://www.jbnu.ac.kr" target="_blank" class="profile-tag profile-tag-organization">🏫 전북대학교</a>
              <a href="https://csai.jbnu.ac.kr" target="_blank" class="profile-tag profile-tag-department">💻 컴퓨터인공지능학부</a>
            </div>
          </div>

          <div class="profile-section">
            <h3>관심 분야</h3>
            <div class="profile-tags-container">
              <a href="https://www.google.com/search?q=인공지능" target="_blank" class="profile-tag profile-tag-interest">🤖 인공지능</a>
              <a href="https://www.google.com/search?q=프론트엔드+개발" target="_blank" class="profile-tag profile-tag-interest">💻 프론트 엔드</a>
              <a href="https://www.google.com/search?q=백엔드+개발" target="_blank" class="profile-tag profile-tag-interest">⚙️ 백 엔드</a>
            </div>
          </div>
        </div>


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
      columns: '3'

  - block: collection
    content:
      id: section-2
      title: More Projects
      subtitle: 추가 프로젝트
      text:
      count: 3
      offset: 3
      order: desc
      filters:
        folders:
          - project
    design:
      view: community/custom_list
      columns: '3'

  - block: collection
    content:
      id: section-3
      title: Travel Collections
      subtitle: 여행 기록을 함께 나눠요
      text:
      count: 3
      offset: 0
      order: desc
      filters:
        folders:
          - travel
    design:
      view: community/travel_card
      columns: '3'

  - block: markdown
    content:
      title: ""
      text: |
        <style>
          /* Profile Tags Styles */
          .profile-tag {
            padding: 8px 16px;
            border-radius: 20px;
            border: 1px solid #dee2e6;
            background-color: #f8f9fa;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 5px;
            transition: all 0.3s ease;
            margin: 5px;
          }

          .profile-tag:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            text-decoration: none;
          }

          .profile-tag-interest {
            color: #495057;
          }

          .profile-tag-organization {
            color: #1976d2;
            background-color: #e3f2fd;
            border-color: #bbdefb;
          }

          .profile-tag-organization:hover {
            background-color: #bbdefb;
            color: #1565c0;
          }

          .profile-tag-department {
            color: #388e3c;
            background-color: #e8f5e8;
            border-color: #c8e6c9;
          }

          .profile-tag-department:hover {
            background-color: #c8e6c9;
            color: #2e7d32;
          }

          .profile-tags-container {
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
            margin-top: 15px;
          }

          .profile-section {
            margin-top: 30px;
          }

          .profile-section h3 {
            text-align: center;
            margin-bottom: 15px;
          }
        </style>

 
---