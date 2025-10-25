---
title: '인턴 개발일지 - RAG 기반 LLM Application 개발'

# Authors
authors:
  - 이가은

# Author notes (optional)
author_notes:
  - 'Corresponding author'

# Schedule page publish date (NOT publication's date).
publishDate: '2024-10-06'

# Publication type.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: 현장실습   
publication_short: 현장실습

abstract: RAG(Retrieval-Augmented Generation) 방식을 활용한 LLM Application 개발 과정을 기록한 인턴 개발일지입니다.

# Summary. An optional shortened abstract.
summary: 'RAG 구조 이해부터 FastAPI 구현까지의 전 과정을 단계별로 정리한 개발일지'

tags: ['RAG', 'LLM', 'FastAPI', 'Langchain', 'Vector DB', '현장실습']

# Display this page in the Featured widget?
featured: true
---

# 인턴 개발일지

## 📋 프로젝트 개요

**메디앙 시스템** 연구소에서 진행한 하계 계절제 현장실습을 통해 **RAG(Retrieval-Augmented Generation) 기반 AI 챗봇 시스템**을 개발했습니다.
이 개발일지는 RAG 기반 LLM Application 개발의 전 과정을 단계별로 기록한 것으로, 초기 개념 이해부터 실제 구현까지의 모든 과정을 포함하고 있습니다.

### 🎯 프로젝트 목표
전북특별자치도 먹거리 시스템, 로컬푸드, 시군매니저 사이트의 매뉴얼 문서를 활용하여 사용자 질문에 정확한 답변을 제공하는 지능형 챗봇 시스템 구축

### 🔧 개발 환경 및 도구
- **Backend**: Python, FastAPI, LangChain
- **AI/ML**: OpenAI GPT-4, RAG, Vector Database (Chroma)
- **Frontend**: Streamlit
- **Database**: SQL
- **API Testing**: Postman
- **Deployment**: 로컬 환경 (Streamlit 기반 시연)

### 📈 주요 성과
- **RAG 시스템 구현**: 문서 기반 검색 및 생성 모델 통합
- **메타데이터 구조화**: PDF 문서의 체계적 분할 및 인덱싱
- **멀티모달 응답**: 텍스트와 이미지를 함께 제공하는 응답 시스템
- **API 설계**: FastAPI를 활용한 RESTful API 구조 설계

### 🚀 향후 계획
현장실습 기간의 제약으로 인해 API 실사용 부분까지는 구현하지 못했으나, 이번 경험을 통해 **인공지능 분야에 대한 깊은 관심**을 가지게 되었으며, 향후 AI 기술 발전에 기여하고자 합니다.

---

## 🛠️ 사용 기술 스택

| 분야 | 기술 |
|------|------|
| **언어** | Python |
| **AI/ML** | LLM, RAG, OpenAI GPT-4 |
| **프레임워크** | LangChain, FastAPI, Streamlit |
| **데이터베이스** | Chroma (Vector DB), SQL |
| **API 테스트** | Postman |
| **배포** | 로컬 환경 |

## ☑️ 7월 4일 (1주차)

### 1️⃣ 1주차 - RAG 구조 및 개발환경 구축
### 1. RAG 방식의 개념 이해

> **RAG(Retrieval-Augmented Generation)**은 **검색 기반 생성 방식**으로, 대형 언어 모델(LLM)이 자체 지식만으로 답변하는 것이 아니라 **외부 지식 기반**을 검색하여 **신뢰도 있는 응답**을 생성하는 방식입니다.

- RAG 구축 포인트는 LLM이 답변을 할 때 참조하길 바라는 데이터를 외부 DB에 저장해놓고, 임베딩 과정을 통해 빠르게 유사도를 계산해서 답변을 생성해야합니다.
- RAG는 LLM이 응답을 생성하기 전에 신뢰할 수 있는 외부 지식 베이스를 참조해서 최신 정보를 반영하기 때문에 답변의 부정확성이나 환각을 줄일 수 있습니다.

#### 1.1 Retrieval Augmented Generation(RAG)란?

1. **Retrieval**: 데이터를 가져오는 것 - 구체적으로는 "컴퓨터 시스템에 저장된 자료를 취득하는 것"이라는 뜻. 언어모델이 가지고 있지 않은 정보를 가져오는 것
2. **Augmented**: AR/VR에 사용되는 것과 같은 단어 - 마치 사실인 것 처럼. Retrieval된 데이터를 LLM에게 주면서, "마치 이 정보를 아는 것 처럼"
3. **Generation**: 생성 - **내가 가져온 데이터를 제공할테니, 이 정보를 아는 것 처럼, "답변을 생성해라"**

### 2. 기본 RAG 파이프라인 기본 구조

```
원본 데이터 → 문서 load → 분할 split → 임베딩 embedding → 벡터 DB에 저장 → 사용자 질의 query → 유사 문단 retrieval → LLM 응답 생성 response
```

### 3. 주요 단계 설명

#### 1) 문서 Load
- `PyMuPDF` 등으로 PDF 및 다양한 형식의 문서 로딩
- PDF → 텍스트 변환
- 문서 load 다양한 인터페이스 지원하지만 PDF 텍스트 추출을 목적으로 함

#### 2) Split (청크화)
- document → small chunks
- 추출한 문서의 텍스트 길이가 길기 때문에 작은 단위로 청크화 하는 작업이 필요하다.
- `RecursiveCharacterTextSplitter` 등 활용

#### 3) Embedding (임베딩)
- 텍스트를 **숫자 벡터**로 변환하여 의미 파악
- 의미 기반 검색을 위해 필수
- AI 모델은 수치를 다루므로, 문자를 벡터로 변환 필요
- embedding이 필요한 경우:
  - 여러 문서 간 의미 기반 검색 또는 비교가 필요한 경우
  - LLM이 생성 응답 시 **외부 정보 주입**이 필요한 경우

## ☑️ 7월 10일 (2주차)

### 2️⃣ 2주차 - 텍스트 분할, 벡터 DB 구성, PDF 이미지 추출

## 💡 RAG 구조를 활용한 LLM Application 구현

### 작동 구조
1. 문서의 내용을 읽는다.
2. 문서를 쪼갠다. (토큰수 초과로 답변을 생성하지 못할 수 있고, 문서가 길면 답변 생성이 오래 걸림)
3. 임베딩 -> 벡터 데이터베이스에 저장
4. 질문이 있을 때, 벡터 데이터베이스에 유사도 검색
5. 유사도 검색으로 가져온 문서를 LLM에 질문과 같이 전달

### 문서 업로드 + 텍스트 분할

```python
%pip install -qU langchain-text-splitters
%pip install -qU langchain_community pymupdf

from langchain_community.document_loaders import PyMuPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter

text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=1500,
    chunk_overlap=200,
)
loader = PyMuPDFLoader('./메뉴얼(이미지포함).pdf')
docs = loader.load_and_split(text_splitter=text_splitter)
```

### 이미지 추출

```python
%pip install -qU pymupdf pillow langchain_community pytesseract

import fitz  # PyMuPDF
import os
from PIL import Image

def extract_images_from_pdf(pdf_path: str, output_dir: str) -> list[str]:
    os.makedirs(output_dir, exist_ok=True)
    pdf = fitz.open(pdf_path)
    saved_image_paths = []
    image_index = 1

    for page_num, page in enumerate(pdf, start=1):
        images = page.get_images(full=True)
        
        for img in images:
            xref = img[0]
            img_info = pdf.extract_image(xref)
            img_bytes = img_info["image"]
            img_ext = img_info["ext"]
            
            img_filename = f"image_{image_index}.{img_ext}"
            img_path = os.path.join(output_dir, img_filename)
            
            with open(img_path, "wb") as f:
                f.write(img_bytes)
            
            saved_image_paths.append(img_path)
            image_index += 1
    
    pdf.close()
    return saved_image_paths
```

### Chroma 데이터베이스 벡터 생성 → 저장 → 임베딩

```python
from dotenv import load_dotenv
from langchain_openai import OpenAIEmbeddings
from langchain_chroma import Chroma

load_dotenv()

embeddings = OpenAIEmbeddings(model="text-embedding-3-large")
database = Chroma.from_documents(
    documents=docs,
    embedding=embeddings,
    collection_name="chroma-menual",
    persist_directory="./chroma"
)
```

### 구현한 것: services/
1. **openaiService**: GPT 호출
2. **embeddingService**: 문단 임베딩 생성
3. **vectorStore**: Chroma 벡터 저장/검색
4. **pdfService**: PDF 텍스트 + 이미지 추출
5. **userService**: 유저 정보 처리
6. **ragPipeline**: 질문 처리 핵심 흐름 (유사 문단 검색 → GPT로 답 생성)

## ☑️ 7월 15일 (3주차)

### 📄 메타데이터 구조화 및 개선

## ✅ 목적
- `공공급식 - 단가 관리.pdf` 문서를 기반으로 **RAG 기반 AI 챗봇 시스템을 구축**
- 정확한 응답을 위해 **LangChain + Chroma**를 활용한 벡터 검색 적용
- 응답 품질 향상을 위해 **정형화된 메타데이터 수동/자동 구조 적용** 실험

### 1. 수동 메타데이터 추출

#### 적용 방식
- PDF 각 페이지의 텍스트와 메타데이터(`section_title`, `subsection_num` 등)를 직접 정의하여 `Document` 객체로 구성
- 예시 구조:

```python
Document(
    page_content="발주처 설정 & 단가 등록",
    metadata={
        "title": "공공급식 단가 관리",
        "section": "Ⅳ",
        "section_title": "발주처 설정 & 단가 등록",
        "subsection": "1",
        "subsection_title": "발주처 그룹 등록",
        "page_range": [37],
        "image_paths": ["images/section4-1_page37_img1.png"]
    },
)
```

#### 장점
- 구조화된 검색 가능 (`section_title`, `subsection_title` 기준 필터링 용이)
- 이미지 파일 경로 포함 가능 (`has_image`, `image_file`)

#### 단점
- 수작업으로 작성해야 하며 문서가 많아질수록 유지 관리 어려움
- **수작업으로 작성한 메타데이터 값만** chroma 벡터에 저장되고 검색됨
- 이미지 메타데이터는 **하드코딩 방식으로만 연결 가능**

### 2. 자동 메타데이터 추출 (LangChain 기본 로더 사용)

#### 적용 방식
- `PyMuPDFLoader`와 `RecursiveCharacterTextSplitter` 사용하여 PDF 전체 텍스트 및 이미지 자동 추출

#### 단점
- 사용자 정의 구조 (`section_num`, `subsection_title` 등)가 **포함되지 않음**
- 이미지 메타데이터는 **하드코딩 방식으로만 연결 가능**

### 3. 저장한 메타구조로 PDF 전체 내용의 메타데이터를 자동으로 추출

#### 적용 방식
- 페이지를 subsection 기준으로 분할하고 섹션 정보 메타데이터를 삽입
- 텍스트에서 로마자 / 숫자형 정규식을 기반으로 문단 분할
- 각 분할 문단(`Document`)에 다음과 같은 **메타데이터 자동 삽입**:
  - `page_number`
  - `section_num`, `section_title`
  - `subsection_num`, `subsection_title`
  - `chunk_index`
  - `has_image`, `image_file`

## ☑️ 7월 24일 (4주차)

### 📄 API 테스트

FastAPI를 이용해서 API 호출 테스트를 해보았습니다.

#### 프로젝트 구조
```
project/
 ├─ .env                # 환경 변수 (OpenAI 키 등)
 ├─ requirements.txt    # 의존성 패키지
 ├─ app/
 │   ├─ __init__.py
 │   ├─ api.py          # FastAPI 서버
 │   ├─ llm.py          # PDF 로딩, 벡터 DB, RAG 체인
 │   ├─ config.py       # answer_examples 등 설정
 ├─ frontend/
 │   ├─ chat.py         # Streamlit UI
 └─ extracted_images/   # PDF에서 추출된 이미지 저장 경로
```

#### API 구현
```python
from fastapi import FastAPI
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
from app.llm import get_ai_response
import json

app = FastAPI()

class ChatRequest(BaseModel):
    user_message: str

@app.post("/chat_stream")
async def chat_stream(request: ChatRequest):
    """스트리밍 응답"""
    stream, image_path = get_ai_response(request.user_message)

    async def event_generator():
        for chunk in stream:
            data = chunk.get("answer", "")
            if data:
                yield json.dumps({"type": "text", "content": data}) + "\n"

        # 이미지 경로 전송
        if image_path:
            yield json.dumps({"type": "image", "content": image_path}) + "\n"

    return StreamingResponse(event_generator(), media_type="application/json")
```

### 토큰수 출력 + 특정 사이즈 이상 이미지 출력 필터링

#### 1. 토큰 사용량 출력 기능 추가
- `llm.py`에 `import tiktoken`을 추가하여 **프롬프트 토큰 / 응답 토큰 / 전체 토큰 수를 출력**할 수 있도록 수정
- 모델별 인코딩에 따라 토큰을 계산하며, OpenAI 모델 기준 `"cl100k_base"`를 기본값으로 지정

#### 2. 이미지 필터링 기준 설정 (100x100 이상만 추출)
```python
def extract_images_from_pdf(pdf_path: str, output_dir: str, min_width=100, min_height=100) -> dict[int, list[str]]:
    # PyMuPDF를 이용하여 PDF 내 이미지 크기를 필터링하는 로직을 구현
    # 너비·높이 모두 100px 이상인 이미지만 추출하여 저장
```

## ☑️ 7월 31일 (5주차)

### 5️⃣ 5주차 - 메타데이터 구조 개선 (섹션 단위로 document 생성)

#### 1. 문제: 페이지 단위 처리의 한계
기본적으로 PyMuPDF 등 대부분의 PDF 처리 라이브러리는 **페이지 단위**로 텍스트와 이미지를 로드하고 저장합니다만, 이번 프로젝트에서는 사용자의 질문에 정확히 응답하기 위해, 문서 내의 **논리적 단위인 subsection(하위 섹션), subsubsection(서브서브섹션)** 기준으로 문서를 세분화할 필요가 있었습니다.

#### 2. 문서 분할 및 병합 로직 설계

##### (1) 섹션 단위 분할 함수
```python
def split_by_section_and_subsection(pages: list[Document]) -> list[Document]:
    # 정규표현식을 이용해 섹션 번호(예: Ⅳ), 하위 섹션 번호(예: 5.), 서브서브섹션 번호(예: 5.1)를 추출
    # 각 추출 단위에 해당하는 텍스트 블록과 메타데이터를 함께 저장
```

##### (2) 동일 섹션 병합 함수
```python
def merge_documents_by_id(docs: list[Document]) -> list[Document]:
    # 섹션 번호, 하위 섹션 번호, 서브서브섹션 번호를 기준으로 doc_id를 생성
    # 동일 doc_id를 가지는 문서를 하나로 병합
    # 결과적으로 하나의 서브서브섹션이 여러 페이지에 걸쳐 있어도 하나의 문서로 인식
```

#### 3. 문제 및 해결 과정

##### 문제 1. 이미지 출력이 되지 않음
- 초기 코드에서 **첫 번째 이미지 한 장만 출력되도록 작성되어 있었음**
- 이후 `image_paths`를 리스트로 처리하고, 여러 이미지를 모두 출력하도록 수정하여 해결

##### 문제 2. 텍스트 응답이 비정상 출력
- 이미지 출력 처리 도중 응답 텍스트 자체가 누락되는 문제가 발생
- 응답 처리 로직에서 텍스트 스트리밍 처리(`yield`)와 메타데이터 응답 부분을 분리하여 해결

##### 문제 3. 서브서브섹션 메타데이터 누락
- Chroma DB에 저장하거나 로드하는 과정에서 메타데이터가 누락되는 문제로 파악
- 메타데이터 직렬화/역직렬화 과정에서 누락 없이 저장되도록 수정함

##### 문제 4. 섹션 번호가 잘못 인식됨
- 문서 내에서 새로운 섹션 번호가 등장할 때, 기존 상태 변수(`current_section_num` 등)가 초기화되지 않음
- 새로운 번호를 감지할 경우 해당 값으로 상태를 갱신하도록 로직 수정

##### 문제 5. 서브서브섹션이 여러 페이지에 걸쳐 있을 경우 분리 처리됨
- 예: `Ⅳ.8.1`이 2페이지에 걸쳐 존재할 경우 두 개의 문서로 처리됨
- 이를 해결하기 위해 병합 로직(`merge_documents_by_id`)에서 `doc_id`가 동일한 경우 텍스트와 이미지를 통합하도록 구현

#### 4. 구현 결과
- 메타데이터가 정확하게 추출되고, 서브서브섹션 단위의 문서 병합이 정상적으로 작동
- 하나의 서브서브섹션이 여러 페이지에 걸쳐 있는 경우에도 이미지와 텍스트가 모두 통합 출력

### 최종 발표

#### 발표 자료
- AI 챗봇 시스템 최종 발표
{{< icon name="download" pack="fas" >}} [발표 자료 PDF 다운로드](AI%20챗봇%20시스템%20중간%20발표%20최종.pdf)


