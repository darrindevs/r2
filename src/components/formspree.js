import * as React from "react"



const Formspree = () => (
    <form
  action="https://formspree.io/f/xknyzyvy"
  method="POST"
>
  <label>
    Your email:
    <input type="email" name="email"></input>
  </label>
  <label>
    Your message:
    <textarea name="message"></textarea>
  </label>
  
  <button type="submit">Send</button>
</form>
  );
  
  export default Formspree;