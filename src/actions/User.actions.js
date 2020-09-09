import { GET_CURRENT_USER } from "../@types/actionTypes";

const getCurrentUser = () => ({ type: "GET_CURRENT_USER", payload: currentUser()});

const currentUser = ()=>{
  return{
    id: 1,
    username: "viet.do97",
    email: "vietdqhcmute@gmail.com",
    avatarUrl: "https://scontent.fsgn5-1.fna.fbcdn.net/v/t1.0-9/83067209_2503666736575500_2763457244728131584_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=BAM-Lydpw84AX_XeAa3&_nc_ht=scontent.fsgn5-1.fna&oh=405ec498b6338e7905cd22b101b60e85&oe=5F609B83",
  }
}

export { getCurrentUser };
