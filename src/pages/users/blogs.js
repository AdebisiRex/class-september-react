import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "@/Components/Layout/Navbar";
import Spinners from "@/Components/Spinners";
const blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getBlogData = async () => {
      const blogs = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setTimeout(() => {
        setBlogs(blogs.data);
        setLoading(false)
      }, 15000);
    };

    getBlogData();
  }, []);
  return (
    <div className="container">
      <Navbar />
      <h1>This is the blogs page</h1>
      {loading ? (
       <Spinners/>
      ) : (
        <ul>
          {blogs.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default blogs;
