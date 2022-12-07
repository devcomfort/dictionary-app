# Dictionary App for Assignment

과제를 위해서 작성된 사전 앱 데모입니다.

기존에는 실용성에 의의를 두고 여러 사전을 엮으려고 했지만, 시간이 부족하여
FreeDictionary API 하나를 사용해 데모 버전을 만들었습니다.

현재 프로젝트는 `assignment` 브랜치에서 관리되고 있으며, 작성일(2022.12.08)을 기준으로 `demo` 브랜치에 PaperCSS를 사용한 다른 데모도 있습니다.

이 프로젝트는 `Vite`, `React`, `JSDoc`, `React.memo`를 포함한 `useState`, `useEffect` 등의 기본 훅을 통해 개발되었습니다.

## CRUD 기능 정리

본 과제/프로젝트는 CRUD를 사용하는 것을 원칙으로 하여 작성한 CRUD 기능 정리입니다.

- [x] Create: 검색 이벤트 발생 시, fetch 후 결과 인스턴스 저장
- [x] Read: FreeDictionary로부터의 fetch
- [ ] Delete: 검색 결과 지우기
- [x] Update: 검색어, 검색 결과 업데이트

## 기능 정리

- [x] 단일 단어 검색
- [x] 복수 단어 검색
- [x] 의미, 음성, IPA 사전 기본 형식 표현
- [x] 검색 결과 캐싱 (`React.memo`)

# 컴포넌트 트리

이미 HTML 상에 존재하는 컴포넌트는 제외, 직접 선언한 컴포넌트만 기록하였습니다.

- App; 최상위 컴포넌트
  - Searchbar; 사전으로의 검색을 진행할 수 있도록 form을 정의합니다.
  - SearchResult; 사전 검색 결과가 `result` (feat. `React.memo`)
    - Rows; 데이터를 가로로 1:1로 나누어진 공간에 표현하기 위해 선언한 컴포넌트
      (CSS Module 기반)
    - List; 데이터를 세로로 나누어진 리스트처럼 표현하기 위해 선언한 컴포넌트
      (CSS Module 기반, flex 사용)
    - CollapsibleCard; 검색 결과 중 `word`, `phoentics` 정보를 시각화하는 컴포넌트
      - MeaningTable; 검색 결과 중 `meanings` 정보를 시각화하는 컴포넌트
        - AudioControl; 음성 재생 버튼 컴포넌트 (받아온 데이터에 음성 파일이 있다면, 이를 재생하는 위젯을 표현하기 위해 사용됨)
