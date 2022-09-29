import React, {useState, useEffect} from "react";

const Home = () => {
  const [userName, setUserName] = useState('');
  const [show, setShow] = useState(false);

  const userHomePage = async () => {
    try {
      const res = await fetch("/getData", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      setUserName(data.name);
      setShow(true);

      
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    userHomePage();
  }, []);
  return (
    <>
      <div className="home-page">
        <div className="home-div">
          <p class="pt-5">WELCOME</p>
          <h1>{userName}</h1>
          {show ? <h2>Happy to see you back</h2> : <h1>We Are the MERN Developer</h1>}
        </div>
      </div>
    </>
  );
};

export default Home;
