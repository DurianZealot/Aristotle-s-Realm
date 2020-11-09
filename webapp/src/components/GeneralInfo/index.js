import React from "react";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import "./styles.css";

class GeneralInfo extends React.Component {
  render() {
    const {
      name, // User's name
      iconPath, // Path to user's icon
      age, // User's age
      genrePref, // User's preferred genre of writing
      currId, // User's Id
    } = this.props;

    return (
      <div className="general-info-container blocks">
        <img className="icon" />{" "}
        {/* src={iconPath} Doesn't seem to be working EVENT LISTENER MAYBE? */}
        <div className="general-info">
          <h1 className="user_name black">{name}</h1>
          <div className="user-profile-edit">
            <Link className="" to={"/profile-settings"}>
              {/* Takes User to Profile Page */}
              <IconButton
                aria-label="Edit Profile"
                size="small"
                className="user-profile-edit-button"
              >
                edit
                <EditIcon />
              </IconButton>
            </Link>
          </div>
          <h3 className="age black">Age: {age}</h3>
          <h3 className="preferred-genre black">
            Preferred Genre: {genrePref}
          </h3>
        </div>
      </div>
    );
  }
}

export default GeneralInfo;
