import Homepage from "./pages/Homepage";
import TopicsProvider from "./asset/TopicsProvider";
import RichTextEditor from "./pages/RichTextEditor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <TopicsProvider>
              <Homepage />
            </TopicsProvider>
          }
        />
        <Route path="/editor" element={<RichTextEditor />} />
      </Routes>
    </Router>
  );
};

export default App;
