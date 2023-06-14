
import {MoreVert} from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React, { useContext, useState } from 'react';
import './dotMenu.css'
import { PostDataContext } from '../../Data/posts';
import { AuthContext } from '../../Authentication/AuthContext';

const OptionsComponent = ({id}) => {
  const [showOptions, setShowOptions] = useState(false);
  const {getData} = useContext(PostDataContext);
  const {user} = useContext(AuthContext);
  const {encodedToken} = user;



  const handleToggleOptions = (id) => {
  
    setShowOptions(!showOptions);
    console.log(id)
  };

  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = (id) => {
    setShowModal(!showModal);
    


    const getPost = async () => {
      console.log(id);
      try {
        const response = await fetch(`/api/posts/${id}`, {
          method: 'GET',
          headers: { authorization: encodedToken }
        });
        console.log(response)
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


  const handleEdit = (id) => {
    // Perform edit action here
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
            <p>This is the content of the modal.</p>
            <button onClick={handleEdit}>Post</button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default OptionsComponent;





