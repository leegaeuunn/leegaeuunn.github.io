---
title: "전북대학교 이가은 | 포트폴리오"
date: 2025-10-05
type: landing

  
sections:
  - block: slider
    content:
      slides:
      - title: About Me
        content: Want to get closer to computers
        align: center
        background:
          image:
            filename: desk.png
            filters:
              brightness: 0.35
          position: center
          color: '#000'

      - title: Interests
        content: Interested in various fields
        align: center
        background:
          image:
            filename: data_science.jpg
            filters:
              brightness: 0.35
          position: center
          color: '#000'

      - title: Travel
        content: Love traveling
        align: center
        background:
          image:
            filename: fukuoka.jpg
            filters:
              brightness: 0.35
          position: center
          color: '#000'

      - title: Developer
        content: Continuously growing developer
        align: center
        background:
          image:
            filename: coding.jpg
            filters:
              brightness: 0.35
          position: center
          color: '#000'

      - title: Contact me!
        content: Want to know more about me?
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
          text: Learn more
          url: contact

    design:
      slide_height: '100vh'
      is_fullscreen: true
      loop: true
      interval: 4000

  - block: markdown
    content:
      title: About Me
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

        <div style="text-align: justify; max-width: 800px; margin: 0 auto; padding: 40px 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <img src="avatar.jpg" alt="이가은 프로필 사진" style="width: 200px; height: 200px; border-radius: 50%; object-fit: cover; margin: 0 auto 20px auto; display: block;">
            <h2>Hello, I'm Gaeun Lee 😊</h2>
          </div>
          <p>Hello. I am Gaeun Lee, a student in the Department of Computer Artificial Intelligence at Jeonbuk National University. Through various experiences, I want to improve my skills and abilities to become a front-end developer who can provide convenient UX.</p>
          
          <div class="profile-section">
            <h3>Affiliation</h3>
            <div class="profile-tags-container">
              <a href="https://www.jbnu.ac.kr" target="_blank" class="profile-tag profile-tag-organization">🏫 Jeonbuk National University</a>
              <a href="https://csai.jbnu.ac.kr" target="_blank" class="profile-tag profile-tag-department">💻 Department of Computer AI</a>
            </div>
          </div>

          <div class="profile-section">
            <h3>Interests</h3>
            <div class="profile-tags-container">
              <a href="https://www.google.com/search?q=artificial+intelligence" target="_blank" class="profile-tag profile-tag-interest">🤖 AI</a>
              <a href="https://www.google.com/search?q=frontend+development" target="_blank" class="profile-tag profile-tag-interest">💻 Frontend</a>
              <a href="https://www.google.com/search?q=backend+development" target="_blank" class="profile-tag profile-tag-interest">⚙️ Backend</a>
            </div>
          </div>
        </div>
        
  - block: features
    id: features
    content:
      title: Information
      text: Gaeun Lee's basic information
      items:
        - name: Name
          icon: user
          icon_pack: fas
          description: Gaeun Lee
        - name: Birth Date
          icon: calendar-days
          icon_pack: fas
          description: 2003.01.23
        - name: Location
          icon: location-dot
          icon_pack: fas
          description: Jeonbuk National University
        - name: Contact
          icon: phone
          icon_pack: fas
          description: 010-5906-5988
        - name: Email
          icon: envelope
          icon_pack: fas
          description: igaeun8@gmail.com
        - name: Education
          icon: graduation-cap
          icon_pack: fas
          description: Computer AI Department
    design:
      columns: '3'


  - block: collection
    content:
      id: section-1
      title: Projects
      subtitle: Check out the projects I've worked on
      text:
      count: 2
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
      id: section-3
      title: Travel
      subtitle: Introducing my travel records
      text:
      count: 3
      offset: 0
      order: desc
      filters:
        folders:
          - travel
    design:
      view: community/custom_list
      columns: '3'


---