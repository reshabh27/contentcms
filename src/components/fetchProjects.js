import { createClient } from "contentful";
import { useEffect } from "react";
import { useState } from "react";


const client = createClient({
  space: process.env.REACT_APP_SPACE,
  environment: "master",
  accessToken: process.env.REACT_APP_ACCESSTOKEN,
});


export const useFetchProjects = () => {
    const [loading,setLoading] = useState(1);
    const [projects,setProjects] = useState([]);

    // console.log(process.env.REACT_APP_SPACE);
    const getData = async() => {
        try {
            const res = await client.getEntries({ content_type: "projects" });
            // setProjects(res.json());
            const data = res.items.map(obj => {
                 const title = obj.fields.title;
                 const url = obj.fields.url;
                 const image = obj.fields.image.fields.file.url;
                 const id = obj.sys.id;
                 return { title, url, id, image };
            })
            setProjects(data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }

    }

    useEffect(() => {
        getData();
    },[])

    return {loading,projects};
}

