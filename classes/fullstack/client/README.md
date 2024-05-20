# Project Overview:
Develop an admin dashboard using React, TypeScript, and Context API. The dashboard will allow the admin to manage users through a set of specific pages. Authentication is required to access the admin functionalities.

## Recommended
Start by making a documentation explaining the architecture and key components.

## Functional Requirements:
- Login Page:
Implement a login form with username and password fields.
Validate input and show error messages for invalid inputs.
Use Context API to manage authentication state.
- Dashboard Layout:
Create a main layout that includes a navigation bar and a content area.
The navigation bar should have links to "View Users", "Create User", and "Edit User" & Logout if admin is logged in.
- Implement route protection to ensure that pages are not accessible without authentication.
- View Users Page:
Display a list of users with basic information such as name, email, and role.
Include options to edit or delete each user (this can lead to the Edit User page with pre-filled data).
- Create User Page:
Provide a form to enter user details including name, email, and role.
Include form validations and display appropriate error messages for invalid inputs.
After submission, add the new user to the users list.
- Edit User Page:
Load the selected user’s data into a form where it can be edited.
Validate modified data and show error messages as needed.
Update the user list upon submission.
- Technical Requirements:
  - Use TypeScript for type-safety and better code structuring.
  - Utilize React Router for routing between different pages.
  - Implement Context API to manage global state like user authentication and user data.
  - (Optional) Use Tailwind for css (we did not learn but its a great skill to have!)
- Stretch Goals:
  - Add sorting and filtering capabilities to the View Users page.
- Deliverables:
  - Complete source code of the project.

