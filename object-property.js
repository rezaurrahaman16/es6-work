const students = [
    {id: 21, name: 'Babu'},
    {id: 31, name: 'Raju'},
    {id: 41, name: 'Hashu'}
];

const names = students.map(s=> s.name);
const ids = students.map(s=> s.id);
const bigger = students.filter(s=> s.id>40);
const biggerone = students.find(s=> s.id>40);
console.log(biggerone);