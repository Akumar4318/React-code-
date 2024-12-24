

const Card = (prop) => {
  return (
    <div className='Card-container' style={prop.style}>
        <p id="user-name">{prop.name}</p>
    <img id="user-img" src={prop.image} alt="abhis" />
    <p id="user-desc">{prop.desc}</p>
    </div>
  )
}

export default Card