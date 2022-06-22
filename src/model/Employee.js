class EmployeeModel {
  constructor(firstName, lastName, dob, designation, experience, profilePhoto) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
    this.designation = designation;
    this.experience = experience;
    this.profilePhoto = profilePhoto;
  }

  getEmployee() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      dob: this.dob,
      designation: this.designation,
      experience: this.experience,
      profilePhoto: this.profilePhoto,
    };
  }
}

export default EmployeeModel;
