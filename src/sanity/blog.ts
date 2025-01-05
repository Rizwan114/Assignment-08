import { defineField,defineType } from "sanity";


const User = defineType ({
    title : "POST_TITLE",
     name : "post",
     type : "document",
     fields : [
         defineField ({
             title :"Post Tittle",
             name :"Tittle_post",
             type : "string"
         }),
         defineField ({
            title :"Post Description",
            name :"post_description",
            type : "string"
        }),
        defineField ({
            title :"Post Comment",
            name :"post_comment",
            type : "string"
        })
     ]

})

export default User