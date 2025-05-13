import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
My journey in web development is powered by an array of mystical tools and languages, with TypeScript casting the core of my enchantments. I wield frameworks like React.js and Next.js with precision, crafting seamless portals (websites) that connect realms (users) across the digital universe.

Beyond the front-end incantations, I command the server-side sorcery of Java , harnessing the mighty Spring Boot framework to forge powerful, scalable backends that stand resilient against the chaos of high traffic and complex logic.

My enchanted data vaults are secured with PostgreSQL , ensuring structured, reliable, and efficient storage that speaks the ancient language of SQL. Whether I&apos;m summoning APIs or weaving multi-threaded spells for performance, I blend creativity with structure to bring ideas to life on the web.

The ancient arts of the Jamstack empower me to create fast, secure, and dynamic experiences, while my design skills ensure every creation is not only functional but visually captivating.

Join me as I continue to explore new spells and technologies to shape the future of the enchanted digital realm.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            3+ <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            2+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=FawzyGhazawy&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="FawzyGhazawy"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=FawzyGhazawy&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="FawzyGhazawy"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className="col-span-full">
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=bootstrap,css,d3,docker,tailwind,git,github,html,js,ts,jquery,kubernetes,hibernate,linux,mysql,postgres,nextjs,react,angular,nodejs,python,cs,npm,supabase,threejs,vercel,vite,vscode,spring,java,maven,gradle,postman,eclipse`}
            alt="FawzyGhazawy Skills"
            loading="lazy"
          />
        </ItemLayout>



        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=FawzyGhazawy&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt="FawzyGhazawy"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/FawzyGhazawy/Nextjs---Portfolio"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin/?username=FawzyGhazawy&repo=Nextjs---Portfolio&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
              alt="FawzyGhazawy"
              loading="lazy"
            />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
