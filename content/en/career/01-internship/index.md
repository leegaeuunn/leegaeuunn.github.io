---
title: 'Intern Development Journal - RAG-based LLM Application Development'

# Authors
authors:
  - Gaeun Lee

# Author notes (optional)
author_notes:
  - 'Corresponding author'

# Schedule page publish date (NOT publication's date).
publishDate: '2024-10-06'

# Publication type.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: Internship   
publication_short: Internship

abstract: This is an intern development journal recording the development process of an LLM Application using RAG (Retrieval-Augmented Generation) method.

# Summary. An optional shortened abstract.
summary: 'A development journal that organizes the entire process from understanding RAG structure to FastAPI implementation step by step'

tags: ['RAG', 'LLM', 'FastAPI', 'Langchain', 'Vector DB', 'Internship']

# Display this page in the Featured widget?
featured: true
---

# Intern Development Journal

## 📋 Project Overview

Through the summer internship at **Median System** research lab, I developed a **RAG(Retrieval-Augmented Generation) based AI chatbot system**.
This development journal records the entire process of developing RAG-based LLM Applications step by step, from initial concept understanding to actual implementation.

### 🎯 Project Goals
Building an intelligent chatbot system that provides accurate answers to user questions using manual documents from Jeonbuk Special Self-Governing Province food system, local food, and city/county manager sites.

### 🔧 Development Environment and Tools
- **Backend**: Python, FastAPI, LangChain
- **AI/ML**: OpenAI GPT-4, RAG, Vector Database (Chroma)
- **Frontend**: Streamlit
- **Database**: SQL
- **API Testing**: Postman
- **Deployment**: Local environment (Streamlit-based demo)

### 📈 Main Achievements
- **RAG System Implementation**: Document-based search and generation model integration
- **Metadata Structuring**: Systematic segmentation and indexing of PDF documents
- **Multimodal Response**: Response system providing both text and images
- **API Design**: RESTful API structure design using FastAPI

### 🚀 Future Plans
Due to time constraints during the internship, I couldn't implement the actual API usage part. However, through this experience, I developed a **deep interest in the AI field** and plan to contribute to AI technology advancement in the future.

---

## 🛠️ Tech Stack Used

| Category | Technology |
|----------|-----------|
| **Language** | Python |
| **AI/ML** | LLM, RAG, OpenAI GPT-4 |
| **Framework** | LangChain, FastAPI, Streamlit |
| **Database** | Chroma (Vector DB), SQL |
| **API Testing** | Postman |
| **Deployment** | Local environment |

## ☑️ July 4 (Week 1)

### 1️⃣ Week 1 - RAG Structure and Development Environment Setup
### 1. Understanding RAG Method

> **RAG(Retrieval-Augmented Generation)** is a **search-based generation method** where large language models (LLM) don't just answer based on their own knowledge, but search **external knowledge bases** to generate **reliable responses**.

- The key to building RAG is storing the data we want the LLM to reference in an external database and calculating similarity quickly through embedding to generate answers.
- RAG can reduce inaccuracies or hallucinations in responses because the LLM references a reliable external knowledge base before generating a response to reflect the latest information.

#### 1.1 What is Retrieval Augmented Generation (RAG)?

1. **Retrieval**: Getting data - specifically "acquiring materials stored in computer systems". Getting information that the language model doesn't have.
2. **Augmented**: Same word used in AR/VR - as if it were true. While giving the retrieved data to the LLM, "as if it knows this information"
3. **Generation**: Generation - "I'll provide the data I brought, so generate an answer as if you know this information"

### 2. Basic RAG Pipeline Structure

```
Original Data → Document Load → Split → Embedding → Store in Vector DB → User Query → Similar Paragraph Retrieval → LLM Response Generation
```

### 3. Key Step Explanations

#### 1) Document Load
- Loading PDF and various format documents using `PyMuPDF`
- PDF → Text conversion
- Various interfaces for document loading supported, but focused on PDF text extraction

#### 2) Split (Chunking)
- document → small chunks
- Since extracted document text is long, it needs to be chunked into smaller units.
- Using `RecursiveCharacterTextSplitter`, etc.

#### 3) Embedding
- Converting text to **numeric vectors** to understand meaning
- Essential for meaning-based search
- AI models handle numbers, so text needs to be converted to vectors
- Embedding needed when:
  - Meaning-based search or comparison between multiple documents is needed
  - LLM needs **external information injection** when generating responses

## ☑️ July 10 (Week 2)

### 2️⃣ Week 2 - Text Segmentation, Vector DB Configuration, PDF Image Extraction

## 💡 LLM Application Implementation Using RAG Structure

### Working Structure
1. Read the document content.
2. Split the document. (May not be able to generate answers if tokens exceed, and answer generation takes longer if document is long)
3. Embedding -> Store in vector database
4. When there's a question, search for similarity in the vector database
5. Pass the documents retrieved from similarity search to the LLM along with the question

### Document Upload + Text Segmentation

```python
%pip install -qU langchain-text-splitters
%pip install -qU langchain_community pymupdf

from langchain_community.document_loaders import PyMuPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter

text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=1500,
    chunk_overlap=200,
)
loader = PyMuPDFLoader('./manual.pdf')
docs = loader.load_and_split(text_splitter=text_splitter)
```

### Image Extraction

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

### Chroma Database Vector Creation → Storage → Embedding

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

### Implemented: services/
1. **openaiService**: GPT calls
2. **embeddingService**: Paragraph embedding generation
3. **vectorStore**: Chroma vector storage/search
4. **pdfService**: PDF text + image extraction
5. **userService**: User information processing
6. **ragPipeline**: Core question processing flow (similar paragraph search → answer generation via GPT)

## ☑️ July 15 (Week 3)

### 📄 Metadata Structuring and Improvement

## ✅ Purpose
- Build **RAG-based AI chatbot system** based on `공공급식 - 단가 관리.pdf` document
- Apply vector search using **LangChain + Chroma** for accurate responses
- Experiment with **structured metadata manual/automatic structure application** for improved response quality

### 1. Manual Metadata Extraction

#### Application Method
- Configure `Document` objects by directly defining text and metadata (`section_title`, `subsection_num`, etc.) for each PDF page
- Example structure:

```python
Document(
    page_content="Orderer Setup & Unit Price Registration",
    metadata={
        "title": "Public Food Unit Price Management",
        "section": "Ⅳ",
        "section_title": "Orderer Setup & Unit Price Registration",
        "subsection": "1",
        "subsection_title": "Orderer Group Registration",
        "page_range": [37],
        "image_paths": ["images/section4-1_page37_img1.png"]
    },
)
```

#### Advantages
- Structured search possible (easy filtering based on `section_title`, `subsection_title`)
- Can include image file paths (`has_image`, `image_file`)

#### Disadvantages
- Must be written manually, maintenance becomes difficult as documents increase
- Only **manually written metadata values** are stored and searched in chroma vector
- Image metadata can only be linked through **hardcoding**

### 2. Automatic Metadata Extraction (Using LangChain Default Loader)

#### Application Method
- Automatically extract full PDF text and images using `PyMuPDFLoader` and `RecursiveCharacterTextSplitter`

#### Disadvantages
- Custom structures (`section_num`, `subsection_title`, etc.) are **not included**
- Image metadata can only be linked through **hardcoding**

### 3. Automatic Metadata Extraction for Entire PDF Content Using Stored Meta Structure

#### Application Method
- Split pages based on subsection and insert section information metadata
- Split paragraphs based on Roman numerals / numeric regex patterns in text
- Automatically insert the following **metadata** into each split paragraph (`Document`):
  - `page_number`
  - `section_num`, `section_title`
  - `subsection_num`, `subsection_title`
  - `chunk_index`
  - `has_image`, `image_file`

## ☑️ July 24 (Week 4)

### 📄 API Testing

I tested API calls using FastAPI.

#### Project Structure
```
project/
 ├─ .env                # 환경 변수 (OpenAI 키 등)
 ├─ requirements.txt    # 의존성 패키지
 ├─ app/
 │   ├─ __init__.py
 │   ├─ api.py          # FastAPI 서버
 │   ├─ llm.py          # PDF loading, vector DB, RAG chain
 │   ├─ config.py       # Settings such as answer_examples
 ├─ frontend/
 │   ├─ chat.py         # Streamlit UI
 └─ extracted_images/   # Path for storing images extracted from PDF
```

#### API Implementation
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
    """Streaming response"""
    stream, image_path = get_ai_response(request.user_message)

    async def event_generator():
        for chunk in stream:
            data = chunk.get("answer", "")
            if data:
                yield json.dumps({"type": "text", "content": data}) + "\n"

        # Send image path
        if image_path:
            yield json.dumps({"type": "image", "content": image_path}) + "\n"

    return StreamingResponse(event_generator(), media_type="application/json")
```

### Token Count Output + Filtering Images Above Specific Size

#### 1. Add Token Usage Output Function
- Modified to add `import tiktoken` to `llm.py` to **output prompt tokens / response tokens / total token count**
- Calculate tokens according to model encoding, set OpenAI model standard `"cl100k_base"` as default

#### 2. Set Image Filtering Criteria (Extract only 100x100 or larger)
```python
def extract_images_from_pdf(pdf_path: str, output_dir: str, min_width=100, min_height=100) -> dict[int, list[str]]:
    # Implement logic to filter image sizes in PDF using PyMuPDF
    # Extract and save only images with both width and height 100px or larger
```

## ☑️ July 31 (Week 5)

### 5️⃣ Week 5 - Metadata Structure Improvement (Create documents by section unit)

#### 1. Problem: Limitations of Page-Based Processing
Basically, PDF processing libraries like PyMuPDF load and store text and images in **page units**, but in this project, to accurately respond to user questions, we needed to segment documents based on **logical units like subsection and subsubsection** within the document.

#### 2. Document Splitting and Merging Logic Design

##### (1) Section Unit Splitting Function
```python
def split_by_section_and_subsection(pages: list[Document]) -> list[Document]:
    # Extract section numbers (e.g., Ⅳ), subsection numbers (e.g., 5.), subsubsection numbers (e.g., 5.1) using regex
    # Store text blocks and metadata corresponding to each extraction unit together
```

##### (2) Same Section Merging Function
```python
def merge_documents_by_id(docs: list[Document]) -> list[Document]:
    # Generate doc_id based on section number, subsection number, subsubsection number
    # Merge documents with the same doc_id into one
    # As a result, even if a subsubsection spans multiple pages, it's recognized as one document
```

#### 3. Problems and Solutions

##### Problem 1. Images not output
- Initial code was written to output **only the first single image**
- Solved by processing `image_paths` as a list and modifying to output all multiple images

##### Problem 2. Text response abnormally output
- Text response itself was lost during image output processing
- Solved by separating text streaming processing (`yield`) and metadata response parts in the response processing logic

##### Problem 3. Subsubsection metadata missing
- Identified that metadata was lost during saving or loading to Chroma DB
- Modified to save without loss in the metadata serialization/deserialization process

##### Problem 4. Section number incorrectly recognized
- When new section numbers appeared in the document, existing state variables (`current_section_num`, etc.) were not reset
- Modified logic to update state to that value when new numbers are detected

##### Problem 5. Subsubsection spanning multiple pages processed separately
- Example: `Ⅳ.8.1` spanning 2 pages processed as two documents
- Implemented by integrating text and images in the merging logic (`merge_documents_by_id`) when `doc_id` is the same

#### 4. Implementation Result
- Metadata accurately extracted, and document merging at subsubsection unit works normally
- Even when a subsubsection spans multiple pages, both images and text are integrated and output

### Final Presentation

#### Presentation Materials
- AI Chatbot System Final Presentation
{{< icon name="download" pack="fas" >}} [Download Presentation PDF](AI%20챗봇%20시스템%20중간%20발표%20최종.pdf)


