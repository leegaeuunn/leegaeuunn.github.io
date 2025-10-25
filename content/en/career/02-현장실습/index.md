---
title: 'Intern Development Log - RAG-based LLM Application Development'

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

abstract: This is an intern development log recording the process of developing an LLM Application using RAG (Retrieval-Augmented Generation) methodology.

# Summary. An optional shortened abstract.
summary: 'A development log that systematically organizes the entire process from understanding RAG structure to FastAPI implementation'

tags: ['RAG', 'LLM', 'FastAPI', 'Langchain', 'Vector DB', 'Internship']

# Display this page in the Featured widget?
featured: true
---

# Intern Development Log

## 📋 Project Overview

Through the summer internship at **Mediang System** research institute, I developed a **RAG (Retrieval-Augmented Generation) based AI chatbot system**.
This development log records the entire process of RAG-based LLM Application development step by step, including all processes from initial concept understanding to actual implementation.

### 🎯 Project Goals
Building an intelligent chatbot system that provides accurate answers to user questions by utilizing manual documents from Jeonbuk Special Self-Governing Province food system, local food, and city/county manager sites.

### 🔧 Development Environment & Tools
- **Backend**: Python, FastAPI, LangChain
- **AI/ML**: OpenAI GPT-4, RAG, Vector Database (Chroma)
- **Frontend**: Streamlit
- **Database**: SQL
- **API Testing**: Postman
- **Deployment**: Local environment (Streamlit-based demonstration)

### 📈 Key Achievements
- **RAG System Implementation**: Integration of document-based search and generation models
- **Metadata Structuring**: Systematic segmentation and indexing of PDF documents
- **Multimodal Response**: Response system providing both text and images
- **API Design**: RESTful API structure design using FastAPI

### 🚀 Future Plans
Although I couldn't implement the API for actual use due to time constraints during the internship, this experience has given me a **deep interest in the AI field**, and I aim to contribute to AI technology development in the future.

---

## 🛠️ Technology Stack

| Field | Technology |
|-------|------------|
| **Language** | Python |
| **AI/ML** | LLM, RAG, OpenAI GPT-4 |
| **Framework** | LangChain, FastAPI, Streamlit |
| **Database** | Chroma (Vector DB), SQL |
| **API Testing** | Postman |
| **Deployment** | Local environment |

## ☑️ July 4th (Week 1)

### 1️⃣ Week 1 - RAG Structure and Development Environment Setup

#### 1. Understanding RAG Methodology

> **RAG (Retrieval-Augmented Generation)** is a **retrieval-based generation method** where large language models (LLM) generate **reliable responses** by searching **external knowledge bases** rather than answering based solely on their own knowledge.

- The key point of RAG implementation is to store data that the LLM should reference when answering in an external database, and generate answers by quickly calculating similarity through the embedding process.
- RAG can reduce inaccuracies or hallucinations in responses because the LLM references reliable external knowledge bases before generating responses, reflecting the latest information.

#### 1.1 What is Retrieval Augmented Generation (RAG)?

1. **Retrieval**: Getting data - specifically "acquiring materials stored in computer systems". Getting information that the language model doesn't have.
2. **Augmented**: Same word used in AR/VR - as if it were real. Giving the retrieved data to the LLM, "as if it knows this information"
3. **Generation**: Creation - "I'll provide the data I retrieved, generate an answer as if you know this information"

### 2. Basic RAG Pipeline Structure

```
Original Data → Document Load → Split → Embedding → Store in Vector DB → User Query → Similar Paragraph Retrieval → LLM Response Generation
```

### 3. Key Steps Explanation

#### 1) Document Load
- Loading PDF and various format documents using `PyMuPDF`
- PDF → Text conversion
- Various interfaces for document loading, but focused on PDF text extraction

#### 2) Split (Chunking)
- Document → Small chunks
- Necessary because extracted document text is long
- Using `RecursiveCharacterTextSplitter` etc.

#### 3) Embedding
- Converting text to **numeric vectors** for semantic understanding
- Essential for semantic-based search
- AI models handle numbers, so text needs to be converted to vectors

### Reference Sites
- [Week 1 - RAG Structure and Development Environment Setup](https://www.notion.so/1-RAG-22308607515e807ab863deb23e805cfc?pvs=21)
- [PDF Text/Image Extraction](https://www.notion.so/PDF-22308607515e80119d7fc7cce1126158?pvs=21)
- [Chroma (Metadata Output)](https://www.notion.so/chroma-22408607515e8031800ecaa53457dddc?pvs=21)
- [Text Segmentation Process](https://www.notion.so/ing-22408607515e803fa52ad2fe5592ffb3?pvs=21)
- [Chunking](https://www.notion.so/Chunking-22408607515e80a1aeaff749d94565c3?pvs=21)
- [Embedding](https://www.notion.so/Embedding-22408607515e80ae9ea1fd5ef2b3d372?pvs=21)

## ☑️ July 10th (Week 2)

### 2️⃣ Week 2 - Text Segmentation, Vector DB Configuration, PDF Image Extraction

#### Implementation: services/
1. **openaiService**: GPT call
2. **embeddingService**: Paragraph embedding generation
3. **vectorStore**: Chroma vector storage/search
4. **pdfService**: PDF text + image extraction
5. **userService**: User information processing
6. **ragPipeline**: Question processing core flow: Similar paragraph search → GPT answer generation

### Reference Sites
- [Week 2 - RAG-based LLM Application Implementation](https://www.notion.so/2-rag-llm-application-22a08607515e807c8685e52da35e4496?pvs=21)
- [Similarity Search Improvement](https://www.notion.so/22c08607515e80ba9996e3b37e1189ec?pvs=21)
- [RAG-based LLM Application Development (feat. Langchain) Lecture](https://www.notion.so/RAG-LLM-Application-feat-Langchain-22608607515e8075a2bccc9cbe159181?pvs=21)
- [**Metadata Structuring and Improvement**](https://www.notion.so/23108607515e80cdaf4fcd631f8bbf94?pvs=21)
- [How to Store Images in Vector DB](https://www.notion.so/db-22a08607515e807ea9d2cfe33b4a850f?pvs=21)

## ☑️ July 15th (Week 3)

### 3️⃣ Week 3 - GPT-based Text + Image Response Processing

#### Frontend Implementation
- [Week 3 - GPT-based Text + Image Response Processing](https://www.notion.so/3-3-GPT-23108607515e80c3adb5f4fe65ca227f?pvs=21)
- [Getting Familiar with FastAPI](https://www.notion.so/FastAPI-22c08607515e80db8a40dcba7f4ba4ea?pvs=21)
- [Streamlit Image Output Error Resolution](https://www.notion.so/streamlit-23208607515e80afa019f5b2d8f3cb48?pvs=21)

## ☑️ July 22nd (Week 4)

### 4️⃣ Week 4 - API Testing

- [Week 4 - API Testing](https://www.notion.so/4-api-23908607515e80048180e25d473b0ae1?pvs=21)

## ☑️ July 29th (Week 5)

### 5️⃣ Week 5 - Final Presentation Preparation

- [Presentation Materials](https://www.notion.so/23908607515e8012ad41e9d7e7397952?pvs=21)
- [Week 5 - Error Improvement from Mid-term Presentation](https://www.notion.so/5-23f08607515e809e98efe730d80ec9b7?pvs=21)

### API Implementation Reference Links
- https://applemango-jw.tistory.com/44
- https://wikidocs.net/book/14473
- https://wikidocs.net/book/14314
- https://rudaks.tistory.com/entry/langchain-Langchain%EA%B3%BC-FastAPI%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EC%97%AC-OpenAI-%EB%AA%A8%EB%8D%B8-%ED%98%B8%EC%B6%9C%ED%95%98%EA%B8%B0-invoke-ainvoke-stream-astream?category=1154278
- [Error Fix](https://www.notion.so/23908607515e80a791d7f587d593181b?pvs=21)
- [Metadata Structure Modification](https://www.notion.so/23208607515e8080a95ccbc3d111bddb?pvs=21)
- [Jump to FastAPI](https://www.notion.so/FastAPI-23908607515e80dbb8b8d3043bbb523c?pvs=21)