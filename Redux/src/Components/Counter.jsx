import { useSelector } from "react-redux"


const Counter = () => {


  const count=  useSelector( (state) => state.counter.value)


  return (
    <div>
        <button>
            incremnet
        </button>

        <br />
        <br />


        <div>
            {count}
        </div>

        <br /><br /><br />

        <button>decrement</button>
    </div>
  )
}

export default Counter