import { FunctionComponent } from "react";
import Link from "next/link";

interface Data {
  link: string;
  title: string;
}

interface Props {
  title?: string;
  data: Array<Data>;
}

const Nav: FunctionComponent<Props> = ({ title, data }) => {
  return (
    <nav className="main-navbar">
      <div className="brand-conatiner__nav">
        <h1>{title}</h1>
      </div>
      <ul>
        {data.map((value, index) => {
          return (
            <li key={index}>
              <Link href={value.link}>{value.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
