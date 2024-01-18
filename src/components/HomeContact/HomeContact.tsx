
const HomeContact = () => {
    return (
        <div className="bg-[#F6F4F2] pb-[167px]">
            <div className="container m-auto">

                <div className="grid grid-cols-12 pt-[139px] items-end">
                    <div className="lg:col-span-5 col-span-12">
                        <h2 className="text-[#463D3C] font-medium text-[42px] font-cabinetVariable mb-[53px]">Ficou com alguma <br />
                            dúvida?</h2>
                        <p className="text-2xl font-medium font-cabinetVariable text-[#463D3C]">Preencha os dados e fale <br />
                            com um especialista da Huntini</p>
                    </div>
                    <div className="lg:col-span-7 col-span-12">
                        <input type="text" placeholder="Email" className="rounded-[30px] border border-[#463D3C]  py-[20px] px-[32px] max-w-[609px] w-full" />
                        <input type="text" placeholder="Telefone" className="mt-[29px] rounded-[30px] border border-[#463D3C]  py-[20px] px-[32px] max-w-[347px] w-full" />
                        <button className="bg-[#463D3C] py-[20px] px-[32px] rounded-[30px] text-white  font-cabinetVariable text-lg font-normal max-w-[236px]  w-full ms-[26px]">Enviar</button>
                    </div>
                </div>


            </div>


        </div>
    )
}

export default HomeContact