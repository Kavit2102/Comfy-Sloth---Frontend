import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";

import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  About,
  Products,
  AuthWrapper,
} from "./pages";
import Login from "./pages/LoginPage";
import SignUp from "./pages/SignUpPage";

function App() {
  const [User, setUser] = useState(false);

  return (
    <AuthWrapper>
      <Router>
        <Navbar User={User} setUser={setUser} />
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />

          {/* </Route> */}
          <Route exact path="/about" element={<About />} />

          {/* </Route> */}
          <Route exact path="/cart" element={<Cart User={User} />} />

          {/* </Route> */}
          <Route exact path="/products" element={<Products />} />

          {/* </Route> */}
          <Route exact path="/login" element={<Login setUser={setUser} />} />

          {/* </Route> */}
          <Route exact path="/signup" element={<SignUp />} />

          {/* </Route> */}
          <Route exact path="/products/:id" element={<SingleProduct />} />
          <Route exact path="/checkout" element={<Checkout User={User} />} />

          {/* </PrivateRoute> */}
          <Route path="*" element={<Error />} />

          {/* </Route> */}
        </Routes>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
