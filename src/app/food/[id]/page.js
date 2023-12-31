"use client";

import { Footer } from "@/components/Footer/Footer";
import Star from "@/components/Icon/Star";
import Navbar from "@/components/Navbar/Navbar";
import ImageSkeleton from "@/components/Skeleton/ImageSkeleton";
import ParagraphSkeleton from "@/components/Skeleton/ParagraphSkeleton";
import { GET_MORE_INFO } from "@/utils/meal";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";

const FoodDetails = ({ params }) => {
  const router = useRouter();
  const id = params?.id;

  const { data, isSuccess } = useQuery(
    ["more_info", id],
    () => GET_MORE_INFO(`?id=${id}`),
    { refetchOnWindowFocus: false, refetchOnMount: false, retry: false }
  );

  const more_info = data?.data;

  return (
    <>
      <Navbar />
      <small
        className="self-start mb-2 cursor-pointer hover:scale-110 transition-all text-sm"
        onClick={() => router.back()}
      >
        ← Back
      </small>
      <div className="flex mx-auto flex-wrap w-full">
        <div className="lg:w-1/2 w-full max-h-96 rounded-xl cursor-pointer overflow-hidden group">
          {!isSuccess ? (
            <ImageSkeleton />
          ) : (
            <Image
              src={more_info.thumbnail_url}
              alt={more_info.thumbnail_alt_text}
              width={1000}
              quality={90}
              loading="lazy"
              height={1000}
              className="w-full object-cover object-center rounded border border-gray-200 overflow-hidden hover:scale-105 transition-all duration-300"
            />
          )}
        </div>
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          {!isSuccess ? (
            <>
              <ParagraphSkeleton />
              <ParagraphSkeleton />
            </>
          ) : (
            <>
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                Food Name
              </h2>
              <h1 className="text-gray-900 sm:text-lg md:text-3xl title-font font-medium mb-1 ">
                {more_info.name}
              </h1>
              <div className="pt-4 pb-2">
                {more_info.tags.slice(0, 5).map((tag, i) => {
                  return (
                    <span
                      key={i}
                      className="inline-block sm:text-xs md:text-sm bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
                      #{tag.display_name}
                    </span>
                  );
                })}
              </div>
              <div className="flex mb-4">
                <span className="flex items-center ">
                  {[...Array(5)].map((e, i) => {
                    const rate = (more_info.user_ratings.score / 2) * 10 - i;
                    const stop_color1 = rate > 1 ? 100 : 50;
                    const stop_color2 = 100 - stop_color1;
                    return (
                      <Star
                        key={i}
                        id={i}
                        stop_color1={stop_color1}
                        stop_color2={stop_color2}
                      />
                    );
                  })}
                </span>
                <span className="text-gray-600 ml-3">
                  {more_info.user_ratings.count_negative +
                    more_info.user_ratings.count_positive}{" "}
                  Reviews | Score{" "}
                  {Math.round(more_info.user_ratings.score * 100) / 10}
                </span>
              </div>
              <span className="text-sm title-font text-gray-500 tracking-widest mr-1">
                By
              </span>
              {more_info.credits.map((credit, i) => {
                return (
                  <span
                    key={i}
                    className="text-sm title-font text-gray-500 tracking-widest"
                  >
                    {credit.name} |{" "}
                  </span>
                );
              })}
              <p className="leading-relaxed my-2 text-slate-600">
                {more_info.description}
              </p>{" "}
            </>
          )}
        </div>
        <div className="lg:w-1/6 w-full lg:py-6 mt-6 lg:mt-0 ">
          <div className="flex flex-col">
            <h2 className="text-gray-900 text-2xl title-font font-semibold mb-1">
              Nutrition
            </h2>

            {isSuccess &&
              Object.entries(more_info.nutrition).map((nutrition, key) => {
                if (nutrition[0] == "updated_at") return;
                return (
                  <ul class="list-none" key={key}>
                    <li>
                      {nutrition[1]} {nutrition[0]}
                    </li>
                  </ul>
                );
              })}
          </div>
        </div>

        <div className="flex lg:w-5/6 w-full lg:py-6 mt-6 lg:mt-0">
          <div id="insctruction" className="flex flex-col divide-x-2">
            <h2 className="text-gray-900 text-3xl title-font font-semibold mb-1">
              Instruction
            </h2>
            {isSuccess &&
              more_info.instructions.map((instruction, i) => {
                return (
                  <div className="flex items-center" key={i}>
                    <span className="font-bold text-5xl text-sky-800 m-2">
                      {instruction.position}
                    </span>
                    <p className="">{instruction.display_text}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FoodDetails;
