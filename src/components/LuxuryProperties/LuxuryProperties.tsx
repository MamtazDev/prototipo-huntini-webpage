import g1 from '../../assets/images/g1.svg'
import g2 from '../../assets/images/g2.svg'
import g3 from '../../assets/images/g3.svg'
import g4 from '../../assets/images/g4.svg'


const LuxuryProperties = () => {
    return (
        <>
            <div className="pb-[88px]">
                <h1 className="text-center text-[46px] font-cabinetVariable mt-[56px] pb-[78px]">Os melhores imóveis de luxo, <br />
                    selecionados <span className="font-bold">para você</span></h1>
                <div className="container  m-auto">
                    <div className="grid grid-cols-12 gap-[22px]">
                        <div className="lg:col-span-4 col-span-12 relative">
                            <img className='w-full' src={g1} alt="" />
                            <p className='absolute bottom-[66px] left-[46px]  text-[24px] text-white '>Comercial</p>
                        </div>
                        <div className="lg:col-span-4 col-span-12">
                            <div className='relative'>
                                <img className='w-full mb-[22px]' src={g2} alt="" />
                                <p className='absolute bottom-[66px] left-[46px]  text-[24px] text-white '>Lançamentos</p>
                            </div>
                            <div className='relative'>
                                <img className='w-full' src={g3} alt="" />
                                <p className='absolute bottom-[66px] left-[46px]  text-[24px] text-white '>Residencial</p>
                            </div>
                        </div>
                        <div className="lg:col-span-4 col-span-12 relative">
                            <img className='w-full' src={g4} alt="" />
                            <p className='absolute bottom-[66px] left-[46px]  text-[24px] text-white '>Residencial</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default LuxuryProperties