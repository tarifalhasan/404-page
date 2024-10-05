import Image from "next/image";

export default function Home() {
  return (
    <div className=" relative min-h-screen h-full grid place-items-center  ">
      <main
        style={{
          backgroundSize: "100% 100%", // Forces the background to stretch to 100% width and height
          backgroundPosition: "center", // Centers the background image
        }}
        className="min-h-[calc(100vh-50px)]  flex flex-col lg:flex-row gap-4 w-full  mx-  bg-[url('/bg.png')]  px-4 py-6 overflow-hidden xl:py-10 bg-no-repeat  max-w-[calc(100%-40px)] relative lg:items-center"
      >
        <div className="absolute  bottom-[96%]">
          <h3 className="text-[23px] font-minecraft font-normal uppercase">
            Passs<span className="text-[#FFD600]">Phrase</span>
          </h3>
        </div>

        <div className="basis-full lg:basis-[55%]">
          <Image
            src={"/8a9ae5c99ad0a75c9646a77e4d421e8c.gif"}
            alt="sdsd"
            width={817}
            height={617}
            className="max-h-[600px] object-contain"
          />
        </div>
        <div className="basis-full space-y-6 lg:basis-[45%]">
          <div>
            <h2 className="text-[187px] leading-none font-minecraft">404</h2>
          </div>
          <ul className="space-y-3">
            <li className="text-base uppercase font-light">Not_found</li>
            <li className="text-base uppercase font-light">
              Code: ‘Not_found’
            </li>
            <li className="text-base uppercase font-light">
              ID: ‘sinl : : txbkm-1649130014806-6514bbf1cd63’
            </li>
          </ul>
          <button className="bg-yellow-400 px-6 py-3 text-black">
            Click here to learn more about this error
          </button>
        </div>
      </main>
    </div>
  );
}
