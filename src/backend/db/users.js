import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePicture: "assets/alice.jpg",
  },
  {
    _id: uuid(),
    firstName: "Vinla",
    lastName: "Rose",
    username: "vinlarose",
    password: "vinlarose",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePicture: "assets/Veronica.jpg",
  },
  {
    _id: uuid(),
    firstName: "Alex",
    lastName: "Williams",
    username: "alexwilliams",
    password: "alexwilliams",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePicture: "assets/David.jpg",
  },
];
