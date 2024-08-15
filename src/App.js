import BlogsTodos from "./components/BlogsTodos";
import InputTodo from "./components/InputTodo";
import ListTodo from "./components/ListTodo";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import Navbar from "./pages/Navbar";


function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      {/* Here, title="Welcome to the Todo-List" is the prop being passed to the Hero component. */}
      <div>
        <Hero title="Welcome to our Todo-List" />
      </div>
      <div>
        <InputTodo />
      </div>
      <div>
        <ListTodo />
      </div>
      <div>
        <BlogsTodos />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
