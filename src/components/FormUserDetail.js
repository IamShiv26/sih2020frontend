import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import FormGroup from '@material-ui/core/FormGroup';
import DatePicker from 'material-ui/DatePicker';
import Grid from '@material-ui/core/Grid'


export class FormUserDetails extends React.Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider >
        <React.Fragment>
            <AppBar title="Personal Details" />
            <Grid container spacing={1}>
            
        {/* <div> */}
        <Grid item xs={12}><label>NAME</label></Grid>
        <Grid item xs={12} sm={6} md={4}>
            <TextField
              hintText="Enter title"
              floatingLabelText="Title"
              onChange={handleChange('salutation')}
              defaultValue={values.salutation}
            />
            </Grid>
            {/* <br /> */}
            <Grid item xs={12} sm={6} md={4}>
            <TextField
              hintText="Enter Your First Name"
              floatingLabelText="First Name"
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
            />
            </Grid>
            {/* <br /> */}
            <Grid item xs={12} sm={6} md={4}>
            <TextField
              hintText="Enter Your Last Name"
              floatingLabelText="Last Name"
              onChange={handleChange('lastName')}
              defaultValue={values.lastName}
            />
            </Grid>
            </Grid>
            <Grid container spacing={1} justify="center">
            <Grid item xs={12}><label>FATHER'S NAME</label></Grid>
            <Grid item xs={12} sm={6} md={4}>
            <TextField
              hintText="Enter Father's First Name"
              floatingLabelText="First Name"
              onChange={handleChange('fathersFirstName')}
              defaultValue={values.fathersFirstName}
            />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <TextField
              hintText="Enter Father's Last Name"
              floatingLabelText="Last Name"
              onChange={handleChange('fathersLastName')}
              defaultValue={values.fathersLastName}
            />
            </Grid>
            </Grid>
            <Grid container spacing={1} justify="center">
            <Grid item xs={12}><label>MOTHER'S NAME</label></Grid>
            <Grid item xs={12} sm={6} md={4}>
            <TextField
              hintText="Enter Mother's First Name"
              floatingLabelText="First Name"
              onChange={handleChange('mothersFirstName')}
              defaultValue={values.mothersFirstName}
            />
            </Grid>
            {/* <br /> */}
            <Grid item xs={12} sm={6} md={4}>
            <TextField
              hintText="Enter Mother's Last Name"
              floatingLabelText="Last Name"
              onChange={handleChange('mothersLastName')}
              defaultValue={values.mothersLastName}
            />
            </Grid>
            </Grid>
            <Grid container spacing={1} justify="center">
            <Grid item xs={12}><label>DATE OF BIRTH</label></Grid>
            {/* <DatePicker hintText="Open to Year" onChange={handleDateChange('dob')} defaultDate = {values.dob}/> */}
            <Grid item xs={12} sm={6} md={4}>
            <TextField
              hintText="Enter Date"
              floatingLabelText="Date"
              onChange={handleChange('dob')}
              defaultValue={values.dob}
            />
            </Grid>
            </Grid>
            <Grid container spacing={1} justify="center">
            <Grid item xs={12}><label>ADDRESS</label></Grid>
            {/* <DatePicker hintText="Open to Year" onChange={handleDateChange('dob')} defaultDate = {values.dob}/> */}
            <Grid item xs={12}>
            <TextField
              hintText="Enter Street Address1"
              floatingLabelText="Street Address1"
              onChange={handleChange('streetaddress')}
              defaultValue={values.streetaddress}
            />
            </Grid>
            {/* <br /> */}
            <Grid item xs={12} >
            <TextField
              hintText="Enter Street Address2"
              floatingLabelText="Steet Address2"
              onChange={handleChange('streetaddress2')}
              defaultValue={values.streetaddress2}
            />
            </Grid>
            {/* <br /> */}
            <Grid item xs={12} sm={6} md={6}>
            <TextField
              hintText="Enter District"
              floatingLabelText="District"
              onChange={handleChange('district')}
              defaultValue={values.district}
            />
            </Grid>
            {/* <br /> */}
            <Grid item xs={12} sm={6} md={6}>
            <TextField
              hintText="Enter State"
              floatingLabelText="State"
              onChange={handleChange('state')}
              defaultValue={values.state}
            />
            </Grid>
            {/* <br /> */}
            <Grid item xs={12} sm={6} md={4}>
            <TextField
              hintText="Enter Zipcode"
              floatingLabelText="Zipcode"
              onChange={handleChange('zipcode')}
              defaultValue={values.zipcode}
            />
            </Grid>
            </Grid>
            <Grid container spacing={1} justify="center">
            <Grid item xs={12}><label>EMAIL</label></Grid>
            <Grid item xs={12} sm={6} md={4}>
            <TextField
              hintText="Enter Your Email"
              floatingLabelText="Email"
              onChange={handleChange('email')}
              defaultValue={values.email}
            />
            </Grid>
            </Grid>

            <Grid container spacing={1} justify="center">
            <Grid item xs={12}><label>MOBILE NUMBER</label></Grid>
            <Grid item xs={12} sm={6} md={4}>
            <TextField
              hintText="Enter Your Mobile number"
              floatingLabelText="Mobile Number"
              onChange={handleChange('phno')}
              defaultValue={values.phno}
            />
            </Grid>
            </Grid>
            
            <br />
            <RaisedButton
              label ="Continue"
              primary = {true}
              variant="contained"
              style = {styles.button}
              onClick={this.continue}
            />
         
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
	button:{
		margin : 15
	}
}

export default FormUserDetails;