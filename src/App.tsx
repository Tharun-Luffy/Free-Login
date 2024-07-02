import React, { useState } from "react";
import Button from "./Button";

const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleEnter = (event: React.FormEvent) => {
    event.preventDefault();
    if (name.length > 2 && Number(age) > 17) {
      window.location.href = "https://hianime.to/home";
    } else {
      alert("Invalid Name or Minimum Age should be 18");
    }
  };
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-blue-600 to-yellow-600 grid place-content-center">
        <form>
          <div className="box-border bg-lime-400 hover:bg-lime-500 h-60 w-96 p-4 border-4 flex flex-col justify-between">
            <div className="flex flex-col items-center mb-4">
              <h1 className="font-semibold text-4xl mb-4">Content</h1>
              <div className="flex items-center">
                <label htmlFor="name" className="mr-2 text-lg font-medium">
                  Name:
                </label>
                <input
                  id="name"
                  type="text"
                  className="p-2 border border-gray-300 rounded"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className=" mt-2 flex items-center">
                <label htmlFor="age" className="mr-2 text-lg font-medium">
                  Age :
                </label>
                <input
                  id="name"
                  type="number"
                  placeholder="00"
                  className="p-2 border rounded"
                  max={100}
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  required
                ></input>
              </div>
            </div>
            <div className=" grid place-items-center">
              <Button onClick={handleEnter}>Enter</Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
