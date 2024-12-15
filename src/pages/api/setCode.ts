import { supabase } from '@/../lib/superbase';
import axios from 'axios';
import {CodeInfo} from '@/model/postRequest';
export default async function handler(req, res) {
  try {
    // GET 요청을 처리하는 예시 (Supabase에서 데이터 가져오기)




    const { data , error } = await supabase
    .from('TSR_법정동코드')
    .select('*').ilike('법정동명','서울%')
    .eq("레벨", 2);
            

    if (error) {
      throw error;
    }



    
    console.log("data ::", data);
    const result:CodeInfo[] = [];
    data.map(async(e)=>{
      const code = e["법정동코드"];
      //const url :string ="http://apis.data.go.kr/1480523/SigunguStatService/getSigunguLvlhPpnWatUsageInfo";
      const url :string =`http://apis.data.go.kr/1480523/SigunguStatService/getSigunguLvlhPpnWatUsageInfo?resultType=json&serviceKey=${process.env.NEXT_PUBLIC_API_Key}&adivi_cd=${code}`;
      console.log("url::", url)
      await axios.post(url)
      .then(async(res)=>{
        console.log("result ::", res.data)
        res.data.getSigunguLvlhPpnWatUsageInfo.item.map((e)=>{
          InsertRow(e)
          result.push(e);
        })
        
      }).catch((err)=>{
        console.error("데이터 조회중 에러가 발생하였습니다.", err)
      })
    })

      
      

    // 성공적으로 데이터를 가져오면 반환
    res.status(200).json(result);
  } catch (error) {
    // 오류 발생 시
    res.status(500).json({ error });
  }
}


const InsertRow =async(row : CodeInfo)=>{
 
  
const { data, error } = await supabase
.from('시군구_생활계_물사용량_정보조회')
.insert([
  { 
    '법정동코드': row.ADIVICD,
    '시군구': row.CITICOUNGUNM, 
    '시도': row.CITYNM, 
    '연도': row.YEAR, 
    '가정용물사용량_합계': row.USEWATERHSUMCNT, 
    '가정용물사용량_시가_하수처리지역_합류식': row.CHYCONFLUUSEWATERH, 
    '가정용물사용량_비시가_하수처리지역_합류식': row.VICHYCONFLUUSEWATERH, 
    '가정용물사용량_시가_하수미처리지역_오수': row.CHYDIRTYWNOTUSEWATERH, 
    '가정용물사용량_비시가_하수미처리지역_오수': row.VICHYDIRTYWNOTUSEWATERH, 
    '가정용물사용량_시가_하수미처리지역_수거식': row.CHYREMOVNOTUSEWATERH, 
    '가정용물사용량_비시가_하수미처리지역_수거식': row.VICHYREMOVNOTUSEWATERH, 
    '가정용물사용량_시가_하수처리지역_분류식': row.CHYSEWERSYSUSEWATERH, 
    '가정용물사용량_비시가_하수처리지역_분류식': row.VICHYSEWERSYSUSEWATERH, 
    '가정용물사용량_시가_하수미처리지역_정화조': row.CHYWATTANKNOTUSEWATERH, 
    '가정용물사용량_비시가_하수미처리지역_정화조': row.VICHYWATTANKNOTUSEWATERH, 
    '영업용물사용량_합계': row.USEWATEROSUMCNT, 
    '영업용물사용량_시가_하수처리지역': row.CHYUSEWATERO, 
    '영업용물사용량_시가_하수미처리지역': row.CHYNOTUSEWATERO, 
    '영업용물사용량_비시가_하수처리지역': row.VICHYUSEWATERO, 
    '영업용물사용량_비시가_하수미처리지역': row.VICHYNOTUSEWATERO, 
  },
])

if (error) {
  throw error;
}

console.log("Insert Success ::",data)
        
}