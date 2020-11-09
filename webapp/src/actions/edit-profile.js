// Contains methods used in EditProfile Component

const log = console.log;

export const handleInputChange = (event, form) => {
  form.setState({
    [event.target.name]: event.target.value,
  });
};

export const handleSave = (edit) => {
  if (
    (edit.state.username == "") |
    (edit.state.firstName == "") |
    (edit.state.lastName == "") |
    (edit.state.age == "") |
    (edit.state.genrePref == "")
  ) {
    alert("Cannot leave empty fields!");
  } else {
    alert("You've saved your new settings.");
  }
};
