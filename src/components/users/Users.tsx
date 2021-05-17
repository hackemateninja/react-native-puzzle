// packages
import React from 'react';

//components
import Screen from '../screen/Screen';
import Card from './Card';
import Header from '../header/Header';

// styles
import {List} from './style';
import {ActivityIndicator} from 'react-native';

//state
import {connect} from "react-redux";
import {asyncGetUsers} from "../../state/thunks";
import { useSelector } from 'react-redux'

interface IItem {
  id: string;
  name: string;
  desc: string;
  image: string;
}

function UserComponent({navigation, getData}: any) {
  const [superHeroes, setSuperHeroes] = React.useState([]);
  
  const usersFromStoreHook = useSelector(state => state.userReducer.users)
  
  const handleGetHeroes = async () => {
    const response = await fetch(
      'https://akabab.github.io/superhero-api/api/all.json',
    );
    return await response.json();
  };

  React.useEffect(() => {
    getData()
  }, []);
  
  
  console.log('from hook: ',usersFromStoreHook)

  return (
    <Screen>
      <React.Suspense
        fallback={<ActivityIndicator size="large" color="#00ff00" />}>
        <Header
          navigation={navigation}
          actionLeft={() => navigation.openDrawer()}
          title="Users"
        />
        <List
          renderItem={Card}
          keyExtractor={(item: any) => item.id}
          data={superHeroes}
        />
      </React.Suspense>
    </Screen>
  );
}

const mapStateToProps = (state: object) => {
  const {userReducer} = state
  return userReducer.users
}
const mapDispatchToProps = (dispatch: any) => ({
  getData: () => dispatch(asyncGetUsers())
})
export default connect(mapStateToProps, mapDispatchToProps)(UserComponent)
