export default [{
    name:"title",
    desc:"an ai tool that generates blog title depending on the information of your blog",
    category : 'Blog',
    icon :'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
    aiPrompt: 'Give me 5 blog topic idea in bullet wise only based on given niche & outline and give me result in Rich text editor format',
    slug:'generate-blog-title',
    form:[{
        label:'Enter your nlog niche',
        field:'input',
        name:'niche',
        required:true
    },
    {
        label:'Enter your blog topic',
        field:'textarea',
        name:'outline',
        required:true
    },
    {
        label:'Enter your blog topic',
        field:'input',
        name:'topic',
        required:true
    }
]
},
{
    name:"title",
    desc:"an ai tool that generates blog title depending on the information of your blog",
    category : 'Blog',
    icon :'https://cdn-icons-png.flaticon.com/128/2799/2799954.png',
    aiPrompt: 'Give me 5 blog topic idea in bullet wise only based on given niche & outline and give me result in Rich text editor format',
    slug:'generate-blog-title',
    form:[{
        label:'Enter your nlog niche',
        field:'input',
        name:'niche',
        required:true
    },
    {
        label:'Enter your blog topic',
        field:'textarea',
        name:'outline',
        required:true
    },
    {
        label:'Enter your blog topic',
        field:'input',
        name:'topic',
        required:true
    }
]
}]