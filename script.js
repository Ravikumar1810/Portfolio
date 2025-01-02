// Add event listener to nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const sectionId = link.getAttribute('href').slice(1);
        document.querySelector(`#${sectionId}`).scrollIntoView({ behavior: 'smooth' });
    });
});const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blog', { useNewUrlParser: true, useUnifiedTopology: true });

const blogPostSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  dateCreated: Date
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

app.get('/api/blog-posts', (req, res) => {
  BlogPost.find().then(blogPosts => res.json(blogPosts));
});

app.post('/api/blog-posts', (req, res) => {
  const blogPost = new BlogPost(req.body);
  blogPost.save().then(() => res.json(blogPost));
});

app.put('/api/blog-posts/:id', (req, res) => {
  BlogPost.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, blogPost) => {
    if (err) res.status(404).json({ message: 'Blog post not found' });
    else res.json(blogPost);
  });
});

app.delete('/api/blog-posts/:id', (req, res) => {
  BlogPost.findByIdAndRemove(req.params.id, (err, blogPost) => {
    if (err) res.status(404).json({ message: 'Blog post not found' });
    else res.json({ message: 'Blog post deleted successfully' });
  });
});

app.listen(3000, () => console.log('Server listening on port 3000'));