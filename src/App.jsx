import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <form>
        <label>NAME</label>
        <input name="name" />
        <label>EMOTION</label>
        <select name="emotion">
          <option value="😁">Happy</option>
          <option value="😐">Neutral</option>
          <option value="😠">Angry</option>
        </select>
      </form>
    </div>
  );
}