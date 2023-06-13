import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "My furry and fiery friend.",
    photo: "https://images.unsplash.com/photo-1673911710431-c01181dc7df0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFjZWJvb2slMjBwaWN0dXJlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: "2023-06-12T11:52:38+05:30",
    updatedAt: "2023-06-12T11:52:38+05:30",
  },
  {
    _id: uuid(),
    content:
      "DELIGHT",
    photo: "https://images.unsplash.com/photo-1668967449138-a4bcfda2d735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9zZSUyMHBpY3R1cmVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    username: "vinlarose",
    createdAt: "2023-05-13T11:52:38+05:30",
    updatedAt: "2023-05-13T11:52:38+05:30",
  },
  {
    _id: uuid(),
    content:
      "The road not taken",
    photo: "https://images.unsplash.com/photo-1665651369965-ba2264498ae8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGhlJTIwcm9hZCUyMG5vdCUyMHRha2VufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    username: "vinlarose",
    createdAt: "2022-06-13T11:52:38+05:30",
    updatedAt: "2022-06-13T11:52:38+05:30",
  },
  {
    _id: uuid(),
    content:
      
"🏔️ Just conquered my first trek and I'm on cloud nine! 🎉 The breathtaking views, the adrenaline rush, and the incredible camaraderie made it an unforgettable adventure. Can't wait to hit the trails again! 🌲🥾 #FirstTrekFeeling #NatureLover #TrekkingAdventures",
    photo: "https://plus.unsplash.com/premium_photo-1664353833827-5687c58b033b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGlraW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "alexwilliams",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
