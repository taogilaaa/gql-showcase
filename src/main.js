import {GraphQLServer} from 'graphql-yoga';
import cors from 'cors';
import mainRoute from './express';

// Sample data
export let people = [
  {
    id: 1,
    firstName: 'Michael',
    lastName: 'Suyama',
    email: 'suyama@wp.co',
    likedPosts: [1, 2],
  },
  {
    id: 2,
    firstName: 'Nancy',
    lastName: 'DaVolio',
    email: 'davolio@wp.co',
    likedPosts: [1],
  },
  {
    id: 3,
    firstName: 'David',
    lastName: 'Buchanan',
    email: 'buchanan@wp.co',
    likedPosts: [2, 3],
  },
];
export let posts = [
  {id: 1, imageUrl: 'google.com', description: 'Introduction to GraphQL'},
  {id: 2, imageUrl: 'microsoft.com', description: 'Welcome to POC'},
  {id: 3, imageUrl: 'yahoo.com', description: 'Advanced GraphQL'},
];

// Provide resolver functions for your schema fields
const resolvers = {
  Person: {
    fullName: ({firstName, lastName}) => `${firstName} ${lastName}`,
    likedPosts: ({likedPosts}) =>
      posts.filter((post) => likedPosts.includes(post.id)),
  },
  Query: {
    hello: () => 'Hello world!',
    people: () => people,
    person: (_, {id}) => people.find((person) => person.id === id),
    posts: (_, {filter}) =>
      posts.filter((post) =>
        filter ? post.description.includes(filter) : posts,
      ),
    post: (_, {id}) => posts.find((post) => post.id === id),
  },
  Mutation: {
    createPost: (_, {imageUrl, description}) => {
      const newPost = {id: posts.length + 1, imageUrl, description};
      posts = [...posts, newPost];

      return newPost;
    },
    deletePost: (_, {id}) => {
      const deletedPost = posts.find((post) => post.id === id);
      posts = posts.filter((post) => post.id !== id);

      return deletedPost;
    },
  },
};

let server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
})
  .use(cors({origin: true}))
  .use('/api', mainRoute);

server.start({port: 4005}, () =>
  console.log(`Server is running on http://localhost:${4005}`),
);
