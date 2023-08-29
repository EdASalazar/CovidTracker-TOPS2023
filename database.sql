CREATE TABLE FormProvider (
    id SERIAL PRIMARY KEY,
    org_name VARCHAR(255) NOT NULL,
    contact_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    site_origin VARCHAR(255) NOT NULL,
    home_link VARCHAR(255) NOT NULL,
    positive_test_link VARCHAR(255) NOT NULL,
    negative_test_link VARCHAR(255) NOT NULL,
    more_info_link VARCHAR(255) NOT NULL,
    logo VARCHAR(255) NOT NULL,
    cover_photo VARCHAR(255) NOT NULL,
    custom_message TEXT NOT NULL,
    social_sharing_message TEXT NOT NULL,
    color_theme VARCHAR(50) NOT NULL
);

CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    test_result VARCHAR(255),
    test_taken DATE,
    test_date DATE,
    zipcode VARCHAR(20),
    symptoms VARCHAR(255),
    sex VARCHAR(20),
    race VARCHAR(255),
    ethnicity VARCHAR(255),
    reminder VARCHAR(255),
    first_name VARCHAR(255),
    middle_initial VARCHAR(5),
    last_name VARCHAR(255),
    street_address VARCHAR(255),
    city VARCHAR(255),
    state VARCHAR(255),
    email VARCHAR(255),
    phone_number VARCHAR(20)
);