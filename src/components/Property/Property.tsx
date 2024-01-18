import property from '../../assets/images/property.svg'

const Property = () => {
    return (
        <>
            <div className="container m-auto mb-[102px]">
                <div className="grid grid-cols-12 gap-[20px]">
                    <div className="col-span-6 w-full">
                        <div className='bg-[#dedad4] rounded-[15px] flex flex-col py-[158px] px-[89px] items-start h-[100%] '>
                            <h2 className='text-[#231E1E] mb-[14px] text-[40px] font-bold  '>Selecione o imóvel <br />
                                ideal para você</h2>
                            <p className='text-lg mb-[32px] text-[#231E1E] font-cabinetVariable font-medium  '>Descubra o imóvel que te faz sentir <br />
                                no melhor lugar do mundo</p>
                            <div className=' '>
                                <button className='text-sm mr-[27px] mb-[14px] text-[#F6F4F2] font-bold py-[8px] px-[16px] rounded-[60px] bg-[#484242]  font-cabinetVariable'> Apartamento</button>
                                <button className='text-sm mr-[27px] mb-[14px] text-[#463D3C] font-bold py-[8px] px-[16px] rounded-[60px] bg-[#F6F4F2]  font-cabinetVariable'> Casa</button>
                                <button className='text-sm mr-[27px] mb-[14px] text-[#463D3C] font-bold py-[8px] px-[16px] rounded-[60px] bg-[#F6F4F2]  font-cabinetVariable'> Casa de campo</button> <br />
                                <button className='text-sm mr-[27px] mb-[14px] text-[#463D3C] font-bold py-[8px] px-[16px] rounded-[60px] bg-[#F6F4F2]  font-cabinetVariable'> Flat</button>
                                <button className='text-sm mr-[27px] mb-[14px] text-[#463D3C] font-bold py-[8px] px-[16px] rounded-[60px] bg-[#F6F4F2]  font-cabinetVariable'> Casa de praia</button>
                                <button className='text-sm mr-[27px] mb-[14px] text-[#463D3C] font-bold py-[8px] px-[16px] rounded-[60px] bg-[#F6F4F2]  font-cabinetVariable'> Condomínio</button> <br />
                                <button className='text-sm mr-[27px] mb-[14px] text-[#463D3C] font-bold py-[8px] px-[16px] rounded-[60px] bg-[#F6F4F2]  font-cabinetVariable'> Cobertura</button>
                                <button className='text-sm mr-[27px] mb-[14px] text-[#463D3C] font-bold py-[8px] px-[16px] rounded-[60px] bg-[#F6F4F2]  font-cabinetVariable'> Lofts</button>



                            </div>
                        </div>
                    </div>
                    <div className="col-span-6 w-full relative  h-[100%]  ">
                        <img className=' h-[100%] ' src={property} alt="" />
                        <div className='text-center absolute bottom-[88px] left-[130px] '>
                            <h2 className='text-[#F6F4F2]    text-[42px] font-cabinetVariable font-bold '>Rio Grande do Sul</h2>
                            <button className='text-base text-[#F6F4F2] font-bold py-[8px] px-[16px] rounded-[60px] bg-[#484242]  font-cabinetVariable '>Explorar imóveis</button>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Property