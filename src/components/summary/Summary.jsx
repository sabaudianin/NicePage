import { reasons } from "../../constants";
import { BuyTicketButton } from "../../elements/BuyTicketButton";

export const Summary = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 py-12 sm:py-24 p-4">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            Join Now
          </h2>

          <p className="mt-6 text-xl lg:text-2xl text-gray-600">
            Be part of the most exciting tech conference of the year! At Coding
            Bros Conference, you'll connect with industry leaders, gain valuable
            insights, and collaborate with fellow developers to push the
            boundaries of innovation. Don’t miss this opportunity to grow,
            learn, and make your mark in the tech world.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {reasons.map((reason) => (
              <div
                key={reason.name}
                className="relative flex items-center gap-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-pink-500">
                  <reason.icon
                    aria-hidden="true"
                    className="h-10 w-10 text-white p-2"
                  />
                </div>

                <div>
                  <dt className="text-xl font-semibold text-gray-900">
                    {reason.name}
                  </dt>
                  <dd className="mt-1 text-lg text-gray-600">
                    {reason.description}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="pt-20">
        <BuyTicketButton />
      </div>
    </section>
  );
};
