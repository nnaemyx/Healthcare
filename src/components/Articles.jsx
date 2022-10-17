import {articles} from '../data'


const Articles = () => {
    const { title, paragraph, content } = articles;
    return (
        <div className="container mx-auto">
            <div className='mt-16'>
                <h1 className='text-[25px] font-semibold'>{ title}</h1>
                <p className='text-[18px]'>{paragraph}</p>
                <div className="grid grid-cols-1 gap-x-5  lg:mx-4 mx-4 md:mx-0  md:grid-cols-3 justify-center items-center lg:grid-cols-3 lg:gap-[30px] mt-10 ">
                    {content.map((items, index) => {
                        return (
                            <div className='space-y-4'>
                                <div className='mt-6 lg:mt-0'>
                                    <img src={items.image.type} alt="" />
                                </div>
                                <div className='space-y-2'>
                                    <h1 className='text-[19px] font-semibold'>{items.heading}</h1>
                                    <p className='lg:w-auto w-auto md:w-auto'>{items.text}</p>
                                    <button className="bg-primary/20 text-[18px] font-semibold py-3 px-10 rounded-md  lg:py-3 lg:px-12 text-primary">{ items.button}</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='mx-auto text-center mt-8 mb-20 items-center'>
                    <button className="bg-primary text-[18px] rounded-md font-semibold py-3 px-10  lg:py-3 lg:px-14 text-white" >See More</button>
                </div>
            </div>
        </div>
    )
}

export default Articles