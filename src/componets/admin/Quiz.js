import React from "react";
import DashboardLayout from "./DashboardLayout";
import { useForm } from "react-hook-form";
import DashboardContentWrapper from "./DashboardContentWrapper";

const Quiz = () => {
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
                        Which of the following country has largest population?
                      </h5>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="brazil"
                          value="brazil"
                          {...register("brazil")}
                        />{" "}
                        <span>Brazil</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="Germany"
                          value="Germany"
                          {...register("germany")}
                        />{" "}
                        <span>Germany</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="Indonesia"
                          value="Indonesia"
                          {...register("indonesia")}
                        />{" "}
                        <span>Indonesia</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input type="radio" name="Russia" value="Russia" />{" "}
                        <span>Russia</span>
                      </label>
                    </div>
                  </div>
                  <div class="question bg-white p-3 border-bottom">
                    <div class="d-flex flex-row align-items-center question-title">
                      <h3 class="text-danger">Q.</h3>
                      <h5 class="mt-1 ml-2">
                        Which of the following country has largest population?
                      </h5>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="brazil"
                          value="brazil"
                          {...register("brazil")}
                        />{" "}
                        <span>Brazil</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="Germany"
                          value="Germany"
                          {...register("germany")}
                        />{" "}
                        <span>Germany</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="Indonesia"
                          value="Indonesia"
                          {...register("indonesia")}
                        />{" "}
                        <span>Indonesia</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input type="radio" name="Russia" value="Russia" />{" "}
                        <span>Russia</span>
                      </label>
                    </div>
                  </div>
                  <div class="question bg-white p-3 border-bottom">
                    <div class="d-flex flex-row align-items-center question-title">
                      <h3 class="text-danger">Q.</h3>
                      <h5 class="mt-1 ml-2">
                        Which of the following country has largest population?
                      </h5>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="brazil"
                          value="brazil"
                          {...register("brazil")}
                        />{" "}
                        <span>Brazil</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="Germany"
                          value="Germany"
                          {...register("germany")}
                        />{" "}
                        <span>Germany</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="Indonesia"
                          value="Indonesia"
                          {...register("indonesia")}
                        />{" "}
                        <span>Indonesia</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input type="radio" name="Russia" value="Russia" />{" "}
                        <span>Russia</span>
                      </label>
                    </div>
                  </div>
                  <div class="question bg-white p-3 border-bottom">
                    <div class="d-flex flex-row align-items-center question-title">
                      <h3 class="text-danger">Q.</h3>
                      <h5 class="mt-1 ml-2">
                        Which of the following country has largest population?
                      </h5>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="brazil"
                          value="brazil"
                          {...register("brazil")}
                        />{" "}
                        <span>Brazil</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="Germany"
                          value="Germany"
                          {...register("germany")}
                        />{" "}
                        <span>Germany</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="Indonesia"
                          value="Indonesia"
                          {...register("indonesia")}
                        />{" "}
                        <span>Indonesia</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input type="radio" name="Russia" value="Russia" />{" "}
                        <span>Russia</span>
                      </label>
                    </div>
                  </div>
                  <div class="question bg-white p-3 border-bottom">
                    <div class="d-flex flex-row align-items-center question-title">
                      <h3 class="text-danger">Q.</h3>
                      <h5 class="mt-1 ml-2">
                        Which of the following country has largest population?
                      </h5>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="brazil"
                          value="brazil"
                          {...register("brazil")}
                        />{" "}
                        <span>Brazil</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="Germany"
                          value="Germany"
                          {...register("germany")}
                        />{" "}
                        <span>Germany</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="Indonesia"
                          value="Indonesia"
                          {...register("indonesia")}
                        />{" "}
                        <span>Indonesia</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input type="radio" name="Russia" value="Russia" />{" "}
                        <span>Russia</span>
                      </label>
                    </div>
                  </div>
                  <div class="question bg-white p-3 border-bottom">
                    <div class="d-flex flex-row align-items-center question-title">
                      <h3 class="text-danger">Q.</h3>
                      <h5 class="mt-1 ml-2">
                        Which of the following country has largest population?
                      </h5>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="brazil"
                          value="brazil"
                          {...register("brazil")}
                        />{" "}
                        <span>Brazil</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="Germany"
                          value="Germany"
                          {...register("germany")}
                        />{" "}
                        <span>Germany</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="Indonesia"
                          value="Indonesia"
                          {...register("indonesia")}
                        />{" "}
                        <span>Indonesia</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input type="radio" name="Russia" value="Russia" />{" "}
                        <span>Russia</span>
                      </label>
                    </div>
                  </div>
                  <div class="question bg-white p-3 border-bottom">
                    <div class="d-flex flex-row align-items-center question-title">
                      <h3 class="text-danger">Q.</h3>
                      <h5 class="mt-1 ml-2">
                        Which of the following country has largest population?
                      </h5>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="brazil"
                          value="brazil"
                          {...register("brazil")}
                        />{" "}
                        <span>Brazil</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="Germany"
                          value="Germany"
                          {...register("germany")}
                        />{" "}
                        <span>Germany</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="Indonesia"
                          value="Indonesia"
                          {...register("indonesia")}
                        />{" "}
                        <span>Indonesia</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input type="radio" name="Russia" value="Russia" />{" "}
                        <span>Russia</span>
                      </label>
                    </div>
                  </div>
                  <div class="question bg-white p-3 border-bottom">
                    <div class="d-flex flex-row align-items-center question-title">
                      <h3 class="text-danger">Q.</h3>
                      <h5 class="mt-1 ml-2">
                        Which of the following country has largest population?
                      </h5>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="brazil"
                          value="brazil"
                          {...register("brazil")}
                        />{" "}
                        <span>Brazil</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="Germany"
                          value="Germany"
                          {...register("germany")}
                        />{" "}
                        <span>Germany</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="Indonesia"
                          value="Indonesia"
                          {...register("indonesia")}
                        />{" "}
                        <span>Indonesia</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input type="radio" name="Russia" value="Russia" />{" "}
                        <span>Russia</span>
                      </label>
                    </div>
                  </div>
                  <div class="question bg-white p-3 border-bottom">
                    <div class="d-flex flex-row align-items-center question-title">
                      <h3 class="text-danger">Q.</h3>
                      <h5 class="mt-1 ml-2">
                        Which of the following country has largest population?
                      </h5>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="brazil"
                          value="brazil"
                          {...register("brazil")}
                        />{" "}
                        <span>Brazil</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="Germany"
                          value="Germany"
                          {...register("germany")}
                        />{" "}
                        <span>Germany</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="Indonesia"
                          value="Indonesia"
                          {...register("indonesia")}
                        />{" "}
                        <span>Indonesia</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input type="radio" name="Russia" value="Russia" />{" "}
                        <span>Russia</span>
                      </label>
                    </div>
                  </div>
                  <div class="question bg-white p-3 border-bottom">
                    <div class="d-flex flex-row align-items-center question-title">
                      <h3 class="text-danger">Q.</h3>
                      <h5 class="mt-1 ml-2">
                        Which of the following country has largest population?
                      </h5>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="brazil"
                          value="brazil"
                          {...register("brazil")}
                        />{" "}
                        <span>Brazil</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="Germany"
                          value="Germany"
                          {...register("germany")}
                        />{" "}
                        <span>Germany</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="Indonesia"
                          value="Indonesia"
                          {...register("indonesia")}
                        />{" "}
                        <span>Indonesia</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input type="radio" name="Russia" value="Russia" />{" "}
                        <span>Russia</span>
                      </label>
                    </div>
                  </div>
                  <div class="question bg-white p-3 border-bottom">
                    <div class="d-flex flex-row align-items-center question-title">
                      <h3 class="text-danger">Q.</h3>
                      <h5 class="mt-1 ml-2">
                        Which of the following country has largest population?
                      </h5>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="brazil"
                          value="brazil"
                          {...register("brazil")}
                        />{" "}
                        <span>Brazil</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="Germany"
                          value="Germany"
                          {...register("germany")}
                        />{" "}
                        <span>Germany</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="Indonesia"
                          value="Indonesia"
                          {...register("indonesia")}
                        />{" "}
                        <span>Indonesia</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input type="radio" name="Russia" value="Russia" />{" "}
                        <span>Russia</span>
                      </label>
                    </div>
                  </div>
                  <div class="question bg-white p-3 border-bottom">
                    <div class="d-flex flex-row align-items-center question-title">
                      <h3 class="text-danger">Q.</h3>
                      <h5 class="mt-1 ml-2">
                        Which of the following country has largest population?
                      </h5>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="brazil"
                          value="brazil"
                          {...register("brazil")}
                        />{" "}
                        <span>Brazil</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="Germany"
                          value="Germany"
                          {...register("germany")}
                        />{" "}
                        <span>Germany</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="Indonesia"
                          value="Indonesia"
                          {...register("indonesia")}
                        />{" "}
                        <span>Indonesia</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input type="radio" name="Russia" value="Russia" />{" "}
                        <span>Russia</span>
                      </label>
                    </div>
                  </div>
                  <div class="question bg-white p-3 border-bottom">
                    <div class="d-flex flex-row align-items-center question-title">
                      <h3 class="text-danger">Q.</h3>
                      <h5 class="mt-1 ml-2">
                        Which of the following country has largest population?
                      </h5>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="brazil"
                          value="brazil"
                          {...register("brazil")}
                        />{" "}
                        <span>Brazil</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="Germany"
                          value="Germany"
                          {...register("germany")}
                        />{" "}
                        <span>Germany</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="Indonesia"
                          value="Indonesia"
                          {...register("indonesia")}
                        />{" "}
                        <span>Indonesia</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input type="radio" name="Russia" value="Russia" />{" "}
                        <span>Russia</span>
                      </label>
                    </div>
                  </div>
                  <div class="question bg-white p-3 border-bottom">
                    <div class="d-flex flex-row align-items-center question-title">
                      <h3 class="text-danger">Q.</h3>
                      <h5 class="mt-1 ml-2">
                        Which of the following country has largest population?
                      </h5>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="brazil"
                          value="brazil"
                          {...register("brazil")}
                        />{" "}
                        <span>Brazil</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="Germany"
                          value="Germany"
                          {...register("germany")}
                        />{" "}
                        <span>Germany</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="Indonesia"
                          value="Indonesia"
                          {...register("indonesia")}
                        />{" "}
                        <span>Indonesia</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input type="radio" name="Russia" value="Russia" />{" "}
                        <span>Russia</span>
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
