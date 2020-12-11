// Contains methods used in EditProfile Component

const log = console.log;

export const handleInputChange = (event, form) => {
  form.setState({
    [event.target.name]: event.target.value,
  });
};

export const handleSave = (form) => {
  const valid = valid_information(form) 
  console.log(window.sessionStorage.getItem('currentUser'))
  if (valid){
      const request = new Request("/api/edit", {
          method: "post",
          body: JSON.stringify(form.state),
          headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json"
          }
      });
  
      
      fetch(request)
          .then(res => {
              if (res.status === 200) {
                  alert("Successfully Updated User")
                  return res.json();
              }
          })
          .catch(error => {
              console.log(error);
              alert("Invalid Information. User info not updated")
          });
      
  } 
  
};
const valid_information = (form) => {
  if (
    (form.state.username == "") ||
    (form.state.firstName == "") ||
    (form.state.lastName == "") ||
    (form.state.age == "") ||
    (form.state.genrePref == "")
  ) {
    alert("Cannot leave empty fields!");
    return false
  } 
  return true

}