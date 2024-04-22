const avengers = [
  {
    name: 'Iron Man',
    realName: 'Tony Stark',
    age: 48,
    primaryPower: 'Genius-level intellect',
  },
  {
    name: 'Captain America',
    realName: 'Steve Rogers',
    age: 100,
    primaryPower: 'Super Strength',
  },
  {
    name: 'Thor Odinson',
    age: 1500,
    primaryPower: 'Lightning',
  },
  {
    name: 'Hulk',
    realName: 'Bruce Banner',
    age: 49,
    primaryPower: 'Super Strength',
  },
  {
    name: 'Black Widow',
    realName: 'Natasha Romanoff',
    age: 34,
    primaryPower: 'Expert spy',
  },
  {
    name: 'Hawkeye',
    realName: 'Clint Barton',
    age: 35,
    primaryPower: 'Master archer',
  },
]

// 1. Iterate over the entire array and log each superhero's name to the console.
console.log('Superheroes:')
for (let i = 0; i < avengers.length; i++) {
  console.log(avengers[i].name)
}

// 2. Check if the superhero's primary power is "Super Strength" and log their name.
console.log('\nSuperheroes with Super Strength:')
for (let i = 0; i < avengers.length; i++) {
  if (avengers[i].primaryPower === 'Super Strength') {
    console.log(avengers[i].name)
  }
}

// 3. Check if the superhero's age is greater than or equal to 50 and log their name and age.
console.log('\nSuperheroes aged 50 or older:')
for (let i = 0; i < avengers.length; i++) {
  if (avengers[i].age >= 50) {
    console.log(avengers[i].name + ', Age: ' + avengers[i].age)
  }
}
