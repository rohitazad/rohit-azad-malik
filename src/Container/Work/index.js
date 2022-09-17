import React, {useEffect, useState} from 'react';
import PortfolioData from '../../Data/PortfolioData.json';
import  SingleCardComponent  from '../../Components/SingleCard';

const WorkPage = ()=>{
    let [workData, setWorkData] = useState([]);

    const workDataSet = ()=>{
        let _data = PortfolioData[0].workdata;
        setWorkData(
            workData = _data
        )
    }
    const htmlGenRate = ()=>{
        let _html = [];
        workData && workData.length > 0 && workData.map((item)=>{
           return _html.push(<SingleCardComponent key={item.id} data={item} />)
        })
        return _html;
    }
    useEffect(()=>{
        workDataSet()
       // eslint-disable-next-line 
    }, [workData]);


    return(
        <>
        <div className="pt-12 md:py-12  sm:px-5 md:px-10 lg:px-14">
            <h2 className="after-effect after:left-60 lg:mt-0">Portfolio</h2>
            <ul
                className="button-group isotop-menu-wrapper mt-[30px] flex w-full justify-start md:justify-end flex-wrap font-medium">
                <li className="fillter-btn mr-4 md:mx-4 is-checked"> All</li>
                <li className="fillter-btn mr-4 md:mx-4"> JavaScript</li>
                <li className="fillter-btn mr-4 md:mx-4"> ReactJs</li>
                <li className="fillter-btn mr-4 md:mx-4"> General Knowledge</li>
            </ul>
            <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mt-[30px] grid gap-x-10 gap-y-7 mb-6">
                {
                    workData && workData.length > 0 ?  htmlGenRate():''
                }
            </div>           
                            
        </div>
           
            
        </>
    )
}

export default WorkPage;

// https://bostamihtml.ibthemespro.com/aboutOne.html
//         https://bostamihtml.ibthemespro.com/homePage.html
