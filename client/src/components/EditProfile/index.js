import React from "react";
import SideBar from "./../SideBar";
import { getUserInfo } from "./../../actions/user-profile";
import { handleInputChange, handleSave } from "./../../actions/edit-profile";
import { TextField, Button } from "@material-ui/core";
import "./styles.css";
import placeholder from "./static/profile-icon-placeholder.jpg";

class EditProfile extends React.Component {
  constructor(props) {
    // When the component is created
    super(props);
    this.state = {
      user: {
        userId: "",
        username: "",
        firstName: "",
        lastName: "",
        iconPath: "",
        age: "",
        genrePref: "",

        joinDate: "",
        followerCount: "",
        followingCount: "",
        approvalRate: "",

        proposalAcceptNum: "",
        worksBegunNum: "",
        lastContributionDate: "",
      },
      userId: "",
      username: "",
      firstName: "",
      lastName: "",
      age: "",
      genrePref: "",
    };
  }

  componentWillMount() {
    this._asyncRequestUserinfo = getUserInfo(window.sessionStorage.getItem("currentUser")).then(async(userInfo) => {
      this._asyncRequestUserinfo = null;
      console.log('Loading', userInfo)
      this.setState({user: userInfo})
      this.setState({userId: window.sessionStorage.getItem("currentUser"), username:userInfo.username, firstName:userInfo.firstName, lastName:userInfo.lastName, age: userInfo.age, genrePref: userInfo.genrePref})
    }).catch(error => console.log('Fail to load user info'))
  }
  componentWillUnmount() {
    if (this._asyncRequestUserinfo) {
      this._asyncRequestUserinfo.cancel();
    }
  }

  render() {
    if(this.state.userId !== ""){
      return (
        <div className="edit-profile">
          <SideBar appState={this.props.appState} />
          <div className="edit-profile-wrapper">
            <div className="edit-profile-main-wrapper">
              <div className="edit-profile-header">
                <img className="edit-profile-avatar" src={placeholder} />
                <div className="edit-profile-header-username">
                  {this.state.user.username}
                </div>
              </div>
              <div className="edit-profile-body">
                <div className="edit-profile-body-settings">
                  <div className="edit-profile-settings-form-wrapper">
                    <form className="edit-profile-settings-form">
                      <table>
                        <tbody>
                          <tr>
                            <td className="edit-profile-settings-td">
                              Username:
                            </td>
                            <td className="edit-profile-settings-td">
                              <TextField
                                name="username"
                                variant="outlined"
                                label="Username"
                                size="small"
                                value={this.state.username}
                                placeholder="Username"
                                fullWidth
                                InputLabelProps={{ shrink: true }}
                                onChange={(event) =>
                                  handleInputChange(event, this)
                                }
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className="edit-profile-settings-td">
                              First Name:
                            </td>
                            <td className="edit-profile-settings-td">
                              <TextField
                                name="firstName"
                                variant="outlined"
                                label="First Name"
                                size="small"
                                value={this.state.firstName}
                                placeholder="First Name"
                                fullWidth
                                InputLabelProps={{ shrink: true }}
                                onChange={(event) =>
                                  handleInputChange(event, this)
                                }
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className="edit-profile-settings-td">
                              Last Name:
                            </td>
                            <td className="edit-profile-settings-td">
                              <TextField
                                name="lastName"
                                variant="outlined"
                                label="LastName"
                                size="small"
                                value={this.state.lastName}
                                placeholder="Last Name"
                                fullWidth
                                InputLabelProps={{ shrink: true }}
                                onChange={(event) =>
                                  handleInputChange(event, this)
                                }
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className="edit-profile-settings-td">Age:</td>
                            <td className="edit-profile-settings-td">
                              <TextField
                                name="age"
                                variant="outlined"
                                label="Age"
                                size="small"
                                value={this.state.age}
                                placeholder="Age"
                                fullWidth
                                InputLabelProps={{ shrink: true }}
                                onChange={(event) =>
                                  handleInputChange(event, this)
                                }
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className="edit-profile-settings-td">
                              Preferred Genre:
                            </td>
                            <td className="edit-profile-settings-td">
                              <TextField
                                name="genrePref"
                                variant="outlined"
                                label="Preferred Genre"
                                size="small"
                                value={this.state.genrePref}
                                placeholder="Preferred Genre"
                                fullWidth
                                InputLabelProps={{ shrink: true }}
                                onChange={(event) =>
                                  handleInputChange(event, this)
                                }
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="edit-profile-save">
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => handleSave(this)}
                        >
                          Save
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    else{
      return <div>Loading</div>
    }
    
  }
}

export default EditProfile;
