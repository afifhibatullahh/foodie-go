"use client";
import { Footer } from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import CardSkeleton from "@/components/Skeleton/CardSkeleton";
import { GET_LIST } from "@/utils/meal";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";

export async function generateMetadata({ searchParams }) {
  if (searchParams.q) {
    return {
      title: `${searchParams.q} - Foodie`,
    };
  }
}

const ListFoods = ({ searchParams }) => {
  const router = useRouter();
  const key_search = searchParams.q;

  const { data, isLoading } = useQuery(
    ["list", key_search],
    () => GET_LIST(`?q=${key_search}&size=10`),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: false,
    }
  );

  const lists = data?.data;

  return (
    <>
      <Navbar />
      <div className="flex flex-col w-full ">
        <div>
          <span>{lists?.results?.length} results for</span>
          <span className="font-bold mx-1 text-slate-500">"{key_search}"</span>
        </div>
        <h2 className="font-bold text-slate-800 text-4xl my-2">Results 🍕 </h2>
        <div className="grid mx-auto gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {isLoading
            ? [...Array(8)].map(() => <CardSkeleton />)
            : lists?.results?.map((result, i) => {
                const tags = result.tags.slice(0, 4);
                return (
                  <div
                    className="rounded-xl cursor-pointer overflow-hidden shadow-lg group hover:ring-4 hover:ring-slate-400 transition-all duration-500"
                    key={i}
                    onClick={() => router.push(`/food/${result.id}`)}
                  >
                    <Image
                      loading="lazy"
                      quality={80}
                      width={400}
                      height={400}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-all duration-500"
                      src={result.thumbnail_url}
                      alt={result.thumbnail_alt_text}
                    />
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2 line-clamp-2 text-slate-700">
                        {result.name}
                      </div>
                      <p className="text-slate-500 text-base line-clamp-3">
                        {result.description}
                      </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                      {tags.map((tag) => {
                        return (
                          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            {tag.display_name}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ListFoods;
