"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}



export const SignUp = () => {
  return <div style={{ width: 300  ,  border: "1px solid green"}}> 
  <input type="text" placeholder="Username "/>
  <input type="text" placeholder="Password" />
  </div>
}
