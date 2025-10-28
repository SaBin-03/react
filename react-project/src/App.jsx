import Card from "./components/cards";

function App() {
  const people = [
  {
    personName: "Ava Thompson",
    personImg: "https://randomuser.me/api/portraits/women/21.jpg"
  },
  {
    personName: "Liam Johnson",
    personImg: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    personName: "Sophia Patel",
    personImg: "https://randomuser.me/api/portraits/women/56.jpg"
  },
  {
    personName: "Noah Anderson",
    personImg: "https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    personName: "Emma Wilson",
    personImg: "https://randomuser.me/api/portraits/women/15.jpg"
  },
  {
    personName: "Mason Brown",
    personImg: "https://randomuser.me/api/portraits/men/29.jpg"
  },
  {
    personName: "Olivia Garcia",
    personImg: "https://randomuser.me/api/portraits/women/62.jpg"
  },
  {
    personName: "Ethan Martinez",
    personImg: "https://randomuser.me/api/portraits/men/73.jpg"
  }
];


  return (
    <div className="parent">
      {people.map(function (elem) {
        return <Card person ={elem.personName} img ={elem.personImg} />;
      })}
    </div>
  );
}

export default App;
