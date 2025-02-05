import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js'; // adjust the path as necessary

const BlogPost = sequelize.define('blogPost', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  },
  topic: {
    type: DataTypes.STRING,
    defaultValue: false
  }
}, {
  timestamps: true
});

// this creates the table if it doesn't already exist.
BlogPost.sync()
  .then(() => {
    console.log("BlogPost table created if it didn't already exist.");
  })
  .catch((error) => {
    console.error("Error creating BlogPost table:", error);
  });

export default BlogPost;