import './Blogs.css'
import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import Post from '../../components/Post'
import Data from '../../DATA/Data.json'
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function Blogs() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  useEffect(() => {
    setData(Data.posts)
  }, []);

  const DeleteHandler = (id) => {
    //alert(id);
  }
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='Blogs'>

      <Grid container spacing={2}>
        {
          data.map((blog) => {
            return (
              <Post title={blog.title} body={blog.body} id={blog.id} date={blog.DatePost} deleteHandler={DeleteHandler} />

            )
          })
        }
      </Grid>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{...style, width: 400 }}>
          <h2> Add new Article</h2>
        </Box>
      </Modal>
    </div>
  )
}
