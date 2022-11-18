# Introduction

A comprehensive dictionary integration.

## Goal

이 프로젝트는 복수 가지의 사전 검색 결과를 한 곳에서 쉽게 볼 수 있도록 하는 것을 목표로 합니다. <br>
구현 방식은 기본적으로 API를 통해 가져오도록 하며, 상황에 따라 puppeteer, cheerio 등의 의존성을 추가하여 정보를 가져올 수 있도록 하는 방향을 고려 중입니다.

이 경우, `private` 패키지를 새로 형성할 계획입니다.

### 현재까지 통합된 사전

- [ ] [Free Dictionary](https://dictionaryapi.dev/)
- [ ] [Oxford](https://developer.oxforddictionaries.com/)
- [ ] [Merrian-Webster](https://dictionaryapi.com/)
- [ ] [Collins](https://api.collinsdictionary.com/api/v1/documentation/html/)
- [ ] [Synonyms](https://www.synonyms.com/synonyms_api.php)
- [ ] [Cambridge](https://dictionary-api.cambridge.org/)

## About Demo

데모 버전은 `demo` 브랜치에서 관리되며, `React.js`로 모든 코드가 작성됩니다. <br>
편의상 별도의 API 키가 필요하지 않은 Free Dictionary API를 사용해 데모를 구현하였습니다.

특이 사항: Skeleton UI 사용, `React.memo` 사용, `react-async` 사용 등

## First Release

Comming soon...
