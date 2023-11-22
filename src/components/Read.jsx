import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { showUser } from '../features/userDetailsSlice';

const Read = () => {

    const dispatch = useDispatch()

    // app is the slice name given in the store
    const {users, loading} = useSelector((state) => state.app)

  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    maxWidth: '300px',
  };

  const titleStyle = {
    fontSize: '1.5em',
    fontWeight: 'bold',
    marginBottom: '8px',
  };

  const contentStyle = {
    fontSize: '1em',
    color: '#333',
  };

  useEffect(()=>{
    dispatch(showUser())
  },[])

  if(loading){
    return (<h2>Loading ...</h2>)
  }

  return (
    <>
      {users &&
        users.map((element) => (
          <div key={element.id} style={cardStyle}>
            <div style={titleStyle}>{element.name}</div>
            <div style={titleStyle}>{element.email}</div>
            <div style={titleStyle}>{element.age}</div>
            <div style={contentStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </div>
            <div>
                <a href='#' className='link' style={{ marginRight: '10px' }}>view</a>
                <a href='#' className='link' style={{ marginRight: '10px' }}>edit</a>
                <a href='#' className='link'>delete</a>
            </div>
          </div>
        ))}
    </>
  );
};

export default Read;
