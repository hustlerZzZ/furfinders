# FurFinders

A platform to help pet owners reunite with their lost furry friends and connect kind-hearted individuals who find lost pets. Users can post photos and videos of **lost pets** or **found pets** to bring them back home.

---

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Post Lost Pets**: Easily upload photos/videos of lost pets along with descriptions.
- **Post Found Pets**: Share details of pets you found to help reunite them with their owners.
- **Search & Filter**: Search for lost or found pets using filters like location, pet type, or date.
- **Real-Time Updates**: Stay up-to-date with new posts using notifications.
- **Community-Driven**: Built to bring together a compassionate community of pet lovers.

---

## Tech Stack

- **Frontend**: React.js, TypeScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Validation**: Zod
- **Authentication**: JWT / OAuth
- **Storage**: Cloudinary (for images/videos)
- **Hosting**: Vercel (Frontend) & Render / Railway (Backend)

---

## Installation

Follow these steps to run the project locally:

### Prerequisites
- **Node.js** (v16 or above)
- **MongoDB** (local or cloud instance)
- **NPM/Yarn**

### Steps
1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/lost-found-pets.git
   cd lost-found-pets
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add the following:
   ```env
   MONGODB_URI="your-mongodb-connection-string"
   JWT_SECRET="your-jwt-secret"
   CLOUDINARY_API_KEY="your-cloudinary-key"
   CLOUDINARY_API_SECRET="your-cloudinary-secret"
   CLOUDINARY_CLOUD_NAME="your-cloudinary-cloud-name"
   ```

4. **Run the backend**:
   ```bash
   npm run server
   ```

5. **Run the frontend**:
   ```bash
   npm start
   ```

6. **Access the app**:
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Usage

1. **Post a Lost Pet**:
   - Upload the pet's image/video.
   - Add relevant details like name, location, breed, and date lost.

2. **Post a Found Pet**:
   - Share photos/videos of the found pet.
   - Add details about where and when you found the pet.

3. **Search and Filter**:
   - Use location filters or keywords to find lost or found pet posts.

4. **Contact Owners/Finders**:
   - Reach out to connect and help reunite pets with their families.

---

## Contributing

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature: XYZ"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgements

Special thanks to the community and every individual helping to bring pets back home!

---

### Connect
For any questions or feedback, feel free to reach out at **rishabpal2000@gmail.com**.
