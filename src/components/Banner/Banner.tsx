import { IoIosSearch } from "react-icons/io";

const Banner = () => {
    return (
        <div className="z-50 bg-hero-part  fit-cover bg-no-repeat bg-cover pb-[180px] h-[688px]">
            <div className="ps-[124px] pt-[276px] ">
                <h1 className="text-white text-[55px] font-normal font-cabinetVariable">O que você quer <br />
                    <span className="font-bold">encontrar</span> hoje?</h1>
                <div>
                    <div className="relative mt-[32px]">
                        <input type="text" className="border border-[#F5F5F5] text-white ps-[30px] bg-transparent rounded-[60px] h-[62px] max-w-[548px] w-[100%] " />
                        <div className="absolute top-0 searchButtonBanner ">
                            <button className="  bg-white py-[20px] px-[40px] rounded-[60px] flex items-center gap-[14px] "><IoIosSearch /> <span>Buscar</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner