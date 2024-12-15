


export type ReqHeader = {
    'Content-Type' : string
    'Authorization' : string
}
 

export type Local = {
    "법정동코드" : string,
    "법정동명" : string,
    "레벨" : number
}


export type CodeInfo = {
ADIVICD: string,    // 행정구역코드(법정동코드)
CITICOUNGUNM: string,    // 시군구
CITYNM: string, // 시도
YEAR: string,   // 년도

USEWATERHSUMCNT: number,            // 가정용물사용량_합계
CHYCONFLUUSEWATERH: number,         // 가정용물사용량_시가_하수처리지역_합류식
VICHYCONFLUUSEWATERH: number,       // 가정용물사용량_비시가_하수처리지역_합류식
CHYDIRTYWNOTUSEWATERH: number,      // 가정용물사용량_시가_하수미처리지역_오수
VICHYDIRTYWNOTUSEWATERH: number,    // 가정용물사용량_비시가_하수미처리지역_오수
CHYREMOVNOTUSEWATERH: number,       // 가정용물사용량_시가_하수미처리지역_수거식
VICHYREMOVNOTUSEWATERH: number,     // 가정용물사용량_비시가_하수미처리지역_수거식
CHYSEWERSYSUSEWATERH: number,       // 가정용물사용량_시가_하수처리지역_분류식
VICHYSEWERSYSUSEWATERH: number,     // 가정용물사용량_비시가_하수처리지역_분류식
CHYWATTANKNOTUSEWATERH: number,     // 가정용물사용량_시가_하수미처리지역_정화조
VICHYWATTANKNOTUSEWATERH: number,   // 가정용물사용량_비시가_하수미처리지역_정화조
NUM: number,    // 순번
USEWATEROSUMCNT: number,    // 영업용물사용량_합계
CHYUSEWATERO: number,       // 영업용물사용량_시가_하수처리지역
CHYNOTUSEWATERO: number,    // 영업용물사용량_시가_하수미처리지역
VICHYUSEWATERO: number,     // 영업용물사용량_비시가_하수처리지역
VICHYNOTUSEWATERO: number,  // 영업용물사용량_비시가_하수미처리지역
}