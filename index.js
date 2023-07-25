//Stop the user selecting the same drop-down options
let dropdown_1 = document.getElementById("hTeam");
let dropdown_2 = document.getElementById("aTeam");

dropdown_1.addEventListener("change", function(event){
  let dropdown_1 = event.target.value;
  dropdown_2.addEventListener("change", function(event){
  let dropdown_2 = event.target.value;
  if (dropdown_1 == dropdown_2) {
  alert("Please select two different teams.");
  event.target.value = event.target.firstElementChild.value; 
                                              }
                                                     })});

//Define references
const teams = {
  'Arsenal': {points: 0, wins: 0, draws: 0, losses: 0},
  'Chelsea': {points: 0, wins: 0, draws: 0, losses: 0},
  'Crystal Palace': {points: 0, wins: 0, draws: 0, losses: 0},
  'Everton': {points: 0, wins: 0, draws: 0, losses: 0},
  'Manchester City': {points: 0, wins: 0, draws: 0, losses: 0},
  'Manchester United': {points: 0, wins: 0, draws: 0, losses: 0},
  'Tottenham Hotspur': {points: 0, wins: 0, draws: 0, losses: 0},
  'West Ham United': {points: 0, wins: 0, draws: 0, losses: 0}
};

//Trigger both functions using event listener

//Calculate table data
const submit = document.getElementById('submitBtn');
submit.addEventListener('click', function(event){
  event.preventDefault();
  let home = document.getElementById("hTeam").value;
  let away = document.getElementById("aTeam").value;
  let hgoal = document.getElementById("hgoals").value;
  let agoal = document.getElementById("agoals").value;
  let home_team = teams[home];
  let away_team = teams[away];
  if (hgoal > agoal){
    home_team.points += 3;
    home_team.wins += 1;
    away_team.losses += 1;
  }
  else if(agoal > hgoal){
    away_team.points += 3;
    away_team.wins += 1;
    home_team.losses += 1;    
  }
  else if(agoal = hgoal){
    away_team.points += 1;
    home_team.points += 1;
    home_team.draws +=1;
    away_team.draws +=1;
  }
  console.log(teams);
});

//Option for inserting data into the table
submit.addEventListener('click', function(event){
  event.preventDefault();
  const tableBody = document.querySelector('tbody');
  tableBody.innerHTML = '';
  for (const [key, values] of Object.entries(teams)){
    const newRow = document.createElement('tr');
    const keyCell = document.createElement('td');
    const pointsCell = document.createElement('td');
    const winsCell = document.createElement('td');
    const drawsCell = document.createElement('td');
    const lossesCell = document.createElement('td');
    const GDCell = document.createElement('td');
    keyCell.textContent = key;
    pointsCell.textContent = values.points;
    winsCell.textContent = values.wins;
    drawsCell.textContent = values.draws;
    lossesCell.textContent = values.losses;
    GDCell.textContent = values.GD;
    newRow.appendChild(keyCell);
    newRow.appendChild(pointsCell);
    newRow.appendChild(winsCell);
    newRow.appendChild(drawsCell);
    newRow.appendChild(lossesCell);
    newRow.appendChild(GDCell);
    tableBody.appendChild(newRow);
  }
});
                       


                       
                       
                       
