import React from "react"

const CVCard = (props) => {
  let cv = props.cv
  return (
    <>
      <div class="ui card">
        <div class="image">
          <img src={cv.image} />
        </div>
        <div class="content">
          <h3 class="ui header">{cv.name}</h3>

          <div class="description">
            {cv.description}
          </div>
        </div>
      </div>
    </>
  )
}

export default CVCard