import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button, Input} from '@material-ui/core'
import Modal from '@material-ui/core/Modal';
import {CssTextField} from '../CssTextField/CssTextField'

function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    width: `50%`,
    height: `fit-content`,
    transform: `translate(-50%, -50%)`, 
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  var modified = false;
  const handleChange = () => {
    modified = true
  }
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onClickButton = (action, modified) => {
    var answer
    if (action == "save"){
      if(modified){
        answer = window.confirm('Are you going to save your changes ?')
        if(answer){
          window.alert('Your changes are saved!')
          handleClose()
        }
      }
      else{
        handleClose()
      }
    }
    else if (action == 'delete'){
      answer = window.confirm('Are you going to delete your proposals ?')
      if(answer){
        window.alert('Your proposal is deleted!')
        handleClose()
      }
    }
    else if (action == 'close'){
      if(modified){
        answer = window.confirm('Are you going to close your proposal without saving your changes?')
        if (answer){
          window.alert('Your changes to your proposal are discarded!')
          handleClose()
        }
      }
      else{
        handleClose()
      }
    }
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div>
        <span style={{display:"flex"}}>
          <span style={{display:"inline-flex"}}>
            Proposal to:  
          </span>
          <span classNamestyle={{display:"inline-flex"}}>
            {props.title}
          </span>
        </span>
        <span style={{display:"inline-flex", marginTop:'5%'}}>
          <span style={{display:"inline-flex"}}>
            Proposal to Chapter:  
          </span>
          <span style={{display:"inline-flex"}}>
            <Input style={{fontSize:"x-large"}} defaultValue={props.chapter} onChange={handleChange}></Input>
          </span>
        </span>
        <span style={{display:"flex", marginTop:'2%'}}>
          Proposal Content:  
        </span>
        <CssTextField style={{width: "100%", marginTop:'2%'}} variant='outlined' multiline rows={5} rowsMax={10} defaultValue={props.content} onChange={handleChange}></CssTextField>
        <span style={{display:"flex", justifyContent: "space-around", width:"100%"}}>
          <Button color="primary" style={{display:'flex'}} onClick = {() => onClickButton('save', modified)}> Save Changes </Button>
          <Button color="primary" style={{display:'flex'}} onClick = {() => onClickButton('delete', modified)}> Delete Proposal </Button>
          <Button color="primary" style={{display:'flex'}} onClick = {() => onClickButton('close', modified)}> Close </Button>
        </span>
      </div>
      
    </div>
  );

  return (
    <div>
      <Button type="button" onClick={handleOpen}>
        {props.title}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        disableBackdropClick = {true}
      >
        {body}
      </Modal>
    </div>
  );
}
