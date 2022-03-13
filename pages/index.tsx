import { GetStaticPathsResult, GetStaticPropsResult } from "next";

import Link from "next/link";
import Head from "next/head";
import NoContent from "../components/NoContent";
import Card from "./../components/TodoCard";
import Header from "./../components/Header";

import Datatype from "./../data/data";
import IProp from "./../data/IN_dotos";

function Home({ data }: IProp) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header title="Home" />
      <div className=" section-breaker">
        this is todo app created by lord-ilghar with using nextJS! nedb and scss
      </div>
      <div className="section-breaker">
        <span className="you">YOU</span> can start using the app with following{" "}
        <Link href="/Todos/Add">This link</Link>
      </div>
      {data.length <= 0 ? (
        <NoContent
          des="it looks like you dont have any todos"
          title="Nothing here"
          links={[{ title: "Add todto", link: "/Todos/Add" }]}
        />
      ) : (
        <div>
          <div className="section-breaker">
            <h3>
              Oh and here is some unFinished TODOS for{" "}
              <span className="you">YOU</span>!
            </h3>
          </div>
          {data.map((value) => {
            return (
              <Card
                key={value._id}
                isDoing={value.isDoing}
                done={value.done}
                title={value.title}
                des={value.des}
                _id={value._id}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<IProp> | undefined
> {
  const propmisdata = await fetch("http://localhost:3000/api/getAll");
  const APIdata = await propmisdata.json();
  const propdata: IProp = APIdata.filter((value: Datatype, index: number) => {
    if (value.done === false) {
      console.log(index, value);
      return value;
    }
  });
  console.log(propdata);
  if (Array.isArray(propdata)) {
    return {
      props: {
        data: propdata,
      },
    };
  } else return undefined;
}

export default Home;
