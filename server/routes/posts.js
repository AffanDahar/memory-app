import express from 'express';

import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';
import {protect} from '../middleware/authMiddleware.js'

const router = express.Router();

router.get('/', getPosts);
router.post('/', protect , createPost);
router.get('/:id', getPost);
router.patch('/:id', protect , updatePost);
router.delete('/:id',protect , deletePost);
router.patch('/:id/likePost', protect , likePost);

export default router;