import react from 'react'
//props
//state
//children
const Scroll = (props) => {
  return(
    <div style={{overflowY: 'scroll', height:'800px' }}>
      {props.children}
    </div>
  )
}

export default Scroll