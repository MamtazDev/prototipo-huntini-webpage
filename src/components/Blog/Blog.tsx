import blog from '../../assets/images/blog.svg'
const Blog = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="grid grid-cols-12">
                    <div className="col-span-6 ">
                        <div className='bg-[#6C5C43] h-[777px] text-white font-cabinetVariable  py-[99px]  ps-[200px]'>
                            <p className='text-[24px] font-normal  mb-[56px]'>Mercado Imobiliário  |  <span className="font-bold">Blog</span></p>
                            <h2 className='mb-[57px] text-[42px] font-normal'>O que você precisa <br />
                                saber na hora de avaliar <br />
                                um imóvel de luxo</h2>
                            <p className='text-base font-medium mb-[77px]'>Lorem Ipsum is simply dummy text of the <br />printing and typesetting industry. Lorem Ipsum <br /> has been the industry's standard dummy text <br /> ever since the 1500s.</p>
                            <button className='rounded-[60px] bg-[#DBD5C3] py-[12px] px-[16px] text-[#685E5A] font-bold leading-[16px]'>Saber mais</button>
                        </div>
                    </div>
                    <div className="col-span-6 w-[100%] h-[777px] ">
                        <img className='h-[777px] w-[110%]' src={blog} alt="" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Blog