import { websiteData } from "../websiteData";

export const Hero = () => {
    return(
        <section className="w-full relative  overflow-x-hidden px-4 ">
            <div className=" w-full flex flex-col items-center gap-5 h-[383px] bg-hero-img-mobile bg-top bg-no-repeat bg-contain before:content-[''] before:w-[129px] before:h-[129px] before:absolute before:bg-pattern-circle before:bg-no-repeat before:bottom-0 before:right-[-80px] relative after:content-[''] after:w-[530px] after:h-[129px] after:absolute after:bg-pattern-rings after:bg-no-repeat after:top-1/3 after:left-[-340px] after:z-[-1]">
                <p className="text-heading-m leading-m font-bold">{websiteData.heroSection.title}</p>
                <div className="flex gap-6">
                    {websiteData.heroSection.logoArray.map((logo, index) => {
                        return <a href={logo.link} key={index} target="_blank"><img src={logo.img}  alt='logo icon'/></a>;
                    })}
                </div>
            </div>
            <div className="text-center">
                <h1 className="text-[32px] tracking-[-1.14px] leading-9 mt-10 mb-6 font-bold">Nice to meet you! I’m<span className="border-b-4 border-light-green"> Fanush Mihailescu.</span></h1>
                <p className="font-thin text-light-grey">{websiteData.heroSection["sub-head"]}</p>
                <button className=" uppercase mt-6 tracking-[2.29px] border-b-2 border-light-green pb-2">{websiteData.heroSection.ctaButton}</button>
            </div>
        </section>
    )
}