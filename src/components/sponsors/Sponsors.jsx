import { BecomeASponsor } from "../../elements/BecomeSponsor";
export const Sponsors = () => {
  return (
    <section className="">
      <div className="bg-white py-12 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-xl font-semibold text-gray-900">
            CodersBros Partnerships
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              alt="Donate"
              src="/images/donate.png"
              width={158}
              height={48}
              className="col-span-2 max-h-24 lg:max-h-48 w-full object-contain lg:col-span-1"
            />
            <img
              alt="Donate Multiply"
              src="/images/donateToday.png"
              width={158}
              height={48}
              className="col-span-2 max-h-24 lg:max-h-48 w-full object-contain lg:col-span-1"
            />
            <img
              alt="Peples Circle"
              src="/images/patron.png"
              width={158}
              height={48}
              className="col-span-2 max-h-24 lg:max-h-48 w-full object-contain lg:col-span-1"
            />
            <img
              alt="Donators Badges"
              src="/images/donateBadge.png"
              width={158}
              height={48}
              className="col-span-2 max-h-24 lg:max-h-48 w-full object-contain sm:col-start-2 lg:col-span-1"
            />
            <img
              alt="Marketing Schema"
              src="/images/marketing.jpg"
              width={58}
              height={48}
              className="col-span-2 col-start-2 max-h-24 lg:max-h-48 w-full object-contain sm:col-start-auto lg:col-span-1"
            />
          </div>
        </div>
      </div>
      <div className="my-4">
        <BecomeASponsor />
      </div>
    </section>
  );
};
