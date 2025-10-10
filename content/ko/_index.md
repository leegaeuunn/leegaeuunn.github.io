---
# 메인 페이지 - Modern Minimalism Design
title:
date: 2024-10-05
type: landing

sections:

  - block: features
    content:
      title: |
        <div style="font-size: 2.5rem; font-weight: 700; line-height: 1.3; margin-bottom: 1.5rem;">
          안녕하세요 👋<br>
          웹 개발자가 되고 싶은<br>
          <span style="color: #3b82f6;">이가은</span>입니다
        </div>
      text: |
        <div style="font-size: 1.25rem; color: #64748b; line-height: 1.8; margin-bottom: 2rem;">
          프론트엔드에서 시작해 풀스택까지의 여정을 함께해주세요
        </div>
        <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 2rem;">
          <a href="contact" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; box-shadow: 0 4px 6px rgba(102, 126, 234, 0.3); transition: all 0.3s;">
            연락하기
          </a>
          <a href="#section-1" style="background: white; color: #667eea; padding: 12px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; border: 2px solid #667eea; transition: all 0.3s;">
            프로젝트 보기
          </a>
        </div>

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
      title: |
        <div style="font-size: 2rem; font-weight: 700; text-align: center; margin-bottom: 1rem;">
          Information
        </div>
      text: |
        <div style="font-size: 1.1rem; color: #64748b; text-align: center; margin-bottom: 3rem;">
          이가은의 기본 정보
        </div>
      items:
        - name: 이름
          icon: user
          icon_pack: fas
          description: |
            <div style="font-size: 1.1rem; font-weight: 500; color: #1e293b;">
              이가은
            </div>
        - name: 생년월일
          icon: calendar-days
          icon_pack: fas
          description: |
            <div style="font-size: 1.1rem; font-weight: 500; color: #1e293b;">
              2003.01.23
            </div>
        - name: 위치
          icon: location-dot
          icon_pack: fas
          description: |
            <div style="font-size: 1.1rem; font-weight: 500; color: #1e293b;">
              전북대학교 공과대학 7호관
            </div>
        - name: 연락처
          icon: phone
          icon_pack: fas
          description: |
            <div style="font-size: 1.1rem; font-weight: 500; color: #1e293b;">
              010-5906-5988
            </div>
        - name: 이메일
          icon: envelope
          icon_pack: fas
          description: |
            <div style="font-size: 1.1rem; font-weight: 500; color: #1e293b;">
              igaeun8@gmail.com
            </div>
        - name: 학력
          icon: graduation-cap
          icon_pack: fas
          description: |
            <div style="font-size: 1.1rem; font-weight: 500; color: #1e293b;">
              전북대학교 컴퓨터인공지능학부
            </div>
    design:
      columns: '3'


  - block: collection
    content:
      id: section-1
      title: |
        <div style="font-size: 2rem; font-weight: 700; text-align: center; margin-bottom: 1rem;">
          Projects
        </div>
      subtitle: |
        <div style="font-size: 1.1rem; color: #64748b; text-align: center; margin-bottom: 2rem;">
          진행했던 프로젝트들을 확인해보세요
        </div>
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
      title: |
        <div style="font-size: 2rem; font-weight: 700; text-align: center; margin-bottom: 1rem;">
          Interests
        </div>
      subtitle: |
        <div style="font-size: 1.1rem; color: #64748b; text-align: center; margin-bottom: 2rem;">
          관심있는 분야들을 소개합니다
        </div>
      text:
      count: 3
      filters:
        author: ''
        category: ''
        exclude_featured: false
        publication_type: ''
        tag: ''
      offset: 0
      order: desc
      page_type: field
    design:
      view: community/custom_card
      columns: '2'
    advanced:
      css_style: "text-align: center;"

  - block: collection
    content:
      title: |
        <div style="font-size: 2rem; font-weight: 700; text-align: center; margin-bottom: 1rem;">
          Travel
        </div>
      subtitle: |
        <div style="font-size: 1.1rem; color: #64748b; text-align: center; margin-bottom: 2rem;">
          여행 기록을 함께 나눠요
        </div>
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