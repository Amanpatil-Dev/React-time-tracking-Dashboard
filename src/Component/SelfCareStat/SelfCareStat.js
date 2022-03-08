function SelfCareStat(props){
    return<div className='col-sm-12 col-md-6 col-xl-4'>
    <div class="card mt-4"> 
      <div class="card-body self-body">
        <div className="self-care">
        <svg width="67" height="67" xmlns="http://www.w3.org/2000/svg"><path d="M.918 50.848c.114 1.723.232 3.5.346 5.336l.003.038.448 6.038c.06.81.412 1.536.951 2.075.54.54 1.266.892 2.075.952l6.038.447.038.003c12.086.755 21.237 1.231 28.95.484 9.007-.873 15.369-3.445 20.02-8.096 8.413-8.413 8.398-21.609-.034-30.041-3.79-3.79-8.959-6.11-14.31-6.526-.415-5.352-2.736-10.52-6.526-14.31C30.484-1.185 17.288-1.2 8.875 7.214-1.295 17.384-.415 30.697.918 50.848ZM21.36 27.122l6.172 6.173 6.16-6.159 6.172 6.173-6.16 6.158 6.173 6.173-6.158 6.158-6.173-6.172-6.158 6.158-6.173-6.172 6.159-6.159-6.173-6.172 6.16-6.159Z" fill="#E6A532" fill-rule="nonzero"/></svg>
        </div>

        <div className="card_header work_header">
          <div className='row'>
            <div className='col-4 col-xl-12 work_hrs'>
              <p>{props.stat.title}</p>
              <h2>{props.stat.current}Hrs</h2>
            </div>
            <div className='col-8 col-xl-7-5-c work_week'>
              <p>Last week -{props.stat.previous} Hrs</p>
            </div>
          </div>
          <div className='eclipse'>
            <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd" /></svg>
          </div>
        </div>


      </div>
    </div>
  </div>
}

export default SelfCareStat