function SocialStat(props){
    return  <div className='col-sm-12 col-md-6 col-xl-4'>
    <div class="card mt-4">
      <div class="card-body social-body">
        <div className="social">
        <svg width="75" height="100" xmlns="http://www.w3.org/2000/svg"><g fill="#5A1CBB" fill-rule="nonzero"><path d="M45.834 46.627c4.78 4.78 13.1 5.754 19.257-.403 5.2-5.199 5.198-13.657 0-18.855L47.151 9.428C42.335 4.614 34.02 3.7 27.892 9.83c-4.701 4.7-5.151 12.066-1.352 17.277l-6.265 6.265c-1.339 1.339-.317 3.644 1.585 3.533l13.474-.777 10.499 10.499Zm11.404-11.483a2.567 2.567 0 1 1-3.629 3.631 2.567 2.567 0 0 1 3.63-3.631ZM35.745 20.909a2.567 2.567 0 1 1 3.63-3.629 2.567 2.567 0 0 1-3.63 3.63Zm12.562 5.303a2.567 2.567 0 1 1-3.63 3.63 2.567 2.567 0 0 1 3.63-3.63ZM55.16 63.698 37.219 45.756c-5.198-5.197-13.658-5.197-18.857.001-6.072 6.073-5.26 14.4-.402 19.258l10.499 10.5-.777 13.473c-.11 1.886 2.186 2.931 3.533 1.584l6.265-6.265c5.212 3.8 12.577 3.349 17.277-1.352 6.06-6.059 5.274-14.386.403-19.257ZM25.813 57.24a2.567 2.567 0 1 1 3.63-3.631 2.567 2.567 0 0 1-3.63 3.63Zm8.932 8.931a2.567 2.567 0 1 1 3.63-3.629 2.567 2.567 0 0 1-3.63 3.63Zm8.932 8.933a2.567 2.567 0 1 1 3.63-3.631 2.567 2.567 0 0 1-3.63 3.63Z"/></g></svg>
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

export default SocialStat