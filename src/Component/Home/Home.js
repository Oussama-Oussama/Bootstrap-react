import "./Home.css";

function Home() {
  const items = [
    "Oussama",
    "Riyad",
    "Foad",
    "Boulam",
    "Anis",
    "Amin",
    "Zakaria",
  ];
  const listItems = items.map((el, i) => <li key={`el-${i}`}>{el}</li>);
  return (
    <div id="home">
      <nav>
        <ul>{listItems}</ul>
      </nav>
    </div>
  );
}
export default Home;
