import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./Header/Header";
import TabMenu from "./TabMenu/TabMenu";
import styles from "./styles.module.css";
import SignIn from "../../screens/users/SignIn/SignIn";
import SignUp from "../../screens/users/SignUp/SignUp";
import Cart from "../../screens/users/Cart/Cart";
import Category from "../../screens/users/Categories/Categories";
import CheckOut from "../../screens/users/CheckOut/CheckOut";
import Home from "../../screens/users/Home/Home";
import ItemDetail from "../../screens/users/ItemDetail/ItemDetail";
import Profile from "../../screens/users/Profile/Profile";
import Products from "../../screens/users/Products/Products"

export default function Admin(props) {
  const { pathname } = props.location;
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.body}>
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/cart" component={Cart} />
          <Route path="/category" component={Category} />
          <Route path="/products" component={Products} />
          <Route path="/profile" component={Profile} />
          <Route path="/check-out" component={CheckOut} />
          <Route path="/home" component={Home} />
          <Route path="/item-detail" component={ItemDetail} />
          <Redirect exact from="/" to="/home" />
          <Route render={()=> <h1>Sorry, this page is not found. Please check the URL again</h1>}/>
        </Switch>
      </div>

      <TabMenu pathname={pathname} />
    </div>
  );
}
