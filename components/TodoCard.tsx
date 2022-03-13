import {
  ChangeEventHandler,
  CSSProperties,
  FunctionComponent,
  useState,
} from "react";

interface Props {
  title: string;
  isDoing: boolean;
  done: boolean;
  des: string;
  _id: string;
}

const Todocard: FunctionComponent<Props> = ({
  title,
  isDoing,
  done,
  des,
  _id,
}) => {
  const [clicked, setClicked] = useState<boolean>(isDoing);
  const [isDoneclicked, setisDoneClicked] = useState<boolean>(done);
  const [isDoingstyle, setisDoing] = useState<CSSProperties>({
    background: isDoing && clicked ? "#ee5a24" : "black",
  });
  const [isDoneStyle, setisDoneStyle] = useState<CSSProperties>({
    background: done && isDoneclicked ? "#ee5a24" : "black",
  });
  return (
    <div className="card">
      <div className="card-header">
        <div>
          <h2>{title}</h2>
        </div>
        <p>{des}</p>
      </div>
      <div className="label-container">
        <div>
          <label
            style={isDoingstyle}
            onClick={() => {
              setClicked(!clicked);
              setisDoing({ background: clicked ? "#ee5a24" : "black" });
              console.log(clicked);

              fetch(`/api/update/isdoing/${_id}`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ isDoing: !isDoing }),
              });
            }}
          >
            isdoingcheck
          </label>
        </div>
        {/* <input /> */}
      </div>
      <div className="label-container">
        <div>
          <label
            style={isDoneStyle}
            onClick={() => {
              setisDoneClicked(!isDoneclicked);
              setisDoneStyle({
                background: isDoneclicked ? "#ee5a24" : "black",
              });

              fetch(`/api/update/isDone/${_id}`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ done: !done }),
              });
            }}
          >
            Done
          </label>
        </div>
      </div>
    </div>
  );
};

export default Todocard;
