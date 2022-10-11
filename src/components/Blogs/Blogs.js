import React from "react";

const Blogs = () => {
  return (
    <div className=" my-5 py-5 px-2 mx-5 bg-white pt-3 border border-dark">
      <div className="m-3">
        <h3 className="fw-bold">What is the purpose of React Router?</h3>
        <p className="mt-4">
          Routing is a process in which a user is directed to different pages
          based on their action or request. ReactJS Router is mainly used for
          developing Single Page Web Applications. React Router is used to
          define multiple routes in the application. When a user types a
          specific URL into the browser, and if this URL path matches any
          'route' inside the router file, the user will be redirected to that
          particular route. React Router is a standard library system built on
          top of the React and used to create routing in the React application
          using React Router Package. It provides the synchronous URL on the
          browser with data that will be displayed on the web page. It maintains
          the standard structure and behavior of the application and mainly used
          for developing single page web applications.
        </p>
      </div>
      <div className="m-3">
        <h3 className="fw-bold">How does Context API work?</h3>
        <p className="mt-4">
          React.createContext() is all you need. It returns a consumer and a
          provider. Provider is a component that as it's names suggests provides
          the state to its children. It will hold the "store" and be the parent
          of all the components that might need that store. Consumer as it so
          happens is a component that consumes and uses the state.
        </p>
      </div>
      <div className="m-3">
        <h3 className="fw-bold">Briefly Explain useRef hook.</h3>
        <p className="mt-4">
          <li>The useRef Hook allows you to persist values between renders.</li>
          <li>
            It can be used to store a mutable value that does not cause a
            re-render when updated.
          </li>
          <li>It can be used to access a DOM element directly.</li>
          <li>
           useRef only returns one item. It returns an Object called current.
          </li>
        </p>
      </div>
    </div>
  );
};

export default Blogs;
