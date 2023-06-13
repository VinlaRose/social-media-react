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
    profilePicture: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW5pbWF0ZWQlMjBwcm9maWxlJTIwcGljdHVyZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    _id: uuid(),
    firstName: "Vinla",
    lastName: "Rose",
    username: "vinlarose",
    password: "vinlarose",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePicture: "https://images.unsplash.com/photo-1445052858312-134745f190f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdpcmwlMjBvbiUyMHRoZSUyMG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    _id: uuid(),
    firstName: "Alex",
    lastName: "Williams",
    username: "alexwilliams",
    password: "alexwilliams",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePicture: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YW5pbWF0ZWQlMjBwcm9maWxlJTIwcGljdHVyZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
];
