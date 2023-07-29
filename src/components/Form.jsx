import React, { Component, useEffect } from "react";

function Form({refer}) {

  useEffect(() => {
    console.log(refer);
  }, [refer]);

    return <footer ref={refer}>OLÁ</footer>;
}
 
export default Form;