import React, { useState, useEffect, ChangeEvent } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import ErrorBoundary from "../components/ErrorBoundary";
import Scroll from "../components/Scroll";
import "./App.css";

import { getData } from "../utils/data.utils";

export type Robot = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [searchfield, setSearchfield] = useState("");
  const [robots, setRobots] = useState<Robot[]>([]);
  const [filteredRobots, setFilteredRobots] = useState(robots);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Robot[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setRobots(users);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const newFilteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    setFilteredRobots(newFilteredRobots);
  }, [robots, searchfield]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchfield(event.target.value.toLowerCase());
  };

  return (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox
        className="robots-search-box"
        searchChange={onSearchChange}
        placeholder="search robots"
      />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
};

export default App;
