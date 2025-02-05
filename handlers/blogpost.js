import BlogPost from '../models/blogposts.js';

// Method to create a new blog post.
export const storeBlogPost = async (req, res) => {
  try {
    console.log(req.body);
    const title = req.body.title;
    const content = req.body.content;
    const author = req.body.author;
    const topic = req.body.topic;

    // Create a new blog post record.
    const newPost = await BlogPost.create({ title, content, author, topic });

    return res.status(201).json(newPost);
  } catch (error) {
    console.error('Error storing blog post:', error);
    return res.status(500).json({ error: 'Failed to create blog post.' });
  }
};

// Method to update an existing blog post.
export const updateBlogPost = async (req, res) => {
  try {
    console.log("Calling update!");
    console.log(req.body);
    const id = req.body.id;
    const title = req.body.title;
    const content = req.body.content;
    const author = req.body.author;
    const topic = req.body.topic;

    // Find the blog post by primary key.
    const post = await BlogPost.findByPk(id);
    if (!post) {
      return res.status(404).json({ error: 'Blog post not found.' });
    } else {
      console.log("Found record:", post);
    }

    // Update the fields (only if provided, or keep the old values).
    post.title = title || post.title;
    post.content = content || post.content;
    post.author = author || post.author;
    post.topic = topic || post.topic;

    // Save the changes.
    await post.save();

    // Return the updated post.
    return res.status(200).json(post);
  } catch (error) {
    console.error('Error updating blog post:', error);
    return res.status(500).json({ error: 'Failed to update blog post.' });
  }
};

// Method to fetch all blog posts.
export const fetchBlogPosts = async (req, res) => {
  try {
    // Retrieve all blog posts from the database.
    const posts = await BlogPost.findAll();

    // Build an HTML string with a table including Edit and Delete columns.
    let tableBody = '';

    // Create a table row for each blog post.
    posts.forEach(post => {
      tableBody += `
            <tr>
              <td>${post.id}</td>
              <td>${post.title}</td>
              <td>${post.content}</td>
              <td>${post.author}</td>
              <td>${post.topic}</td>
              <td>${new Date(post.createdAt).toLocaleString()}</td>
              <td>${new Date(post.updatedAt).toLocaleString()}</td>
              <td>
                <button onclick='editBlogPost(${post.id}, ${JSON.stringify(post.title)}, ${JSON.stringify(post.content)}, ${JSON.stringify(post.author)}, ${JSON.stringify(post.topic)})'>
                  Edit
                </button>
              </td>
              <td>
                <button onclick="deleteBlogPost(${post.id})">
                  Delete
                </button>
              </td>
            </tr>
      `;
    });

    return res.render('listblogpost', { "tableBody": tableBody });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return res.status(500).send('<h1>Failed to fetch blog posts.</h1>');
  }
};

// Method to delete a blog post
export const deleteBlogPost = async (req, res) => {
  try {
    console.log("Calling delete blog!");
    console.log(req.body);
    const id = req.body.id;

    // Find the blog post by its primary key.
    const post = await BlogPost.findByPk(id);

    if (!post) {
      return res.status(404).json({ error: 'Blog post not found.' });
    }

    // Delete the blog post.
    await post.destroy();

    // Return a success message.
    return res.status(200).json({ message: 'Blog post deleted successfully.' });
  } catch (error) {
    console.error('Error deleting blog post:', error);
    return res.status(500).json({ error: 'Failed to delete blog post.' });
  }
};
