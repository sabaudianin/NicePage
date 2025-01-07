import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import { Cta } from "../cta/Cta";

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
          className="h-screen bg-white"
        >
          <h1>Section 1</h1>
        </section>
        <section
          id="section2"
          className="h-screen bg-gray-300"
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
          className="h-screen bg-gray-400"
        >
          <h1>Section 3</h1>
          <a>
            https://www.youtube.com/watch?v=UnjKWSlwZWM&ab_channel=freeCodeCamp.org
          </a>
        </section>
        <section
          id="section4"
          className="h-screen bg-gray-500"
        >
          <h1>Section 4</h1>
        </section>
      </main>
    </>
  );
};
