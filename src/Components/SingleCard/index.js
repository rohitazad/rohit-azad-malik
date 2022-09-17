import  React from 'react';

const SingleCardComponent = ({data})=>{
    return (
        <>
            <div key={data.id} className="p-2 rounded-lg mb-2 h-full bg-[#fcf4ff] dark:border-[#212425] dark:border-2">
                <div className="overflow-hidden rounded-lg">
                    <a href={data.url} rel="noreferrer" target="_blank">
                        <img className="rounded-lg w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110"
                            src={`${process.env.PUBLIC_URL}/assets/images/data/portfolio/${data.imageUrl}`} alt={data.title} />
                    </a>
                </div>
                <div className="flex mt-4 text-tiny text-gray-lite dark:text-[#A6A6A6]">
                    <span>{data.time}</span>
                </div>
                <a href={data.url} rel="noreferrer" target="_blank"  className="text-lg font-medium dark:text-white duration-300 transition cursor-pointer mt-3 pr-4 hover:text-[#FA5252] dark:hover:text-[#FA5252]">
                    {data.title}
                </a>
                {
                    data.sourceCodeUrl && data.sourceCodeUrl !== '' ? <div className="">
                    <a href={data.sourceCodeUrl} rel="noreferrer" target="_blank">
                        Git Hub :- Source code
                    </a>
                </div> : ''
                }
                
                
            </div>
        </>
    )
}

export default SingleCardComponent;