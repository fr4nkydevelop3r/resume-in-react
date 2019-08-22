import React from 'react';
import styled from 'styled-components';


const InfoStyle = styled.div`
    text-align: center;
`;

const Info = ({ children }) => (
    
    <InfoStyle>
        <div className='Info-container'>
            {children}
        </div>
    </InfoStyle>
);

export default Info;