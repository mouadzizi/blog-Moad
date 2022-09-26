import './Blogs.css'
import React, { useState, useEffect } from 'react'
import { Grid, TextField } from '@mui/material'
import Post from '../../components/Post'
import Data from '../../DATA/Data.json'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

export default function Blogs() {
  const [data, setData] = useState(Data.posts);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [blog, setBlog] = useState('');

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleChangeBlog = (event) => {
    setBlog(event.target.value);
  };

  const handleDate = () => {
    const date = new Date();
    const [month, day, year] = [date.getMonth() + 1, date.getDate(), date.getFullYear()];
    return (day + '/' + month + '/' + year)
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    justify: 'center'
  };

  const DeleteHandler = (id) => {

  }

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const submitData = () => {
    let newData = [...data, { title: title, id: 55, body: blog, DatePost: handleDate() }]
    setData(newData)
    setOpen(false);
  }

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
      <div className="ContainerFab">
        <button onClick={handleOpen} className="FAB"> Add Article </button>

      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: "50%" }}>

          <h2 className="modalTitle"> Add new Article</h2>
          <TextField
            id="outlined-basic"
            label="Blog Title"
            variant="outlined"
            className='modalTitleInput'
            sx={{ margin: '20px' }}
            placeholder='Awsome Title'
            onChange={handleChangeTitle}
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Write your blog here"
            variant="outlined"
            className='modalBlogInput'
            multiline
            placeholder='Write something intresting, be creative'
            fullWidth
            rows={7}
            sx={{ margin: '20px' }}
            onChange={handleChangeBlog}
          />
          <button onClick={submitData} className="submitButton"> Submit </button>
        </Box>
      </Modal>
    </div>
  )
}
