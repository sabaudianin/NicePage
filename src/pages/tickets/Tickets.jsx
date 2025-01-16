import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { PricingPlan } from "./PricingPlan";
import { Logo } from "../../elements/Logo";

export const Tickets = () => {
  return (
    <section className="bg-white dark:bg-gray-950 max-w-custom-3xl py-44">
      <div className="flex flex-col items-center mx-auto px-6 py-32 gap-16 ">
        <div className="mx-auto  text-center text-gray-900 dark:text-gray-50">
          <Logo />

          <p className="text-xl lg:text-3xl">
            Choose a plan that fits your needs and join us for an unforgettable
            coding experience.
          </p>
        </div>

        <div className="w-full flex flex-col gap-6 lg:flex-row lg:justify-between">
          <PricingPlan
            name="Student"
            price="$25"
            description="Perfect for studentss starting their coding journey."
            features={[
              "Full access to all stages and presentations during the event",
              "Access to the chillout zone, attractions, food trucks, and networking opportunities with our partners",
              "A comprehensive guide to the Code Europe festival",
              "Access to Free Workshops",
            ]}
            buttonColor="bg-green-500 hover:bg-green-600"
            textColor="text-green-500"
            buttonText="Get Started"
          />
          <PricingPlan
            name="Business"
            price="$50"
            description="Ideal for developers looking to scale their projects."
            features={[
              "Full access to all stages and presentations during the event",
              "Access to the chillout zone, attractions, food trucks, and networking opportunities with our partners",
              "A comprehensive guide to the Code Europe festival",
              "Access to Free Workshops",
              "Invitation to the official Code Europe Party",
            ]}
            badge="Most Popular"
            badgeColor="bg-indigo-500 text-white"
            buttonColor="bg-indigo-500 hover:bg-indigo-600"
            textColor="text-indigo-500"
            buttonText="Choose Plan"
          />
          <PricingPlan
            name="VIP"
            price="$75"
            description="For professionals who need top-tier tools and support."
            features={[
              "Full access to all stages and presentations during the event",
              "Access to the chillout zone, attractions, food trucks, and networking opportunities with our partners",
              "A comprehensive guide to the Code Europe festival",
              "Access to Free Workshops",
              "Invitation to the official Code Europe Party with an open bar",
              "Lunch voucher for each day of Code Europe",
            ]}
            badge="VIP Access"
            badgeColor="bg-pink-500 text-white"
            buttonColor="bg-pink-500 hover:bg-pink-600"
            textColor="text-pink-500"
            buttonText="Join VIP"
          />
        </div>

        <p className="mx-auto text-lg text-center text-gray-500">
          No credit card required. Cancel anytime.
        </p>
      </div>
    </section>
  );
};
