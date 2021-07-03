import React from "react";

import Link from "next/link";

function NoContent(props: {
  title: string;
  des: string;
  links?: { title: string; link: string }[];
}) {
  return (
    <div className="no-conatent-container">
      <div className="text-center">
        <h2>{props.title}</h2>
      </div>
      <div>
        <p>{props.des}</p>
      </div>
      {props.links ? (
        <div className="nocontent-link-container">
          {props.links.map((value, index) => {
            console.log(value);
            return (
              <Link key={index} href={value.link}>
                {value.title}
              </Link>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default NoContent;
