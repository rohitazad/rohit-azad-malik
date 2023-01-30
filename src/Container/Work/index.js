import React, {useEffect, useState} from 'react';

import  SingleCardComponent  from '../../Components/SingleCard';
import { useSelector } from "react-redux";
const WorkPage = ()=>{
    let [workData, setWorkData] = useState([]);
    const myCvData = useSelector((state) => state.userData.data);
    const portfolio = myCvData.portfolio;
    const workDataSet = ()=>{
        let _data = portfolio;
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
