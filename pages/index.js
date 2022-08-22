import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Button, Input, Col, InputGroup, Form } from "reactstrap";
import { ITEM_LIST } from "data/items";
import { useState, useEffect } from "react";

export default function Home() {
  const [_learnq, setLearnq] = useState([]);
  useEffect(() => {
    var _learnq = window._learnq || [];
    _learnq.push([
      "identify",
      {
        // Change the line below to dynamically print the user's email.
        $email: "doanthan@gmail.com",
        george: "George",
        test: "Washington",
      },
    ]);
    console.log(window._learnq);
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    // console.log(event.currentTarget.elements.email.value);
    console.log(_learnq);
    _learnq.push([
      "identify",
      {
        // Change the line below to dynamically print the user's email.
        $email: event.currentTarget.elements.email.value,
        george: "George",
        test: "Washington",
      },
    ]);
  }
  return <>Hello world!</>;
}
