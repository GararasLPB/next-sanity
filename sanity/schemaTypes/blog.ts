export default {
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields: [
        {
        name: 'title',
        title: 'Title of blog article',
        type: 'string',
        },
        {
        name: 'slug',
        title: 'Slug of your blog article',
        type: 'slug',
        options: {
            source: 'title',
            maxLength: 96, 
        },
        },
        {
        name: 'titleImage',
        title: 'Title image',
        type: 'image',
        },
        {
        name: 'smallDescription',
        title: 'Small description',
        type: 'text',
        },
        {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [{type: 'block'}],
        },
    ],
}