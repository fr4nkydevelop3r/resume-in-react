import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';

const Certificates = props => (
    <div className='Certificates'>
        <div className='Certificates-container'>
            <H2Styled name='certificates'></H2Styled>
            {props.data.map((cer,index) => (
                
                <div className='Certificates-item' key={`cer-${index}`}>
                    
                    <PStyled name={cer.institution}/>
                    <PStyled name={cer.name} />
                    <PStyled name={cer.description}/>
                </div>

            ))}
            
        </div>
    </div>
);

export default Certificates;