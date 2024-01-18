import advertise from '../../assets/images/advertise.svg'
const Advertise = () => {
    return (
        <>
            <div className="container m-auto mb-[127px]">
                <div className="grid grid-cols-12">
                    <div className="lg:col-span-6 w-[100%] col-span-12">
                        <img className='w-full  h-[424px] object-cover  ' src={advertise} alt="advertise" />

                    </div>
                    <div className="lg:col-span-6 col-span-12">
                        <div className=' font-cabinetVariable p-[78px] rounded-tr-[15px] rounded-br-[15px] bg-[#8E8768]  h-[424px] '>
                            <h3 className='text-white  font-normal text-[42px] font-cabinetVariable mb-[4px] '>Anuncie seu <br />
                                imóvel</h3>
                            <p className='text-white mb-[49px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit <br /> tempor nibh quis vehicula risus, egestas volutpat convallis. Maecenas platea nisl viverra tortor nec, risus non. </p>
                            <button className='max-w-[155px] w-[100%]  py-[12px] px-[16px] bg-[#DBD5C3] rounded-[60px] text-small text-[#685E5A] font-bold '>Anunciar agora</button>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Advertise