import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button, Input, TextField} from '@material-ui/core'
import Modal from '@material-ui/core/Modal';
import {CssTextField} from '../CssTextField/CssTextField'
import { postProposal } from '../../actions/proposal.js'
import "./styles.css";

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

export default function ProposalModal(props) {
  

  var state = {
    userId: window.sessionStorage.getItem('currentUser'),
    proposalContent: '',
    chapterLength: props.storyChapterNums,
    chapterIndex: 1,
    storyID: props.storyId,
    storyTitle: props.storyTitle
  }

  var chapterSelection = []
  console.log('we have ', state.chapterLength)
  for(let num = 1; num <= state.chapterLength + 1; num++){
    chapterSelection.push(num)
  }
  

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  var modified = false;

  const handleChange = (event) => {
    modified = true
    console.log('Current State', state)
    state[event.target.name] = event.target.value
    console.log('Current State After Update', state)
    
  }
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onClickButton = (action) => {
    var answer
    if (action == "submit"){
      if(modified){
        answer = window.confirm('Are you going to submit/update this proposal?')
        if(answer){
          // SERVER CALL FUNCTION
          postProposal(state.storyID, state.storyTitle, state.chapterIndex, true, state.proposalContent, state.userId)
            .then(handleClose())
            .catch(error => {alert('Fail to upload your proposal to the database'); })
        }
      }
      else{
        alert('There is nothing to submit. Closing the window.')
        handleClose()
      }
    }
    else if (action == 'close'){
      if(modified){
        answer = window.confirm('Are you going to close the window and discard everything?')
        if (answer){
          handleClose()
        }
      }
      else{
        handleClose()
      }
    }
  }

  const closeBtn = () => {
    return(
      <Button
            color="primary"
            style={{ display: "flex" }}
            onClick={() => onClickButton("close", modified)}>Close</Button>
    )
  }

  const submitBtn = () => {
    return (
      <Button
          color="primary"
          style={{ display: "flex" }}
          onClick={() => onClickButton("submit", modified)}>Save Changes</Button>
    )
  }

  // ONLY Proposal writters can modify proposals when the proposals are pending
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div>
        <span style={{display:"flex"}}>
          <span style={{display:"inline-flex"}}>
            New Proposal For:
          </span>
          <span classNamestyle={{display:"inline-flex"}}>
            {state.storyTitle}
          </span>
        </span>
        <span style={{marginTop:'5%'}}>
          <span>
            Chapter Index:  
          </span>
          <select style={{width:"20%"}} name="chapterIndex" onChange={handleChange}>
            {chapterSelection.map((chapterNum) => {return <option value={chapterNum}>{chapterNum}</option>})}
          </select>
        </span>
        <span style={{display:"flex", marginTop:'2%'}}>
          Proposal Content:  
        </span>
        <CssTextField style={{width: "100%", marginTop:'2%'}} variant='outlined' multiline rows={5} rowsMax={10} name='proposalContent' onChange={handleChange}></CssTextField>
        <span style={{display: "flex",justifyContent: "space-around",width: "100%"}}>
          {submitBtn()}
          {closeBtn()}
        </span>
      </div>
      
    </div>
  );

  return (
    <div>
      <Button type="button" onClick={handleOpen} >
        Create new Proposal
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
