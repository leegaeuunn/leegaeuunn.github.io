---
title: '챗봇 시스템'

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
publishDate: '2025-07-31'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: 인턴십
publication_short: 인턴십

abstract: 생성형 AI(GPT 등) 기반 문서 질의응답(RAG) 시스템을 활용해 사용자 질문에 대해 관련 문단과 해당 이미지까지 함께 응답하는 하이브리드 AI 챗봇 시스템을 만들었습니다. 

# Summary. An optional shortened abstract.
summary: ''

tags: ['깃허브', '휴고 템플릿', '개인 프로젝트']

# Display this page in the Featured widget?
featured: true
# url_pdf: 'AI 챗봇 시스템 중간 발표 최종.pdf'

---

{{< icon name="download" pack="fas" >}} [발표 자료 PDF 다운로드](AI%20챗봇%20시스템%20중간%20발표%20최종.pdf)

# AIManual
[이가은] 생성형 ai를 이용한 메뉴얼 챗봇 개발 

---

## **프로젝트 개요**

이 프로젝트는 **PDF 메뉴얼 기반 RAG(Retrieval-Augmented Generation) 챗봇 시스템**입니다.


* **Streamlit**: 프론트엔드 UI
* **FastAPI**: LLM 응답을 제공하는 API 서버
  
---

## **프로젝트 구조**

```
project/
 ├─ .env                # 환경 변수 (OpenAI 키 등)
 ├─ requirements.txt    # 의존성 패키지
 ├─ app/
 │   ├─ __init__.py
 │   ├─ api.py          # FastAPI 서버
 │   ├─ llm.py    # PDF 로딩, 벡터 DB, RAG 체인
 │   ├─ config.py       # answer_examples 등 설정
 ├─ frontend/
 │   ├─ chat.py   # Streamlit UI
 └─ extracted_images/   # PDF에서 추출된 이미지 저장 경로
```

| 파일명      | 역할 설명                                      |
|-------------|-----------------------------------------------|
| `llm.py`    | LangChain 기반 RAG 처리, 이미지 추출, 검색 등 핵심 기능 |
| `chat.py`   | Streamlit UI, 채팅 인터페이스, 세션 관리             |
| `config.py` | GPT 응답 유도용 예시 문장 설정                        |
| `.env`      | OpenAI API 키                                    |


---

### **1. 패키지 설치**

```bash
pip install -r requirements.txt
```

---

## **실행 방법**

### **1. Streamlit UI 실행**

Streamlit UI에서 FastAPI API를 호출하여 챗봇을 구동합니다:

```bash
cd project/frontend
streamlit run chat.py
```


### **2. FastAPI 서버 실행**

FastAPI 서버를 실행해 API를 제공합니다:

```bash
cd project
uvicorn app.api:app --reload
```



