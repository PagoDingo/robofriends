import React from 'react'

const SearchBox = ({searchChange, searchField}) => {
    return (
        <div className='pa2 tc'>
            <h1 className='title'>Robot Friends</h1>
            <input 
                className=' pa3 ba b--green bg-lightest-blue'
                type='search'
                onChange={searchChange}
                placeholder='search robots'
            />
            <hr />
        </div>
    )
}

export default SearchBox;