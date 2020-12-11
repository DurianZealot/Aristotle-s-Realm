import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button, Input} from '@material-ui/core'
import Modal from '@material-ui/core/Modal';
import {CssTextField} from '../CssTextField/CssTextField'
import { createNewChapter } from '../../actions/story';
import {updateProposalStatus} from '../../actions/proposal'

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
  var {proposalId, chapter, content, proposalSourceId} = props


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

  const acceptOrReject = (action) => {
    var answer
    if (action == 'ACCEPT'){
      answer = window.confirm('Are you sure you are going to accept this proposal?')
      if (answer){
        window.alert('You accept this proposal successfully')
        handleClose()
      }
    }
    else if (action == 'REJECT'){
      answer = window.confirm('Are you sure you are going to reject this proposal?')
      if (answer){
        window.alert('You reject this proposal successfully')
        handleClose()
      }
    }
  }

  const closeBtn = () => {
    return(
    <Button
            color="primary"
            style={{ display: "flex" }}
            onClick={() => onClickButton("close", modified)}>close</Button>
    );
  }

  const saveChangesBtn = () => {
    return (
      <Button
          color="primary"
          style={{ display: "flex" }}
          onClick={() => onClickButton("save", modified)}>Save Changes</Button>
    )
  }

  const deleteBtn = () => {
    return (
      <Button
            color="primary"
            style={{ display: "flex" }}
            onClick={() => onClickButton("delete", modified)}>Delete</Button>
    )
  }

  const acceptOrRejectBtn = (action) => {
    return(
      <Button
            color="primary"
            style={{ display: "flex" }}
            onClick={() => acceptOrReject(action)}>{action}</Button>
    )
  }

  

  const actionsAvailable = (viewFrom, proposalStatus) => {
    // if the propsal is viewd by the user that created the story that the proposal is proposed to,
    // only ACCEPT, REJECT, CLOSE are available for choosing
    // if the proposal is viewd by the user that created the proposal,
    // only SAVE CHANGES, DELETE, CLOSE are available for choosing

    console.log("View from ", viewFrom)
    console.log("Status ", proposalStatus)

    if(viewFrom == 'proposal_writter'){
      // if the status is ACCEPTED, the user can only CLOSE the modal
      if(proposalStatus == 'Accepted' || proposalStatus == 'accepted'){
        return (
          <span style={{display: "flex",justifyContent: "space-around",width: "100%"}}>
            {closeBtn()}
          </span>
        )
      }
      // if the status is REJECTED, the user can only CLOSE the modal / DELETE the proposal
      else if (proposalStatus == 'Rejected' || proposalStatus == 'rejected' ){
        return (
          <span style={{display: "flex",justifyContent: "space-around",width: "100%"}}>
            {deleteBtn()}
            {closeBtn()}
          </span>)
      }
      // if status is PENDING, the user can SAVE CHANGES / DELETE proposal or CLOSE the modal
      else if (proposalStatus == 'Pending' || proposalStatus == 'pending'){
        return (
          <span style={{display: "flex",justifyContent: "space-around",width: "100%"}}>
            {saveChangesBtn()}
            {deleteBtn()}
            {closeBtn()}
          </span>)
      }
      
    }
    else if (viewFrom == 'original_author'){
      // if the status is ACCEPTED, the user can only CLOSE the modal / REJECT the proposal
      if(proposalStatus == 'Accepted' || proposalStatus == 'accepted'){
        return (
          <span style={{display: "flex",justifyContent: "space-around",width: "100%"}}>
            {acceptOrRejectBtn('REJECT')}
            {closeBtn()}
          </span>
        )
      }
      // if the status is REJECTED, the user can only CLOSE the modal / DELETE / ACCEPT the proposal
      else if (proposalStatus == 'Rejected' || proposalStatus == 'rejected'){
        return (
          <span style={{display: "flex",justifyContent: "space-around",width: "100%"}}>
            {acceptOrRejectBtn('ACCEPT')}
            {deleteBtn()}
            {closeBtn()}
          </span>)
      }
      // if status is PENDING, the user can  ACCEPT / REJECT proposal or CLOSE the modal
      else if (proposalStatus == 'Pending' || proposalStatus == 'pending'){
        return (
          <span style={{display: "flex",justifyContent: "space-around",width: "100%"}}>
            {acceptOrRejectBtn('ACCEPT')}
            {acceptOrRejectBtn('REJECT')}
            {closeBtn()}
          </span>)
      }

    }
  };
  // ONLY Proposal writters can modify proposals when the proposals are pending
  const disableChanges = (props.status == 'Pending' && props.viewFrom == 'proposal_writter');
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
            <Input disabled={!disableChanges}style={{fontSize:"x-large"}} defaultValue={props.chapter} onChange={handleChange}></Input>
          </span>
        </span>
        <span style={{display:"flex", marginTop:'2%'}}>
          Proposal Content:  
        </span>
        <CssTextField disabled={!disableChanges} style={{width: "100%", marginTop:'2%'}} variant='outlined' multiline rows={5} rowsMax={10} defaultValue={props.content} onChange={handleChange}></CssTextField>
        {actionsAvailable(props.viewFrom, props.status)}
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
        // disableBackdropClick = {true}
      >
        {body}
      </Modal>
    </div>
  );
}
