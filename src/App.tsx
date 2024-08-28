import React, { useState } from 'react';
import MyCard from './Newcard'; 
import Form from './Form';      
import { Grid } from '@mui/material';
import Dialog from '@mui/material/Dialog';
function App() {
  const [showForm, setShowForm] = useState(false);

  const handleCreateIconClick = () => {
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
  };

  return (
    <>
      <MyCard onCreateIconClick={handleCreateIconClick} />
      {showForm && <Dialog open={showForm}><Form  onClose={handleClose} /> </Dialog>}
      </>
  );
}

export default App;
