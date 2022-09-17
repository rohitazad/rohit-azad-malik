import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';

const ContactPage = ()=>{
    const form = useRef();
    let [loading, setLoading] = useState(false);
    
    const sendEmail = (e) => {
        e.preventDefault();
        //console.log('e', e.target.user_name.value)
        if(e.target.user_name.value === ''){
            alert('Your good name is important to us for communication')
        }else if(e.target.user_email.value === ''){
            alert('Your email is important to us for communication')
        }else if(e.target.user_message.value === ''){
            alert('Please fill some text')
        }else {
            setLoading(loading = true);
            emailjs.sendForm('service_x1mrlzg', 'template_6d8awfn', form.current, 'BsEgyi4UDs535wZxa')
                .then((result) => {
                   // console.log(result.text);
                   setLoading(loading = false);
                    e.target.reset()
                    alert('Thank you so much. Your message has been received, We will contact you soon.')
                }, (error) => {
                    console.log(error.text);
                    setLoading(loading = false);
            });
        }
    };

    return(
        <>
        <div className="pt-12 md:py-12  sm:px-5 md:px-10 lg:px-14">
                <h2 className="after-effect after:left-44 md:mb-[30px]">
                        Contact </h2>

                        <div
                        className="mx-2 md:mx-[60px] contactCustome md:p-16 dark:border-[#212425] dark:border-2 bg-color-810 rounded-xl dark:bg-[#111111] mb-[30px] md:mb-[60px]">
                        <h3 className="text-4xl">
                            <span className="text-gray-lite dark:text-[#A6A6A6]">I'm always open to discussing
                                product</span>
                            <br />
                            <span className="font-semibold dark:text-white">code work or partnerships.</span>
                        </h3>

                        <form ref={form} onSubmit={sendEmail}>
                            <div className="returnmessage"
                                data-success=""></div>
                            
                            {
                                loading ? <div className="newLoading">
                                <div className="loading">
                                    <div className="loader">
                                        <div className="loader__bar"></div>
                                        <div className="loader__bar"></div>
                                        <div className="loader__bar"></div>
                                        <div className="loader__bar"></div>
                                        <div className="loader__bar"></div>
                                        <div className="loader__ball"></div>
                                    </div>
                                    <p>please wait...</p>
                                </div>
                            </div> : ''
                            }
                            

                            <div className="relative z-0 w-full mt-[40px] mb-8 group">
                                <input type="text" id="name" name="user_name"
                                    className="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent  border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer"
                                    placeholder=" " required="" />
                                <label htmlFor="name"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
                                    Name * </label>
                            </div>

                           
                            <div className="relative z-0 w-full mb-8 group">
                                <input type="email" name="user_email"
                                    className="block autofill:text-red-900 needed py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent  border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#5185D4] peer"
                                    placeholder=" " id="email" required="" />
                                <label htmlFor="email"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#5185D4] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
                                    Email * </label>
                            </div>

                           
                            <div className="relative z-0 w-full mb-8 group">
                                <input type="text" name="user_message"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent  border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#CA56F2] peer"
                                    placeholder=" " id="message" required="" />
                                <label htmlFor="message"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#CA56F2] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
                                    Message * </label>
                            </div>

                           
                            <input type="submit"
                                className="px-6 py-2 rounded-lg border-[2px] mt-3 border-color-910 font-semibold cursor-pointer hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white transition-colors duration-300 ease-in-out hover:border-transparent dark:text-white"
                                value="Submit" />
                        </form>
                    </div>
            </div>
           
            
        </>
    )
}

export default ContactPage;


// https://www.emailjs.com/docs/examples/reactjs/
// https://dashboard.emailjs.com/admin
// rohitazad5050@gmail.com