

interface UserType {
    img: string,
    _id: string,
    username: string
}

export interface StateType {
  user: UserType | null;
  isLoading: boolean;
  error: string;       
}

export type ActionType =
  | { type: "LOGIN_START" |  "LOGOUT" }
  | { type: "LOGIN_SUCCESS", payload: UserType}
  | { type: "LOGIN_FAIL", payload: string };


 const loginReducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isLoading: true,
        error: '',
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isLoading: false,
        error: '',
      };
    case "LOGIN_FAIL":
      return {
        user: null,
        isLoading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
        isLoading: false,
        error: ''
      };

    default:
      return state;
  }
};

export default loginReducer
