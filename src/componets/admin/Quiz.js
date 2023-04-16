import React, { useState } from "react";
import DashboardLayout from "./DashboardLayout";
import { useForm } from "react-hook-form";
import DashboardContentWrapper from "./DashboardContentWrapper";

const Quiz = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  //   <div>
  //  className={`ttr-pinned-sidebar ${isActive ? "ttr-opened-sidebar" : ""}`}
  //   style={{ position: "relative" }}
  //   </div>

  return (
    <DashboardLayout>
      <DashboardContentWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="container">
            <div class="d-flex justify-content-center row">
              <div class="col-md-10 col-lg-10">
                <div class="border">
                  <div class="question bg-white p-3 border-bottom">
                    <div class="d-flex flex-row justify-content-between align-items-center mcq">
                      <h4>MCQ Quiz</h4>
                      {/* <span>(5 of 20)</span> */}
                    </div>
                  </div>
                  <div class="question bg-white p-3 border-bottom">
                    <div class="d-flex flex-row align-items-center question-title">
                      <h3 class="text-danger">Q.</h3>
                      <h5 class="mt-1 ml-2">
                        Which of the following cannot be a variable name in C?
                      </h5>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="volatile"
                          value="volatile"
                          checked={selectedOption === "volatile"}
                          onChange={handleOptionChange}
                          {...register("volatile")}
                        />{" "}
                        <span> volatile</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="true"
                          value="true"
                          checked={selectedOption === "true"}
                          onChange={handleOptionChange}
                          {...register("true")}
                        />{" "}
                        <span>true</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="Friend"
                          value="Friend"
                          checked={selectedOption === "Friend"}
                          onChange={handleOptionChange}
                          {...register("Friend")}
                        />{" "}
                        <span>Friend</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="export"
                          value="export"
                          checked={selectedOption === "export"}
                          onChange={handleOptionChange}
                          {...register("export")}
                        />{" "}
                        <span>export</span>
                      </label>
                    </div>
                  </div>
                  <div class="question bg-white p-3 border-bottom">
                    <div class="d-flex flex-row align-items-center question-title">
                      <h3 class="text-danger">Q.</h3>
                      <h5 class="mt-1 ml-2">
                        Which of the following return-type cannot be used for a
                        function in C??
                      </h5>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="char *"
                          value="char *"
                          {...register("char *")}
                        />{" "}
                        <span>char *</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="struct"
                          value="struct"
                          {...register("struct")}
                        />{" "}
                        <span>struct</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="void"
                          value="void"
                          {...register("void")}
                        />{" "}
                        <span>void</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="none of the mentioned"
                          value="none of the mentioned"
                          {...register("none of the mentioned")}
                        />{" "}
                        <span>none of the mentioned</span>
                      </label>
                    </div>
                  </div>
                  <div class="question bg-white p-3 border-bottom">
                    <div class="d-flex flex-row align-items-center question-title">
                      <h3 class="text-danger">Q.</h3>
                      <h5 class="mt-1 ml-2">
                        How can a datatype be declared to be a constant type?
                      </h5>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="Const"
                          value="Const"
                          {...register("Const")}
                        />{" "}
                        <span>Const </span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="Var"
                          value="Var"
                          {...register("Var")}
                        />{" "}
                        <span>Var</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="Let"
                          value="Let"
                          {...register("Let")}
                        />{" "}
                        <span>Let</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="constant"
                          value="constant"
                          {...register("constant")}
                        />{" "}
                        <span>constant</span>
                      </label>
                    </div>
                  </div>
                  <div class="question bg-white p-3 border-bottom">
                    <div class="d-flex flex-row align-items-center question-title">
                      <h3 class="text-danger">Q.</h3>
                      <h5 class="mt-1 ml-2">
                        Which of the following is not javascript data types?
                      </h5>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="Null type"
                          value="Null type"
                          {...register("Null type")}
                        />{" "}
                        <span>Null type</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="Undefined type"
                          value="Undefined type"
                          {...register("Undefined type")}
                        />{" "}
                        <span> Undefined type</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="Undefined typea"
                          value="Undefined typea"
                          {...register("Undefined typea")}
                        />{" "}
                        <span> Undefined typea</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="All of the mentioned"
                          value="All of the mentioned"
                          {...register("All of the mentioned")}
                        />{" "}
                        <span>All of the mentioned</span>
                      </label>
                    </div>
                  </div>
                  <div class="question bg-white p-3 border-bottom">
                    <div class="d-flex flex-row align-items-center question-title">
                      <h3 class="text-danger">Q.</h3>
                      <h5 class="mt-1 ml-2">
                        Who developed Python Programming Language?
                      </h5>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="Wick van Rossum"
                          value="Wick van Rossum"
                          {...register("Wick van Rossum")}
                        />{" "}
                        <span>Wick van Rossum</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="Rasmus Lerdorf"
                          value="Rasmus Lerdorf"
                          {...register("Rasmus Lerdorf")}
                        />{" "}
                        <span>Rasmus Lerdorf</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="Guido van Rossum"
                          value="Guido van Rossum"
                          {...register("Guido van Rossum")}
                        />{" "}
                        <span>Guido van Rossum</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="Niene StomRussia"
                          value="Niene StomRussia"
                          {...register("Guido van Rossum")}
                        />{" "}
                        <span>Niene StomRussia</span>
                      </label>
                    </div>
                  </div>

                  {/* <div class="d-flex flex-row justify-content-between align-items-center p-3 bg-white">
                    <button
                      class="btn btn-primary d-flex align-items-center btn-danger"
                      type="button"
                    >
                      <i class="fa fa-angle-left mt-1 mr-1"></i>
                      &nbsp;previous
                    </button>
                    <button
                      class="btn btn-primary border-success align-items-center btn-success"
                      type="button"
                    >
                      Next<i class="fa fa-angle-right ml-2"></i>
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* <div>
          <div>Title Goes Here</div>
          <ul>
            <input
              type="checkbox"
              value="c"
              name="example"
              {...register("example")}
            />{" "}
            <label>Option 1 </label> <br />
            <input
              type="checkbox"
              name="example"
              value="a"
              {...register("example")}
            />{" "}
            <label>Option 1 </label> <br />
            <input
              type="checkbox"
              name="example"
              value="b"
              {...register("example")}
            />{" "}
            <label>Option 1 </label> <br />
            <input
              type="checkbox"
              name="example"
              value="c"
              {...register("example")}
            />{" "}
            <label>Option 1 </label> <br />
          </ul>
        </div>
        <div>
          <div>Title Goes Here</div>
          <ul>
            <input type="checkbox" name="example2" {...register("example2")} />{" "}
            <label>Option 1 </label> <br />
            <input
              type="checkbox"
              name="example2"
              {...register("example2")}
            />{" "}
            <label>Option 1 </label> <br />
            <input
              type="checkbox"
              name="example2"
              {...register("example2")}
            />{" "}
            <label>Option 1 </label> <br />
            <input
              type="checkbox"
              name="example2"
              {...register("example2")}
            />{" "}
            <label>Option 1 </label> <br />
          </ul>
        </div> */}

          <input type="submit" />
        </form>
      </DashboardContentWrapper>
    </DashboardLayout>
  );
};

export default Quiz;
