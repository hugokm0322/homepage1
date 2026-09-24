# 법률사무소 현주 홈페이지

가사 · 상속 · 이혼 전문 법률사무소 현주의 홈페이지입니다.
[Jekyll](https://jekyllrb.com)로 만들어 GitHub Pages에 무료로 올리고, 승소 사례와 사무소 정보는 [Pages CMS](https://pagescms.org)에서 관리합니다.

## 페이지 구성

| 주소 | 파일 | 내용 |
|---|---|---|
| `/` | `index.html` | 메인 (사무소 사진 배경, 전문 분야, 약속, 최근 승소 사례) |
| `/about/` | `about.html` | 변호사 소개 |
| `/cases/` | `cases.html` | 승소 사례 목록 (분야별 필터) |
| `/cases/…/` | `_cases/*.md` | 승소 사례 글 (Pages CMS로 작성) |
| `/location/` | `location.html` | 오시는 길 (지도, 연락처, 교통편) |

## 처음에 바꿔야 할 것

1. **사무소 사진**: 사무소 사진을 `assets/images/office.jpg`로 넣으면 메인 화면 배경이 됩니다. 가로 사진이 좋고, 가로 1920px 이상을 권장합니다. 사진이 없으면 임시 일러스트(`assets/images/office.svg`)가 대신 나옵니다.
2. **변호사 사진** (선택): `assets/images/lawyer.jpg`로 넣으면 됩니다. 세로 3:4 비율을 권장합니다.
3. **사무소 정보**: 이름, 전화, 주소, 약력 등은 `_data/office.yml`에 있습니다. 오시는 길 지도는 `address` 값으로 검색해서 표시돼요. Pages CMS의 **사무소 정보** 메뉴에서도 수정할 수 있습니다.
4. **예시 승소 사례**: `_cases/2026-09-20-090000.md`는 예시 글이니 실제 사례를 올린 뒤 지워주세요.

## 승소 사례 작성하기 (Pages CMS)

1. <https://app.pagescms.org>에 접속해서 GitHub 계정으로 로그인합니다.
2. 처음 한 번은 Pages CMS GitHub 앱을 설치하고 이 저장소를 선택합니다.
3. **승소 사례** 메뉴에서 **Add an entry**를 누르고 제목, 날짜, 분야, 결과 요약, 사건 요약, 사진, 본문을 입력한 뒤 저장합니다.
   - **대표 사진**: 목록과 글 상단에 표시됩니다.
   - **추가 사진**: 글 하단에 사진 모음으로 표시됩니다.
   - 본문 편집기에서 본문 중간에도 사진을 넣을 수 있습니다.
4. 저장하면 저장소에 커밋되고, 1~2분 뒤 사이트에 반영됩니다.

글은 저장소 쓰기 권한이 있는 사람만 작성할 수 있고, 방문자는 읽기만 할 수 있습니다.

> 의뢰인의 개인정보가 드러나지 않도록 사건 내용은 익명으로 각색해서 올려주세요. 저장소가 공개되어 있으면 글 원본도 공개됩니다.

## 내 컴퓨터에서 미리보기

```bash
brew install ruby
export PATH="/opt/homebrew/opt/ruby/bin:/opt/homebrew/lib/ruby/gems/4.0.0/bin:$PATH"
gem install jekyll webrick
jekyll serve
```

브라우저에서 <http://localhost:4000/homepage1/>을 열면 됩니다.

## 개인 도메인 연결

도메인을 연결하면 `_config.yml`의 `baseurl`을 `""`로, `url`을 도메인 주소로 바꿔주세요.
