import  React from 'react';

const SingleBlogCardComponent = ({data})=>{
    let _timeCollect = data && data.published ? new Date(data.published).toLocaleDateString() : new Date()
    let _datime = _timeCollect
    return (
        <>
            <div key={data.id} className="p-2 rounded-lg mb-2 h-full bg-[#fcf4ff] dark:border-[#212425] dark:border-2">
                <a href={data.url} rel="noreferrer" target="_blank"  className="text-lg font-medium dark:text-white duration-300 transition cursor-pointer mt-3 pr-4 hover:text-[#FA5252] dark:hover:text-[#FA5252]">
                    {data.title}
                </a>
                <div className="flex mt-4 text-tiny text-gray-lite dark:text-[#A6A6A6]">
                    <span>{_datime}</span>
                </div>
            </div>
        </>
    )
}

export default SingleBlogCardComponent;