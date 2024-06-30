const EditProfile = () => {
  return (
    <form className="form-edit">
      <div className="container">
        <div className="form-name">
          <label htmlFor="firstName" className="lbl">
            First Name
          </label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-name">
          <label htmlFor="lastName" className="lbl">Last Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-email">
          <label htmlFor="email">Email</label>
          <input type="email" className="email" />
        </div>
        <div className="form-bio">
          <lable htmlFor="bio">Bio</lable>
          <input type="text" className="bio" />
        </div>
        <div className="form-number">
          <label htmlFor="number">Contact Number</label>
          <input type="number" className="contact" />
        </div>
        <div className="form-location">
          <label className="location-label">City</label>
          <select name="city" className="location">
            <option value=" "> </option>
            <option value="Makkah">Makkah</option>
            <option value="Jeddah">Jeddah</option>
            <option value="Riyadh">Riyadh</option>
          </select>
          <label className="location-label"> State</label>
          <select name="state" className="location">
            <option value=" "> </option>
            <option value="Makkah">Makkah</option>
            <option value="Jeddah">Jeddah</option>
            <option value="Riyadh">Riyadh</option>
          </select>
        </div>
        <div className="form-password">
          <label>Passoword</label>
          <input type="password" className="password" />
        </div>
        <button>Save</button>
      </div>
    </form>
  );
};

export default EditProfile;
