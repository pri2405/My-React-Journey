import { useEffect , useState } from "react";
import { useLoaderData } from "react-router";


function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState({})
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // }, [])

    return (
        <div className="text-center bg-gray-600 text-white m-3 text-3xl p-4">
            Github Followers: {data.followers}
            <img className="text-center" src={data.avatar_url} alt="Git profile picture" width={300} ></img>
        </div>
    )
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}