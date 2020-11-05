import React from "react";
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

/* Component for register form */
class RegisterForm extends React.Component {
    render() {
        const {
            firstName,
            lastName,
            username,
            password,
            birthday,
            handleInputChange,
            handleRegister,
        } = this.props;

        return (
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField
                        name="firstName"
                        variant="outlined"
                        label="First Name"
                        value={firstName}
                        onChange={handleInputChange}
                        required
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        name="lastName"
                        variant="outlined"
                        label="Last Name"
                        value={lastName}
                        onChange={handleInputChange}
                        required
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name="username"
                        variant="outlined"
                        label="Username"
                        value={username}
                        onChange={handleInputChange}
                        required
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name="password"
                        variant="outlined"
                        label="Password"
                        type="password"
                        value={password}
                        onChange={handleInputChange}
                        required
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name="birthday"
                        variant="outlined"
                        label="Birthday"
                        type="date"
                        value={birthday}
                        onChange={handleInputChange}
                        required
                        InputLabelProps={{
                            shrink: true,
                        }}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleRegister}
                        fullWidth
                    >
                        Register
                    </Button>
                </Grid>
            </Grid>
        );
    }
}

export default RegisterForm;
