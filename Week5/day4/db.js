const mongoose = require("mongoose");

const {  Book, Author } = require("./schema");
// Connect to MongoDB

mongoose
  .connect("mongodb://localhost:27017/my_database", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(5000, () => {
      console.log("App is running on port 5000");
    });
  })
  .catch((err) => {
    console.error("Connection error", err);
  });


  const addAuthor = async (name, email) => {
    const newAuthor = new Post({
      name,
      email,
    });
    try {
      const savedauthor = await newAuthor.save();
      console.log("Author created:", savedauthor);
    } catch (err) {
      console.error("Error creating Author:", err);
    }
  };
  const createBook = async (authorEmail, title, description, price, pages) => {
    try {
      const author = await Author.findOne({ email: authorEmail });
      const newBook = new Book({
        title,
        description,
        price,
        pages,
        author: author._id,
      });
      const savedBook = await newBook.save();
      console.log("Book created:", savedBook);
    } catch (err) {
      console.error("Error creating Book:", err);
    }
  };
  
  addAuthor("Retyit paul", "ret@mail.com");
  createBook("ret@mail.com", "My Book", "This is my first book", 500, 20);
  