import Card from "../UI/Card/card";
import classes from './usersList.module.css'

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.userName} ({user.age} Years old!)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
