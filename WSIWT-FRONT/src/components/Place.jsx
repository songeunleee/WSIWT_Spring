import React from 'react';
import CityWeather from './CityWeather';
import CityInfo from './CityInfo';

export default function Place({data}) {
    
    return (
        <section className='w-full'>
            <CityInfo data={data.WEATHER_STTS[0]}/>
            <CityWeather data={data.WEATHER_STTS[0]}/>
        </section>
    );
}

