import { useState, useEffect } from 'react'
export function Home(props) {
  const [pageData, setPageData] = useState([])

  useEffect(() => {
    setPageData(props.listData)
    console.log(props.listData)
  })

  if (pageData.length > 0) {
    const itemCollection = pageData.map((item, key) => {
      return (
        <div className="col-md-4" key={key}>
          <div>
            <div className="card-body text-center shadow p-3 mb-5 bg-body rounded">
              <img className="rounded" src={item.ImageUrl} height="350px" />
              <div>
                <h5 className="card-title">{item.Title}</h5>
                <span className="text-secondary">{item.Description}</span>
              </div>

            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="container my-4">
        <div className="row">
          {itemCollection}
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="container"></div>
    )
  }
}