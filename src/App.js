import UserCard from "./Component/UserCard/UserCard";
import Stats from "./Component/Stats/Stats";
import React, { useState } from 'react';

const stat = [
  {
    timeframes: [
      {
        name: "daily",
        title: "Work",

        current: 5,
        previous: 7,
      },
      {
        name: "weekly",
        title: "Work",

        current: 32,
        previous: 36,
      },
      {
        name: "monthly",
        title: "Work",

        current: 103,
        previous: 128,
      },
    ],
  },
  {
    timeframes: [
      {
        name: "daily",
        title: "Play",

        current: 1,
        previous: 2,
      },
      {
        name: "weekly",
        title: "Play",

        current: 10,
        previous: 8,
      },
      {
        name: "monthly",
        title: "Play",

        current: 23,
        previous: 29,
      },
    ],
  },
  {
    title: "Study",
    timeframes: [
      {
        name: "daily",
        title: "Study",

        current: 0,
        previous: 1,
      },
      {
        name: "weekly",
        title: "Study",

        current: 4,
        previous: 7,
      },
      {
        name: "monthly",
        title: "Study",

        current: 13,
        previous: 19,
      },
    ],
  },
  {
    title: "Exercise",
    timeframes: [
      {
        name: "daily",
        title: "Exercise",

        current: 1,
        previous: 1,
      },
      {
        name: "weekly",
        title: "Exercise",

        current: 4,
        previous: 5,
      },
      {
        name: "monthly",
        title: "Exercise",

        current: 11,
        previous: 18,
      },
    ],
  },
  {
    title: "Social",
    timeframes: [
      {
        name: "daily",
        title: "Social",

        current: 1,
        previous: 3,
      },
      {
        name: "weekly",
        title: "Social",

        current: 5,
        previous: 10,
      },
      {
        name: "monthly",
        title: "Social",

        current: 21,
        previous: 23,
      },
    ],
  },
  {
    title: "Self Care",
    timeframes: [
      {
        name: "daily",
        title: "Self Care",

        current: 0,
        previous: 1,
      },
      {
        name: "weekly",
        title: "Self Care",

        current: 2,
        previous: 2,
      },
      {
        name: "monthly",
        title: "Self Care",

        current: 7,
        previous: 11,
      },
    ],
  },
];

function App() {

  const [initialStat, setInitialStat] = useState(stat
    .map((val) => {
      return val.timeframes.filter((val) => {
        return val.name === 'weekly';
      });
    })
    .flat())

  const UserStat = {
    goodName: "Jeremy Robson",
    stats: ["Daily", "Weekly", "Monthly"],
    content: "Reports For",
  };


  function handleStatChange(stats) {
    console.log(stats.toLowerCase());
    const filteredWork = stat
      .map((val) => {
        return val.timeframes.filter((val) => {
          return val.name === stats.toLowerCase();
        });
      })
      .flat();

    setInitialStat(filteredWork)

  }

  return (
    <div className="container">
      <div className="row">
        
        <UserCard onStatChange={handleStatChange} data={UserStat} />

        <Stats filteredWorkDone={initialStat} />
      </div>
    </div>
  );
}

export default App;
