import { FormEvent, FunctionComponent } from "react";

import { useRef } from "react";

import Header from "./../../components/Header";

const Add: FunctionComponent = () => {
  const titleRef = useRef<HTMLInputElement>(null)!;
  const desRef = useRef<HTMLTextAreaElement>(null)!;

  const handelSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (null != titleRef.current && null != desRef.current) {
      fetch("/api/AddDoto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: titleRef.current.value,
          des: desRef.current.value,
          isDoing: false,
          done: false,
        }),
      });
    }
  };

  return (
    <>
      <Header title="Add new" />
      <div className="form-conatiner">
        <form onSubmit={handelSubmit}>
          <label htmlFor="form-title">Title</label>
          <input ref={titleRef} type="text" name="title" id="form-title" />
          <label htmlFor="form-des">Descraption</label>
          <textarea ref={desRef} id="form-des" />
          <div className="submit-container">
            <button type="submit" className="btn submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Add;
