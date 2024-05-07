import React from 'react';
import GeneralClothes from './GeneralClothes';
import moment from 'moment';
import {getPTY, getSKY, time, weatherImg} from '../util/getValue'
import { useNavigate } from 'react-router-dom';

export default function CityWeather({data}) {
    const now = moment().format("YYYYMMDDHH00");
    const navigate = useNavigate();
    const handleClick =( item) =>{
        navigate(`/weatherDetail/${item.FCST_DT}`,{state:{...item, city:true}})
    }
console.log(now.substr(8,4));
    return (
        <section className='grid grid-cols-1 md:grid-cols-2  w-full pt-5 border-b border-color2'>

            {data && data.FCST24HOURS.map(item => 
                <section
                key={item.FCST_DT}
                onClick={()=>handleClick(item)}
                className="flex border-t w-full  border-x px-3 border-color2 py-2 items-center cursor-pointer hover:ease-in duration-200 hover:scale-102 overflow-x-auto hover:shadow-md"
              >
                <div className="  border-color2 items-center w-20 py-1 pt-2">
                  <div className="  flex items-center justify-center ">
                    <div className='w-6 mr-2'>{weatherImg(item.FCST_DT.substr(8,4),getSKY(item.SKY_STTS),getPTY(item.PRECPT_TYPE))}</div>
                    <div className="ml-1 font-bold">{item.TEMP}℃</div>
                  </div>
                  <div className="flex justify-center pt-2 text-sm text-stone-800 font-bold">
                  {item.FCST_DT.substr(6,2) === now.substr(6,2) ? "오늘" : "내일"}
                  </div>
                  <div className="flex justify-center pt-2 text-sm text-stone-800 font-bold">
                    {time(item.FCST_DT.substr(8,4))}
                  </div>
                </div>
                <GeneralClothes temperature={item.TEMP}/>
              </section>
                )}
        </section>
    );
}

