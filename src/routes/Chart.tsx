import React from "react";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atom";
  

 

function Chart() {
  const isDark = useRecoilValue(isDarkAtom);
  
  return (
    <>
        {
            isDark ? (
            <div>
                <h1>이것은 다크모드 차트입니다 착한 사람 눈에만 보입니다</h1>
                <div>여기가 차트입니다</div>
            </div> 
            )
            :(
                <div>
                <h1>이것은 라이트 모드 차트입니다 착한 사람 눈에만 보입니다</h1>
                <div>여기가 차트입니다</div>
            </div> 
            )
 
        }
    </>
  );
}

export default Chart;