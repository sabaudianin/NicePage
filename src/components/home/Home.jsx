import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import { Cta } from "../cta/Cta";
import { BuyTicketButton } from "../../elements/BuyTicketButton";
import { AboutUs } from "../aboutUs/AboutUs";

export const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.target) {
      scroller.scrollTo(location.state.target, { smooth: true, duration: 500 });
    }
  }, [location]);

  return (
    <>
      <Cta />
      <main>
        <section
          id="section1"
          className="py-4 bg-indigo-100 dark:bg-neutral-900"
        >
          <AboutUs />
        </section>
        <section
          id="section2"
          className="h-screen bg-gray-300 overflow-auto"
        >
          <h1>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            debitis quidem harum doloribus quae fugiat sapiente nulla aliquam,
            repellat optio ratione asperiores illo, architecto adipisci! Autem
            voluptatem inventore sapiente ex odit mollitia sunt pariatur
            corporis perspiciatis eius sit amet optio a maxime quas soluta,
            nobis suscipit nam deleniti, accusamus assumenda dolores aliquid
            exercitationem! Dolorem accusamus iure cum minus ut expedita tempora
            ex, quidem nesciunt voluptate cumque, explicabo, soluta aliquid
            totam vitae ratione? Nihil totam repudiandae maxime cumque quis
            obcaecati placeat quia eveniet, commodi molestiae fuga facilis sequi
            temporibus neque veniam quisquam eum quos impedit. Accusantium
            harum, est id dolores veniam optio facere voluptas tempore eius
            culpa exercitationem, dignissimos ex possimus quibusdam! Accusamus
            hic voluptatum quae sequi aliquid laudantium alias voluptatibus
            magnam cupiditate, obcaecati consectetur illum minus eaque dolore
            tempore pariatur quibusdam nulla debitis fugit consequatur,
            veritatis perferendis iste dolor. Inventore provident accusamus
            mollitia totam dicta, nostrum, natus magni, eligendi quae dolores
            eveniet illum perferendis. Cumque assumenda harum laboriosam, veniam
            quia cupiditate repellat. Impedit et nemo sed veritatis ut cum odio,
            adipisci dolores dolore laborum, delectus saepe nam dicta maxime
            natus vitae suscipit explicabo fugiat id, facere tempore libero
            inventore placeat. Expedita earum ipsa dolores aut deleniti, quis
            corporis at accusamus repellat, eum voluptas porro minima optio
            quidem placeat? Exercitationem rerum nostrum suscipit. Aliquam culpa
            illo nesciunt consectetur voluptas necessitatibus explicabo
            inventore ducimus, alias voluptates magnam deleniti, vel reiciendis
            maiores nihil? Optio sunt quaerat esse earum voluptatibus cupiditate
            reprehenderit in culpa alias qui, facere, error fuga. Similique
            eligendi repudiandae magni, quis ut explicabo quae officiis est. Sit
            labore aliquam ullam perferendis non. Ratione suscipit beatae velit
            dolore aperiam, ea totam quos provident fugit molestiae corporis,
            enim eos, omnis nostrum! Sapiente illo ipsum, tempore laborum cum
            ipsam odio. Recusandae delectus eum pariatur similique id
            praesentium aperiam. Quis dignissimos non debitis! Saepe unde, quis
            explicabo sit cumque corrupti voluptatibus quaerat, aut libero
            nesciunt maxime perspiciatis sapiente autem repellendus
            reprehenderit adipisci, harum non! Incidunt nihil ad sunt nesciunt
            beatae iure eaque veniam blanditiis dignissimos! Corrupti impedit,
            corporis odio voluptas commodi quia autem possimus quasi atque, iste
            non soluta quaerat saepe debitis nesciunt accusantium sit magni
            tenetur ipsam tempore minima incidunt beatae, fuga architecto! Ut
            molestias sed cum reprehenderit dolorum deleniti nostrum,
            accusantium praesentium nisi voluptas ducimus beatae, obcaecati
            officiis laborum quia rerum dolores. Omnis, aliquid blanditiis,
            magni voluptas consequatur ex illo culpa atque quae et unde alias
            officia impedit, beatae rerum praesentium eos aspernatur? Iste
            maiores veniam quidem ea quaerat illo alias ab reiciendis similique
            recusandae consequatur voluptates vel aperiam, ipsam molestiae
            maxime, facere libero, fugit eligendi. Laboriosam sequi incidunt
            repellendus perspiciatis illo? Consectetur incidunt neque quidem est
            odio dolor praesentium. Tenetur sapiente nam obcaecati quia
            laboriosam cum, recusandae autem tempora fuga quam reprehenderit,
            tempore voluptatum minus iste, illo aliquid voluptates! Voluptas
            laborum nesciunt vel quas numquam deleniti illum ipsam odit neque
            aut totam nulla veniam laboriosam eaque asperiores necessitatibus
            praesentium fuga modi nisi itaque, incidunt perspiciatis temporibus.
            Aspernatur ullam repellendus corrupti fuga expedita quo, tenetur
            perspiciatis autem, ipsum illum beatae dolorum, repudiandae quis!
          </h1>
        </section>
        <section
          id="section3"
          className=" h-screen flex flex-col justify-around items-center "
        >
          <BuyTicketButton />
        </section>
        <section
          id="section4"
          className="h-screen bg-gray-500"
        >
          <section
            id="section1"
            className="h-screen flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-2 justify-center items-center gap-10 p-10 bg-indigo-900 dark:bg-neutral-900"
          >
            {/* Pierwszy okrąg - obrazek */}
            <div className="flex items-center justify-center bg-[url('/images/bgCta.jpg')] bg-cover bg-center rounded-full h-48 w-48 lg:h-64 lg:w-64 lg:rounded-lg lg:text-center">
              <p className="hidden lg:block text-white font-bold text-lg">
                Join the ultimate developer event
              </p>
            </div>

            {/* Drugi okrąg - obrazek */}
            <div className="flex items-center justify-center bg-[url('/images/chair.jpg')] bg-cover bg-center rounded-full h-48 w-48 lg:h-64 lg:w-64 lg:rounded-lg lg:text-center">
              <p className="hidden lg:block text-white font-bold text-lg">
                Learn from top industry experts
              </p>
            </div>

            {/* Trzeci okrąg - kolor */}
            <div className="flex items-center justify-center bg-orange-400 rounded-full h-48 w-48 lg:h-64 lg:w-64 lg:rounded-lg lg:text-center">
              <p className="hidden lg:block text-white font-bold text-lg">
                Networking opportunities await
              </p>
            </div>

            {/* Czwarty okrąg - kolor */}
            <div className="flex items-center justify-center bg-purple-400 rounded-full h-48 w-48 lg:h-64 lg:w-64 lg:rounded-lg lg:text-center">
              <p className="hidden lg:block text-white font-bold text-lg">
                Explore the future of web development
              </p>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};
