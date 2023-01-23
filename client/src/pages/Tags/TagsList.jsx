import React from 'react';

const TagsList = ({tag}) => {
  // console.log("tag", tag)
  return (
    <div className='tag'>
      <h5>{tag.tagName}</h5>
      <p>{tag.tagDesc}</p>
    </div>
  )
}

export default TagsList