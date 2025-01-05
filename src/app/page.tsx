import {client} from "@/sanity/lib/client";
import Hero from "./component/hero";
import Link from "next/link";

interface firstBlog {
  name : string,
}

export default async function Home() {
  
  const User : firstBlog[] = await client.fetch('*[_type == "blog"]')
  return (
   <div>
          {
             User.map((data,index) =>{ 
               return (
               <div key={index}>

                <h1 className="text-2xl text-red-500 text-center"> {data.name}</h1>

                
                  <Link href={"studio"} className="text-2xl text-red-500 ml-[550px]">Add Anything Click Here</Link>
                
               
                

                

                <Hero/>
                 </div>


             )
             })
           }
    </div>
  );
}
