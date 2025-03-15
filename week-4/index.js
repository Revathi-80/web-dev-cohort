let userActivity = [
    {name: "John", activity: 45},
    {name: "Jane", activity: 30},
    {name: "Jim", activity: 25},
    {name: "Jill", activity: 75},
    {name: "Jack", activity: 5},
]

const maxActivity = userActivity.reduce((acc,user) => 
     acc.activity < user.activity ? user : acc
)

console.log('max user activity', maxActivity)