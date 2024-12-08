import React from 'react';
import airbnb from '../resources/airbnb.png';
import nasa from '../resources/nasa.png';
import uber from '../resources/uber.png';
import target from '../resources/target.png';
import nyt from '../resources/nyt.png';
import etsy from '../resources/etsy.png';
import WhereWorkHappens from '../resources/WhereWorkHappens.mp4';
import teamDiscussing from '../resources/teamDiscussing.webm';



const MainSection = () => {
    return (
        <div className='flex flex-col items-center justify-between mt-[30px]'>
            <video
                src={WhereWorkHappens}
                autoPlay
                muted
                playsInline
                className='w-[80%] rounded-lg  mb-2'
                alt="A video showcasing how work happens"
            >
                Your browser does not support the video tag.
            </video>

            {/* video here src = WhereWorkHappens.mp4 in resources */}
            <button className='mt-[5px] font-medium w-[180px] tracking-wide text-dark-gray text-[15px] bg-dark-purple px-[20px] py-[14px] text-white border-[1.7px] border-dark-purple rounded-[4px] hover:bg-very-dark-purple'>GET STARTED</button>
            <h4 className='flex mt-4 text-lg font-medium text-dark-gray'><h4 className='mr-2 font-bold'>Slack is free to try </h4> for as long as you’d like</h4>
            <div className='flex flex-row gap-6 items-center justify-between w-[55%] mt-[60px]'>
                <img src={airbnb} alt='airbnb image' className='w-20'></img>
                <img src={nasa} alt='nasa image' className='w-[50px]'></img>
                <img src={uber} alt='uber image' className='w-[50px]'></img>
                <img src={target} alt='target image' className='w-[35px]'></img>
                <img src={nyt} alt='nyt image' className='w-40'></img>
                <img src={etsy} alt='etsy image' className='w-[40px]'></img>
            </div>

            <video
                src={teamDiscussing}
                autoPlay
                muted
                loop
                playsInline
                className='w-[56%] rounded-lg  mb-2 mt-20'
                alt="A video showcasing how work happens"
            >
                Your browser does not support the video tag.
            </video>
        </div>

    );
};

export default MainSection;
