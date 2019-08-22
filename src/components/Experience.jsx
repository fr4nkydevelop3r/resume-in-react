import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';
const Experience = props => (
    <div className='Experience'>
        <div className='Experience-container'>
            <H2Styled name="Experiencee"/>
            {props.data.map((exp, index) => (
                <div className='Experience-item' key={`Exp-${index}`}>
                     <H3Styled name={exp.company} /> 
                     <PStyled name={exp.jobTitle}/>
                </div>
            ))

            }
            
            
        </div>
    </div>
);

export default Experience;