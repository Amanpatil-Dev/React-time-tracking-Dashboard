import WorkStat from "../WorkStat/WorkStat"


function Stats(props){
  const statDone=props.filteredWorkDone
  console.log(statDone)

    return <div className="col-sm-12 col-lg-9">
          <div className='row'>
            {statDone.map((data,i)=>(
              <WorkStat key={i} stat={data} />
            ))}
            {/* <WorkStat stat={statDone[0].title==='Work' ? statDone[0] : ''} />
            <PlayStat stat={statDone[1].title==='Play' ? statDone[1] : ''}/>
            <StudyStat stat={statDone[2].title==='Study' ? statDone[2] : ''}/>
            <ExerciseStat stat={statDone[3].title==='Exercise' ? statDone[3] : ''}/>
           <SocialStat stat={statDone[4].title==='Social' ? statDone[4] : ''}/>
           <SelfCareStat stat={statDone[5].title==='Self Care' ? statDone[5] : ''}/> */}
          </div>

        </div>

}

export default Stats