import axios from "axios";

export default function CodeBtn(){
    const apiHandler = async()=>{
        await axios.get('/api/setCode')
        .then(async(res)=>{
            console.log("res :", res.data);
            // if(res.data != null){
            //   await getCodeData(res.data[0]["법정동코드"])
            // }
        }).catch((err)=>{
            console.error("데이터 조회 실패 : ", err)
        })
        
      }


      
    return (
        <div>
            <button onClick={apiHandler}>api 호출</button>
        </div>
    )
}







/*
import { supabase } from '@/../lib/superbase';

export default async function handler(req: any, res: any) {
  try {
    // '법정동명' 컬럼에서 '서울특별시'로 시작하는 데이터를 찾는 쿼리
    const { data, error } = await supabase
      .from('TSR_법정동코드')  // 쿼리할 테이블 이름
      .select('*')
      .ilike("법정동명", "서울특별시%");  // 대소문자 구분 없는 패턴 매칭

    if (error) {
      console.error('Error: ', error.message);  // 오류 메시지 출력
      throw error;
    }

    // 데이터 확인을 위한 로그 출력
    console.log('Fetched data: ', data);

    // 데이터가 없다면 메시지 반환
    if (!data || data.length === 0) {
      return res.status(404).json({ message: 'No data found matching the query' });
    }

    // 데이터 반환
    res.status(200).json(data);
  } catch (error: any) {
    // 오류 발생 시
    console.error('Error: ', error.message);  // 오류 메시지 출력
    res.status(500).json({ error: error.message });
  }
}

*/