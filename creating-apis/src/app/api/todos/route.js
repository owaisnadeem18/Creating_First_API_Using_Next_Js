let tasks = [
    {
        id: "01" ,
        task:"task 01" , 
        isCompleted: false
    }    ,
    {
        id: "02" ,
        task:"task 01" , 
        isCompleted: false
    }    ,
    {
        id: "03" ,
        task:"task 01" , 
        isCompleted: false
    }    ,
    {
        id: "04" ,
        task:"task 01" , 
        isCompleted: false
    }    ,
    {
        id: "05" ,
        task:"task 01" , 
        isCompleted: false
    }    

]

export async function GET()  {
    return Response.json(
        {
            data: tasks,
            msg: "todos have been fetched"
        }
    )
}