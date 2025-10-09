import React from "react";
import { InfoPills } from "../../components/ui/Pills";
import { documents } from "../../constants";
import { CheckCircle2 } from "lucide-react";

const Requirements = () => {
  return (
    <>
      <section
        className="
    relative flex flex-col items-center justify-center
    min-h-[28rem] sm:min-h-[40rem] lg:min-h-[55rem]
    bg-[url('/Images/bg1.svg')]
    bg-contain sm:bg-cover
    bg-center bg-no-repeat
    pt-12 sm:pt-20 lg:pt-28 pb-10 lg:pb-20
    text-black overflow-hidden
    mt-8 lg:mt-24 px-4 text-center
  "
      >
        <div className="flex justify-center items-center w-full px-2 sm:px-6 lg:px-12">
          <video
            className="
        w-[95%] sm:w-[85%] md:w-[80%] lg:w-[65%]
        aspect-video
        rounded-3xl
        shadow-lg
        object-cover
      "
            controls
            poster="http://alha.lagosagric.org/wp-content/uploads/2022/11/Group-37823.png"
            src="http://alha.lagosagric.org/wp-content/uploads/2022/11/WhatsApp-Video-2022-11-14-at-9.42.38-AM.mp4"
          />
        </div>
      </section>

      {/* Requirements Section */}
      <section
        className="
          flex flex-col px-4 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-24 sm:text-left max-w-[130em] mx-auto
        "
      >
        <div className="flex flex-col space-y-6 w-full">
          <h2 className="text-2xl sm:text-5xl md:text-5xl font-medium leading-tight py-4 border-b border-gray-300">
            <span className="text-[#66B5A9]">Requirements</span> for Application
          </h2>

          <div className="flex flex-col space-y-5 sm:space-y-7 mt-6 sm:mt-8">
            <InfoPills>
              <p className="px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-base text-left text-gray-700 font-semibold ">
                Express your Intrest by filling the application on this website.
              </p>
            </InfoPills>

            <InfoPills className="mt-4">
              <p className="px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-base text-left text-gray-700 font-semibold ">
                Upload scanned copies of the following documents.
              </p>
            </InfoPills>

            {/* Ul Liknks */}

            <ul className="space-y-7 flex flex-col">
              {documents.map((files) => (
                <li
                  key={files.id}
                  className="inline-flex items-center justify-start px-6 py-2 rounded-full font-md font-Poppins transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 gap-3 w-fit"
                >
                  <span className="flex items-center space-x-4">
                    <CheckCircle2 className="w-5 h-5 text-[#1D9389]" />
                  </span>

                  <span className="text-gray-800">{files.file}</span>
                </li>
              ))}
            </ul>

            <InfoPills className="mt-4">
              <p className="px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-base text-left text-gray-700 font-semibold ">
                Agric land applicant recieves phone call from the representative
                of Agricultural Land Holdings Authority (ALHA)
              </p>
            </InfoPills>
          </div>
        </div>
      </section>
    </>
  );
};

export default Requirements;
