import express from 'express';
import {people, posts} from './main';

const mainRoute = express.Router();

mainRoute.get('/posts', (req, res) => {
  try {
    res.json({
      data: posts,
      error: null,
    });
  } catch (error) {
    res.status(500).send({
      status: 'ERROR',
      data: null,
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Internal Server Error, Please contact Administrator',
      },
    });
  }
});

mainRoute.get('/people/:id?', (req, res) => {
  const {id} = req.params;
  const result = id
    ? people.find((person) => person.id === Number(id))
    : people;

  try {
    res.json({
      data: result,
      error: null,
    });
  } catch (error) {
    res.status(500).send({
      status: 'ERROR',
      data: null,
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Internal Server Error, Please contact Administrator',
      },
    });
  }
});

mainRoute.get('/people/:id?/likedposts', (req, res) => {
  const {id} = req.params;
  const {likedPosts} = id
    ? people.find((person) => person.id === Number(id))
    : people;

  try {
    res.json({
      data: posts.filter((post) => likedPosts.includes(post.id)),
      error: null,
    });
  } catch (error) {
    res.status(500).send({
      status: 'ERROR',
      data: null,
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Internal Server Error, Please contact Administrator',
      },
    });
  }
});

export default mainRoute;
