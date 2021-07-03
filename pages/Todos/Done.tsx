import { GetStaticPropsContext, GetStaticPropsResult } from "next";

import Props from "./../../data/IN_dotos";
import Pdata from "./../../data/data";

// compunents ...
import Card from "./../../components/TodoCard";
import NoContent from "../../components/NoContent";
import Header from "./../../components/Header";

function Done({ data }: Props) {
  return (
    <>
      <Header title="Done todos" />
      {data.length <= 0 ? (
        <NoContent
          des="it looks like you dont have any todos"
          title="Nothing here"
          links={[{ title: "add one", link: "/Todos/All" }]}
        />
      ) : (
        data.map((value) => {
          return (
            <Card
              key={value._id}
              title={value.title}
              _id={value._id}
              des={value.des}
              done={value.done}
              isDoing={value.isDoing}
            />
          );
        })
      )}
    </>
  );
}
export default Done;

export async function getStaticProps(): Promise<
  GetStaticPropsResult<Props> | undefined
> {
  const propmisdata = await fetch("http://localhost:3000/api/getAll/");
  const APIdata = await propmisdata.json();
  const otherdata: Props = APIdata.filter((value: Pdata) => {
    if (value.done === true) {
      return value;
    }
  });
  console.log(otherdata);
  if (Array.isArray(otherdata)) {
    return {
      props: {
        data: otherdata,
      },
    };
  }
}
