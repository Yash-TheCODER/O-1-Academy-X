# Hi, I'm Yash! 👋
I am a Full Stack web developer and competitve programmer.

# StudySphere [```live```](https://study-sphere-yash-rastogi-frontend.vercel.app/)

StudySphere is a fully functional ed-tech platform that enables users to create, consume, and rate educational content. The platform is built using the MERN stack, which includes ReactJS, NodeJS, MongoDB, and ExpressJS.

## StudySphere aims to provide:
* A seamless and interactive learning experience for students, making education more accessible and engaging.
* A platform for instructors to showcase their expertise and connect with learners across the globe.

## System Architecture

The StudySphere ed-tech platform consists of three main components: the front end, the back end, and the database. The platform follows a client-server architecture, with the front end serving as the client and the back end and database serving as the server.

### Front-end

The front end of the platform is built using ReactJS. ReactJS allows for the creation of dynamic and responsive user interfaces, which are critical for providing an engaging learning experience to the students. The front end communicates with the back end using RESTful API calls.

### Back-end

The back end of the platform is built using NodeJS and ExpressJS. The back end provides APIs for the front end to consume, which include functionalities such as user authentication, course creation, and course consumption. The back end also handles the logic for processing and storing the course content and user data.

### Database

The database for the platform is built using MongoDB, which is a NoSQL database that provides a flexible and scalable data storage solution. MongoDB allows for the storage of unstructured and semi-structured data. The database stores the course content, user data, and other relevant information related to the platform.


## Front-end

The front end of StudySphere has all the necessary pages that an ed-tech platform should have. Some of these pages are:

### For Students:
1. **Homepage:**
    - Brief introduction to the platform
    - Links to the course list and user details

2. **Course List:**
    - List of all available courses
    - Course descriptions
    - Course ratings
    - Option to add courses to wishlist or cart

3. **Wishlist:**
    - Display of courses added to the student's wishlist
    - Option to remove courses from the wishlist
    - Option to move courses from wishlist to cart

4. **Cart Checkout:**
    - Overview of courses in the cart
    - Payment options
    - Confirmation of course purchase

5. **Course Content:**
    - Detailed content for a particular course
    - Videos and other related materials
    - Progress tracking for the course

6. **User Details:**
    - Student's account details including name, email, etc.
    - Overview of enrolled courses
    - Links to edit account details

7. **User Edit Details:**
    - Form to edit account details like name, email, and password

8. **Progress Tracking:**
    - Track learning progress with detailed analytics and reports for students and instructors

### For Instructors:
1. **Dashboard:**
    - Overview of the instructor's courses
    - Ratings and feedback for each course

2. **Insights:**
    - Detailed insights into the instructor's courses
    - Number of views, clicks, and other relevant metrics

3. **Course Management Pages:**
    - Create, update, and delete courses
    - Manage course content and pricing

4. **View and Edit Profile Details:**
    - View and edit account details.

### For Admin:
1. **Dashboard:**
    - Overview of the platform's courses, instructors, and students

2. **Insights:**
    - Detailed insights into the platform's metrics
    - Number of registered users, courses, and revenue

3. **Instructor Management:**
    - Manage the platform's instructors
    - Account details, courses, and ratings

4. **Other Relevant Pages:**
    - Access to user management and course management pages

## Back-end

The back end of StudySphere provides a range of features and functionalities, including:

1. **User Authentication and Authorization:**
    - Students and instructors can sign up and log in using their email addresses and password
    - Supports OTP (One-Time Password) verification and forgot password functionality for added security

2. **Course Management:**
    - Instructors can create, read, update, and delete courses
    - Manage course content and media
    - Students can view and rate courses

3. **Payment Integration:**
    - Students can purchase and enroll in courses by completing the checkout flow
    - Razorpay integration for payment handling

4. **Cloud-based Media Management:**
    - StudySphere uses Cloudinary to store and manage all media content, including images, videos, and documents

5. **Markdown Formatting:**
    - Course content in document format is stored in Markdown format
    - Easier display and rendering on the front end

## Data Models and Database Schema

The back end of StudySphere uses a range of data models and database schemas to manage data, including:
1. **Student Schema:**
    - Includes fields such as name, email, password, and course details for each student.

2. **Instructor Schema:**
    - Includes fields such as name, email, password, and course details for each instructor.

3. **Course Schema:**
    - Includes fields such as course name, description, instructor details, and media content.

## API Design

The StudySphere platform's API is designed following the REST architectural style. The API is implemented using Node.js and Express.js. It uses JSON for data exchange and follows standard HTTP request methods such as GET, POST, PUT, and DELETE.

### Sample list of API endpoints and their functionalities:
1. **/api/auth/signup (POST)** - Create a new user (student or instructor) account.
2. **/api/auth/login (POST)** – Log in using existing credentials and generate a JWT token.
3. **/api/auth/verify-otp (POST)** - Verify the OTP sent to the user's registered email.
4. **/api/auth/forgot-password (POST)** - Send an email with a password reset link to the registered email.
5. **/api/courses (GET)** - Get a list of all available courses.
6. **/api/courses/:id (GET)** - Get details of a specific course by ID.
7. **/api/courses (POST)** - Create a new course.
8. **/api/courses/:id (PUT)** - Update an existing course by ID.
9. **/api/courses/:id (DELETE)** - Delete a course by ID.
10. **/api/courses/:id/rate (POST)** - Add a rating (out of 5) to a course.

### Sample API requests and responses:
1. **GET /api/courses: Get all courses**
   - Response: A list of all courses in the database

2. **GET /api/courses/:id: Get a single course by ID**
   - Response: The course with the specified ID

3. **POST /api/courses: Create a new course**
   - Request: The course details in the request body
   - Response: The newly created course

4. **PUT /api/courses/:id: Update an existing course by ID**
   - Request: The updated course details in the request body
   - Response: The updated course

5. **DELETE /api/courses/:id: Delete a course by ID**
   - Response: A success message indicating that the course has been deleted.

## Installation and Setup

This starter pack includes a basic setup for using **Tailwind CSS with React**. To start building your own components and styles, follow these steps:

1. Clone the repository to your local machine.
    ```sh
    git clone https://github.com/username/study-sphere.git
    ```

2. Install the required packages.
    ```sh
    npm install
    ```

3. Start the development server.
    ```sh
    npm run dev
    ```

4. Open the project in your browser at [http://localhost:3000](http://localhost:3000) to view your project.

## Contributing

Contributions are welcome! If you have any suggestions or find any issues, please feel free to open an issue or a pull request.

## Contact

- Email: yashykr2002@gmail.com
- LinkedIn: [Yash Kumar Rastogi](https://www.linkedin.com/in/yash-kumar-rastogi/)



