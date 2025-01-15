import { Logo } from "../../elements/Logo";

export const Recomendation = () => {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,pink,white)] opacity-50" />

      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left -skew-x-[30deg] bg-purple-100 shadow-xl shadow-pink-500 ring-1 ring-purple-500 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <figure className="mt-10">
          <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
            <p>
              "At Coding Bros Conference, our mission is to bring together
              passionate developers, innovators, and thought leaders in the tech
              industry. Each year, we strive to create an environment where
              knowledge flows freely, connections are forged, and innovation is
              inspired."
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              alt="CEO"
              src="/images/bw.jpg"
              className="mx-auto size-10 rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Bob Rafalsky</div>
              <svg
                width={10}
                height={10}
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="fill-pink-900"
              >
                <circle
                  r={1}
                  cx={1}
                  cy={1}
                />
              </svg>
              <div className="text-gray-600">CEO of CodingBros</div>
            </div>
          </figcaption>
        </figure>
        <figure className="mt-10">
          <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
            <p>
              "Seeing our attendees leave with fresh ideas and new
              collaborations is what drives us forward. I am proud to be part of
              a community that continually raises the bar in web development,
              coding, and beyond."
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              alt="CEO"
              src="/images/photo.jpg"
              className="mx-auto size-10 rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Rafal Bobko</div>
              <svg
                width={10}
                height={10}
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="fill-red-900"
              >
                <circle
                  r={1}
                  cx={1}
                  cy={1}
                />
              </svg>
              <div className="text-gray-600">Fronted Developer</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};
