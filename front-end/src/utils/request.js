const DOMAIN="http://localhost:3000";
export const get=async(path)=>
{
    const response = await fetch(DOMAIN+path);
    return response.json();
}
export const post=async(item,path)=>
{
    const response = await fetch(DOMAIN+path,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(item)
        });
    return response.json();
    
}
export const patch=async(item,id,path)=>
{
    const response = await fetch(`${DOMAIN}${path}/${id}`,
            {
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(item)
        }); 
    return response.json();

}
export const del = async(id,path)=>
{
    const response = await fetch(`${DOMAIN}${path}/${id}`,
    {
    method:"DELETE",
    }); 
    return response.json(); 
}