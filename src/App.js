import "./App.css";
import UploadContent from "./components/UploadContent";
import UploadedContentList from "./components/UploadedContentList";
function App() {
  return (
    <div className="App">
      {/* upload content */}
      <UploadContent />
      {/* uploaded content list */}
      <UploadedContentList/>
    </div>
  );
}

export default App;
