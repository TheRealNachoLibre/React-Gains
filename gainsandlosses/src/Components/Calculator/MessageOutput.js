import React, { useEffect, useState } from "react";
import { firestore } from "../.././firestore";

function MessageOutput(i) {
  useEffect(() => {
    fetchData();
  }, []);


  const [messages, setMessage] = useState([]);

  const fetchData = async () => {
    const data = await firestore.collection("messages").get();
    setMessage(data.docs.map((doc) => doc.data()));
  }

  return (

    <ul>
      {/*this works for mapping over EVERY item in the DB */}
      {messages.map((message) => (
        <li key={message}>
          {message.type} 
          {message.frequency} 
          {message.diet} 
          {message.supplements}
          </li>
    ))}
    </ul>
  );
}

export default MessageOutput;
