
import {EditRoad, MoreVert} from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React, { useContext, useEffect, useState } from 'react';
import './dotMenu.css'
import { PostDataContext } from '../../Data/posts';
import { AuthContext } from '../../Authentication/AuthContext';

const OptionsComponent = ({id}) => {
  const [showOptions, setShowOptions] = useState(false);
  const {getData, state, dispatch} = useContext(PostDataContext);
  const {user} = useContext(AuthContext);
  const {encodedToken} = user;



  const handleToggleOptions = (id) => {
  
    setShowOptions(!showOptions);
    const getPost = async () => {
      console.log(id);
      try {
        const response = await fetch(`/api/posts/${id}`, {
          method: 'GET',
          headers: { authorization: encodedToken }
        });
        const data = await response.json();
        dispatch({ type: 'CURRENT_POST', payload: data.post });
        
      } catch (e) {
        console.error(e);
      }
    };
  getPost();
  };



  const handleDelete = (id) => {

    console.log(id)
    // Perform delete action here
    const deletePost = async () => {
      try {
        const response = await fetch(`/api/posts/${id}`, {
          method: 'DELETE',
          headers: { authorization: encodedToken }
        });
        console.log(response);
      } catch (e) {
        console.error(e);
      }
    };
    deletePost(); // Wait for the API call to finish;
    getData();



    console.log('Delete option clicked');
  };

  //EDITING POST

  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState('');

  const handleToggleModal = (id) => {
    setShowModal(!showModal);
    setText(state.currentPost.content)

 
  };

  
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setText(state.currentPost.content)
    setIsEditing(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsEditing(false);
    // Perform any submission logic here
    console.log('Submitted:', text);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };


  const handleEditing = (id) => {
    // Perform edit action here
    const editPost = async () => {
      try {
        const response = await fetch(` /api/posts/edit/${id}`, {
          method: 'POST',
          body: JSON.stringify({ postData: text }), // Wrap contentss in postData object
          headers: { authorization: encodedToken }
        });
        console.log(response);
      } catch (e) {
        console.error(e);
      }
    };
    editPost();
    getData();
    console.log('Edit option clicked');
    setShowModal(!showModal);
  };

  return (
    <div>
      <div className="options-container" onClick={() => handleToggleOptions(id)}>
        <MoreVert/>
      </div>
      {showOptions && (
        <div className="options-box">
          <ul>
            <li onClick={() => handleDelete(id)} className='post-Options'><DeleteIcon/>Delete</li>
            <li onClick={() => handleToggleModal(id)} className='post-Options'><EditIcon/> Edit</li>
          </ul>
        </div>
      )}
       <div>
      

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Edit Post</h2>
            <form onSubmit={handleSubmit}>
              <textarea className="resizable-input" type="text" value={text} onChange={handleChange} />
              <button type="submit">Submit</button>
            </form>
            
            {/* <p>{isEditing ? (
        <form onSubmit={handleSubmit}>
          <textarea className="resizable-input" type="text" value={text} onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>{text}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}</p> */}
            <button onClick={handleEditing}>Post</button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default OptionsComponent;





