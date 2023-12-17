
const Sidebar = ({categories}) => {
    
  return (

    <div>{categories.map(x => <div key={x.id}>{x.name}</div>)}</div>
  )
}

export default Sidebar