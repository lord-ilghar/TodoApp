import { ChangeEventHandler, FunctionComponent } from "react";

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
          <label htmlFor="isdoingcheck">isdoingcheck</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="isdoingcheck"
            defaultChecked={isDoing}
            onChange={(event) => {
              fetch(`/api/update/isdoing/${_id}`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ isDoing: event.target.checked }),
              });
            }}
          />
        </div>
      </div>
      <div className="label-container">
        <div>
          <label htmlFor="DoneCheck">Done</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="DoneCheck"
            defaultChecked={done}
            onChange={(event) => {
              fetch(`/api/update/isDone/${_id}`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ done: event.target.checked }),
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Todocard;
