import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unFollowAC} from "../../redux/users-reducer";
debugger
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
        // userId: state.users.id
    }
}
debugger
let mapDispatchToProps = (dispatch) => {
    return {
        followAC: (userId) => {
            dispatch(followAC (userId));
        },
        unFollowAC: (userId) => {
            dispatch(unFollowAC (userId));
        },
        setUsersAC: (users) => {
            dispatch(setUsersAC (users));
        }
    }
}
debugger
let usersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default usersContainer;