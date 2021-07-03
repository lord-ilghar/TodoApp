import { FunctionComponent } from "react";
import { GetStaticPropsResult } from "next";
import Head from "next/head";

import Card from "../../components/TodoCard";
import NoContent from "./../../components/NoContent";
import Header from "./../../components/Header";

import Props from "../../data/IN_dotos";
const All: FunctionComponent<Props> = ({ data }) => {
  return (
    <>
      <Head>
        <title>All todos</title>
      </Head>
      <Header title="All" />
      {data.length <= 0 ? (
        <NoContent
          des="it looks like you dont have any todos"
          title="Nothing here"
          links={[{ title: "Add todo", link: "/Todos/Add" }]}
        />
      ) : (
        <section className="card-container">
          {data.map((value) => {
            return (
              <Card
                _id={value._id}
                key={value._id}
                title={value.title}
                des={value.des}
                done={value.done}
                isDoing={value.isDoing}
              />
            );
          })}
        </section>
      )}
    </>
  );
};
export default All;

export async function getStaticProps(
  contaxt: any
): Promise<GetStaticPropsResult<Props>> {
  const fetched = await fetch("http://localhost:3000/api/getAll");
  const jsondata = await fetched.json();
  return {
    props: {
      data: jsondata,
    },
  };
}
