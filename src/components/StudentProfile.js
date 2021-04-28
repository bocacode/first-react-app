import React from 'react'

function StudentProfile(props) {

    const {firstName, lastName, coolShoes, petName} = props.student

    return (
        <>
            <p>{`Student Name: ${firstName} ${lastName}`}</p>
            <p>{`Cool Shoes: ${coolShoes ? 'Yes' : 'No'}`}</p>
            {/*<p>{`Pet Name: ${petName || 'No Pet'}`}</p>*/}
            {petName ?
                <p>{`Pet Name: ${petName}`}</p>
                :
                <p>This student does not have a pet</p>
            }
        </>
    )
}

export default StudentProfile