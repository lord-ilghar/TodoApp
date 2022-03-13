import { FunctionComponent } from "react";
import { GetStaticPropsResult } from "next";
import Head from "next/head";

import NoContent from "../../components/NoContent";
import Card from "./../../components/TodoCard";
import Header from "./../../components/Header";

interface Data {
  title: string;
  des: string;
  isDoing: boolean;
  _id: string;
  done: boolean;
}

interface Props {
  data: Data[];
}

const isDoings: FunctionComponent<Props> = ({ data }) => {
  return (
    <>
      <Head>
        <title>doing todos</title>
      </Head>
      <Header title="Is Doing todos" />
      {data.length <= 0 ? (
        <NoContent
          des="it looks like you dont have any isdoing todos"
          title="Nothing here"
        />
      ) : (
        <section className="card-container">
          {data.map((value: Data) => {
            console.log(value.done);

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
export default isDoings;

export async function getStaticProps(
  contaxt: any
): Promise<GetStaticPropsResult<Props>> {
  const fetched = await fetch("http://localhost:3000/api/SendisDoings");
  const jsondata = await fetched.json();
  return {
    props: {
      data: jsondata.documents,
    },
  };
}
