function findAllHobbyists(hobby, hobbies) {
  return Object.keys(hobbies).find(key => hobbies[key].find(h => h === hobby));
}

var hobbies = {
  "Steve": ['Fashion', 'Piano', 'Reading'],
  "Patty": ['Drama', 'Magic', 'Pets'],
  "Chad": ['Puzzles', 'Pets', 'Yoga']
};

console.log(findAllHobbyists('Yoga', hobbies));