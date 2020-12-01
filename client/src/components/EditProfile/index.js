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

  componentDidMount() {
    this.setState(
      {
        // user: getUserInfo(this.props.appState.currID),
        user: getUserInfo(window.sessionStorage.getItem("currentUser")),
        userId: window.sessionStorage.getItem("currentUser"),
        username: this.state.user.username,
        firstName: this.state.user.firstName,
        lastName: this.state.user.lastName,
        age: this.state.user.age,
        genrePref: this.state.user.genrePref,
      },
      () => {
        console.log("user gotten is " + this.state.user);
        console.log(
          "userId according to currId in appState: ",
          this.props.appState.currId
        );
        console.log("userId according to sessionStorage: ", this.state.userId);
      }
    );
  }

  render() {
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
}

export default EditProfile;
