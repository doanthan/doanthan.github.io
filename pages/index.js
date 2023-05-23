import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Button, Input, Col, InputGroup, Form } from "reactstrap";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {

  var _learnq = _learnq || [];

  const emails = ["doanthan@gmail.com", "doan.than@klaviyo.com"]



  const onSubmit = async () => {
    try {
      await axios.post(
        "https://a.klaviyo.com/client/events/?company_id=Pe5Xw6", {
        data: {
          type: "event",
          attributes: {
            profile: {
              email: "doanthan@gmail.com"
            },
            metric: {
              name: "WelcomeEmail"
            },
            properties: {
              type: "HELLO WORLD"
            }
          }
        }
      }
      );
    } catch (error) {
      console.log(error.message)
    }

    // emails.map(async (email) => {



    //   // await axios.post(
    //   //   "https://a.klaviyo.com/client/events/?company_id=Pe5Xw6", {
    //   //   "data": {
    //   //     "type": "event",
    //   //     "attributes": {
    //   //       "profile": {
    //   //         "email": email
    //   //       },
    //   //       "metric": {
    //   //         "name": "WelcomeEmail"
    //   //       },
    //   //       "properties": {
    //   //         "type": "HELLO WORLD"
    //   //       }
    //   //     }
    //   //   }
    //   // }
    //   // );
    // })
  }
  return <button onClick={onSubmit}>Hello world!</button>;
}
