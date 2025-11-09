import React from "react";
import rev from "../../assets/bishop.png";

function Leadership() {
  const bishop = {
    name: "Bishop Peter Mungai",
    title: "Senior Pastor",
    img: rev,
    bio: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat 

          Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, 
          est eros bibendum elit, nec luctus magna felis sollicitudin mauris.`
  };

  const leaders = [
    {
      name: "Pst. Lorem Ipsum",
      title: "Lead Pastor",
      img: "https://via.placeholder.com/300x300",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Bro. Loren Ipsume",
      title: "Youth Coordinator",
      img: "https://via.placeholder.com/300x300",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Elder Loren Ipsum",
      title: "Church Administrator",
      img: "https://via.placeholder.com/300x300",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <section id="leadership" className="bg-base-200 py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-left">
        {/* 🕊️ Section Header */}
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-12 text-center">
          Our Leadership
        </h2>

        {/* 👑 Bishop Card */}
        <div className="bg-base-100 shadow-lg rounded-xl overflow-hidden mb-12 md:flex md:items-center md:gap-8">
          <div className="w-auto h-72 ">
            <img
              src={bishop.img}
              alt={bishop.name}
              className="w-full h-full object-contain"
            />
            <div className="text-center py-4 bg-base-100">
              <h3 className="text-2xl font-bold text-primary">{bishop.name}</h3>
              <p className="text-sm md:text-base text-base-content/70">{bishop.title}</p>
            </div>
          </div>
          <div className="md:w-4/5 p-1 md:p-2">
            <p className="text-xs md:text-sm text-base-content/80">{bishop.bio}</p>
          </div>
        </div>

        {/* 👥 Other Leaders Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-base-100 shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                <img
                  src={leader.img}
                  alt={leader.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-primary">{leader.name}</h3>
              <p className="text-sm text-base-content/70 mb-3">{leader.title}</p>
              <p className="text-sm text-base-content/70">{leader.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Leadership;
