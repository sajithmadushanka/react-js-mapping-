import ListTile from "./component/ListTile";
function App() {
  // user details json object
  const Users = [
    {
      Name: "Pathum Nissanka",
      Uri :  "https://tse2.mm.bing.net/th?id=OIP.bKLFdpUcUvEmbsx9zSNp5gAAAA&pid=Api&P=0",
      Score: "560",
      Inning: "50",
      Avg : "25.62"
    },
    {
      Name:"Dashun Shanka",
      Uri :  "https://sportsest.com/wp-content/uploads/2022/07/Dasun-Shanaka-player-sportsest.webp",
      Score: "450",
      Inning: "80",
      Avg : "25.62"
    },
    {
      Name:"Kusal Mendis",
      Uri :  "https://m.cricbuzz.com/a/img/v1/192x192/i1/c244672/kusal-mendis.jpg",
      Score: "962",
      Inning: "62",
      Avg : "22.62"
    }
  ]

  // users object convert to map
const UsersCard = Users.map((user) =>{
  return <ListTile  Name={user.Name} Uri ={user.Uri} 
  Score = {user.Score} Inning ={user.Inning} Avg ={user.Avg}  key= {user.Name} />
  

})
  return (
     <div>
      {UsersCard} 
     </div>
   
  );
}

export default App;
