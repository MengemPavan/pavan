import React, { useState } from 'react';
import "./index.css"
const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    doctor: '',
    department: '',
    message: '',
  });
 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  // Sample data for dropdowns
  const genders = ['Male', 'Female', 'Other'];
  const doctors = ['Dr. Smith', 'Dr. Johnson', 'Dr. Williams'];
  const departments = ['Cardiology', 'Neurology', 'Orthopedics'];

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />

          
      <select name="gender" value={formData.gender} onChange={handleChange} required>
        <option value="">Select Gender</option>
        {genders.map((gender) => (
          <option key={gender} value={gender}>{gender}</option>
        ))}
      </select>

          <input
        type="text"
       name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />

       <input
        type="text"
       name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone Number"
        required
      />


      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />

      <input
        type="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
      />

      <select name="doctor" value={formData.doctor} onChange={handleChange} required>
        <option value="">Select Doctor</option>
        {doctors.map((doctor) => (
          <option key={doctor} value={doctor}>{doctor}</option>
        ))}
      </select>

      <select name="department" value={formData.department} onChange={handleChange} required>
        <option value="">Select Department</option>
        {departments.map((dept) => (
          <option key={dept} value={dept}>{dept}</option>
        ))}
      </select>
     <textarea

  name="message"
  onChange={handleChange}
  value={formData.message}
  placeholder="Message"
  cols="30"
  rows="5"
/>

      <button type="submit">Submit</button>
    </form>
  );
};

export default AppointmentForm;
