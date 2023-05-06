import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const AdminNavbar = () => {
  return (
          <DIV>
            <h2>Amaze</h2>
            <Link to={"/dashboard"}>Dashboard</Link> 
            <Link to={"/login"}>Login</Link>
            <Link to={"/dashboard/admin"}>Admin</Link>
          </DIV>
        );
      };
  const DIV=styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color:orange;
  `;