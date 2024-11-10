
const Todos = async () => {

    let res = await fetch("http://localhost:3000/api/todos")

    res = await res.json()

    console.log(res)

  return (
    <div className= "text-2xl font-bold min-h-screen flex justify-center items-center flex-col gap-5">
      <h2>
        Todos :
      </h2>

    {
    res.data.map((item , idx) => (   
        <div key = {item.id} className="border border-blue-900 p-3 rounded-xl"  >
        <h3 className = "flex gap-2 flex-col" >
            Task # {idx+1} is <h2 className="text-center border-gray-700 border rounded-lg" >
                {item.task}
            </h2>
        </h3>
    </div>
    
)
)
    }

    </div>
  )
}

export default Todos
