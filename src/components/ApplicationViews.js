import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Home from './home/Home'
import OrderProductList from './home/OrderProductList'
import ProductList from './home/ProductList'
import OrdersItemList from './home/OrdersItemList'
import MyAccount from './home/MyAccount'
import Register from './auth/Register'
import Login from './auth/Login'
import ProductFormSell from './home/ProductFormSell'
import NewPaymentType from './home/NewPaymentType'
import CustomerEditForm from './home/CustomerEditForm'
import ProductDetail from './home/ProductDetail'
import { isAuthenticated } from './helpers/simpleAuth'
import ProductTypeList from './home/ProductTypeList'
import ReportsList from './home/ReportsList'
import OrdersOpenList from './home/OrdersOpenList'
import Search from "./home/Search";
import OrderCompletion from './home/OrderCompletion'


export default function ApplicationViews() {
  return (
    <>
      <Route
        exact
        path="/"
        render={props => {
          return <Home {...props} />;
        }}
      />
      <Route
        path="/orderproduct"
        render={props => {
          if (isAuthenticated()) {
            return <OrderProductList {...props} />;
          }
          return <Redirect to="/login" />;
        }}
      />
      <Route
        path="/myproducts"
        render={props => {
          if (isAuthenticated()) {
            return <ProductList {...props} />;
          }
          return <Redirect to="/login" />;
        }}
      />
      <Route
        path="/products/:productId(\d+)"
        render={props => {
          if (isAuthenticated()) {
            return <ProductDetail {...props} />;
          }
          return <Redirect to="/login" />;
        }}
      />

      <Route path="/reports" render={props=> {
        if (isAuthenticated()){
          return <ReportsList {...props} />
        }
          return <Redirect to="/login" />
      }}/>

      <Route path="/reports/incomplete-orders" exact render={props=> {
        if (isAuthenticated()){
          return <OrdersOpenList {...props} />
        }
          return <Redirect to="/login" />
      }}/>

      <Route path="/cart" exact render={props=> {
        if (isAuthenticated()){
          return <OrdersItemList {...props} />
        }
          return <Redirect to="/login" />
      }}/>

      <Route path="/orders/:orderId(\d+)/complete" render={props=> {
        if (isAuthenticated()){
          return <OrderCompletion orderId={parseInt(props.match.params.orderId)} {...props} />
        }
        return <Redirect to="/login" />
      }}/>
           {/* path to customer profile */}
           <Route path="/myaccount" render={props=> {
                    if (isAuthenticated()){
               return <MyAccount {...props} />
                    }
                    return <Redirect to="/login" />
           }}/>
            <Route path="/customers/:customerId(\d+)/edit" render={props => {
                 if (isAuthenticated()){
            return <CustomerEditForm {...props} />
                 }
                 return <Redirect to="/login" />
            }}
            />
           
           <Route path="/register" render={props => {
               return <Register {...props} />
           }}/>
           <Route path="/login" render={props => {
               return <Login {...props} />
           }}/>
           <Route path="/sell" render={props => {
                if (isAuthenticated()){
               return <ProductFormSell {...props} />
                }
                return <Redirect to="/login" />
           }}/>
           <Route path="/paymenttype/new" render={props => {
               if (isAuthenticated()){
               return <NewPaymentType {...props} />
               }
                return <Redirect to="/login" />
               
           }}/>
           <Route path="/category/:productTypeId" render={props => {
              //  if (isAuthenticated()){
                return <ProductTypeList {...props} />
              //  }
              //  return <Redirect to="/login" />
           }} />
       
      <Route
        path="/search"
        render={props => {
          if (isAuthenticated()) {
            return <Search {...props} />;
          }
          return <Redirect to="/login" />;
        }}
      />
    </>
  );
}
