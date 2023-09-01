import React, { createContext, useState, useEffect } from "react";

const BUTTE_COUNTY_LOGO = "https://rouoteoqwehgnrgbeigu.supabase.co/storage/v1/object/public/images/563797ae-11e1-4959-92a1-bbf329840028.image"
const COVER_PHOTO_DEFAULT = "https://rouoteoqwehgnrgbeigu.supabase.co/storage/v1/object/public/images/52a55cbb-abeb-4dab-9c26-661ee0e9b5d6.image"

// Creates context to manage form state and functions
export const FormContext = createContext();

// Context provider component
export const FormProvider = ({ children }) => {
  const initialPartnerState = {
    org_name: "",
    contact_name: "",
    email: "",
    site_origin: "",
    home_link: "",
    positive_test_link: "",
    negative_test_link: "",
    more_info_link: "",
    logo: BUTTE_COUNTY_LOGO,
    cover_photo: COVER_PHOTO_DEFAULT,
    custom_message: "",
    social_sharing_message: "",
    color_theme: "classic",
  };

  const storedPartnerState = JSON.parse(
    localStorage.getItem("partnerFormState")
  );

  //Partners
  const [newSite, setNewSite] = useState(
    storedPartnerState || initialPartnerState
  );

  useEffect(() => {
    localStorage.setItem("partnerFormState", JSON.stringify(newSite));
  }, [newSite]);
  
  const handlePartnerChange = (event) => {
    setNewSite({
      ...newSite,
      [event.target.name]: event.target.value,
    });
  };

  const handleReviewSubmit = (event) => {
    event.preventDefault();

    const data = JSON.stringify(newSite);

    return fetch("/partners", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    })
      .then((res) => res.json())
      .then((newPartner) => {
        console.log("New partner created: ", newPartner);
        setNewSite(initialPartnerState);
        return true;
      })
      .catch((err) => {
        console.error("Error creating new partner: ", err);
        throw err;
      });
  };

  //Users
  const [newUser, setNewUser] = useState({
    test_result: "",
    test_taken: "",
    test_date: "",
    zipcode: "90027",
    symptoms: "",
    sex: "",
    race: "",
    ethnicity: "",
    reminder: "",
    first_name: "",
    middle_initial: "",
    last_name: "",
    street_address: "",
    city: "",
    state: "",
    email: "",
    phone_number: "123-456-7891",
  });

  const handleUserChange = (event) => {
    setNewUser({
      ...newUser,
      [event.target.name]: event.target.value,
    });
  };

  const handleUserSubmit = (event) => {
    event.preventDefault();

    const data = JSON.stringify(newUser);

    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    })
      .then((res) => res.json())
      .then((newUser) => {
        console.log("New user created: ", newUser);
      })
      .catch((err) => {
        console.error("Error creating new user: ", err);
      });
  };

  return (
    <FormContext.Provider
      value={{
        newSite,
        newUser,
        handlePartnerChange,
        handleReviewSubmit,
        handleUserChange,
        handleUserSubmit,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
