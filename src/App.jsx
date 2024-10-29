import Topbar from './components/Topbar'
import { Card } from './components/Card'

import './App.css'
import { Column } from './components/Column'
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Board } from './components/Board';


export const UsersContext = createContext([]);
export const TicketsContext = createContext([]);
export const GroupContext = createContext();
export const OrderContext = createContext();

export default function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState(() => {
    return localStorage.getItem('grouping') || "Status";
  });
  const [ordering, setOrdering] = useState(() => {
    return localStorage.getItem('ordering') || "Priority";
  });
  useEffect(() => {
    localStorage.setItem('grouping', grouping);
  }, [grouping]);
  
  useEffect(() => {
    localStorage.setItem('ordering', ordering);
  }, [ordering]);

  useEffect(() => {
      fetchTasks();
  }, []);

  const fetchTasks = async () => {
      const response = await axios.get("https://api.quicksell.co/v1/internal/frontend-assignment");
      const data = response.data;
      setTickets(data.tickets);
      setUsers(data.users);
  };

  return (
      <>
          <UsersContext.Provider value={users}>
              <TicketsContext.Provider value={tickets}>
                  <GroupContext.Provider value={{grouping, setGrouping}}>
                      <OrderContext.Provider value={{ordering, setOrdering}}>
                          <Topbar />
                          <Board tickets={tickets} users={users} />
                      </OrderContext.Provider>
                  </GroupContext.Provider>
              </TicketsContext.Provider>
          </UsersContext.Provider>
      </>
  );
}
