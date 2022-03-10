import { Work, Play, Social, Study, SelfCare, Excercise } from "../SVG/MainSVG";
function WorkStat(props) {
  const status =
    props.stat.title.toLowerCase().split(" ").length === 2
      ? props.stat.title.toLowerCase().split(" ").join("-")
      : props.stat.title.toLowerCase();

  console.log(props.stat.title);
  return (
    <div className="col-sm-12 col-md-6 col-xl-4 ">
      <div className="card mt-4">
        <div className={`card-body ${status}-body`}>
          <div className={status}>
            {props.stat.title === "Work" ? (
              <Work />
            ) : props.stat.title === "Play" ? (
              <Play />
            ) : props.stat.title === "Study" ? (
              <Study />
            ) : props.stat.title === "Exercise" ? (
              <Excercise />
            ) : props.stat.title === "Social" ? (
              <Social />
            ) : props.stat.title === "Self Care" ? (
              <SelfCare />
            ) : (
              ""
            )}
          </div>

          <div className={`card_header work_header`}>
            <div className="row">
              <div className={`col-4 col-xl-12 work_hrs`}>
                <p>{props.stat.title}</p>
                <h1>{props.stat.current}Hrs</h1>
              </div>
              <div className={`col-8 col-xl-7-5-c work_week`}>
                <p>Last week {props.stat.previous}Hrs</p>
              </div>
            </div>
            <div className="eclipse">
              <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                  fill="#BBC0FF"
                  fillRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkStat;
