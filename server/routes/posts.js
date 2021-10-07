import express from 'express';

import {getPostsBySearch, getPosts, getPost,commentPost,  createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';
import {protect} from '../middleware/authMiddleware.js'

const router = express.Router();

router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.post('/', protect , createPost);
router.get('/:id', getPost);
router.patch('/:id', protect , updatePost);
router.delete('/:id',protect , deletePost);
router.patch('/:id/likePost', protect , likePost);
router.post('/:id/commentPost', protect , commentPost);

export default router;