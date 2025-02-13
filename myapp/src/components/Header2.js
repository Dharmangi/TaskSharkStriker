import React, { useState } from 'react';
import styled from 'styled-components';

const Header2Container = styled.div`
  background-color: rgb(46, 50, 54);
  padding: 10px 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
  justify-content: space-between; 
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SearchBox = styled.input`
  width:300px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color :rgba(12,30,40,0.2);
`;

const SelectContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const SelectBox = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  color:white;
  background-color:  rgba(12, 30, 40, 0.2);
`;

const Header2 = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <Header2Container>
      <SearchContainer>
        <SearchBox
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={handleSearchChange}
        />
        
      </SearchContainer>
      <SelectContainer>
        <SelectBox>
          <option>None</option>
        
        </SelectBox>
        <SelectBox>
          <option>All Sensors</option>
          
        </SelectBox>
        <SelectBox>
          <option>Relative</option>
        </SelectBox>
        <SelectBox>
          <option>Last 5 Hours</option>
        </SelectBox>
        <SelectBox>
          <option>None</option>
        </SelectBox>
      </SelectContainer>
    </Header2Container>
  );
};

export default Header2;