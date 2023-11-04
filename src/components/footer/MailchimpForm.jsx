import MailchimpSubscribe from 'react-mailchimp-subscribe'
import React from 'react'
import "./footer.css"
import Newsletter from './Newsletter'


const MailchimpForm = () => {
   const postUrl = `${import.meta.env.VITE_MAILCHIMP_URL}?u=${import.meta.env.VITE_MAILCHIMP_VALUE}&id=${import.meta.env.VITE_MAILCHIMP_ID}`


   return (
      <>
         <MailchimpSubscribe url={postUrl} render={({ subscribe, status, message }) => (
            <Newsletter
               status={status}
               message={message}
               onValidated={formData => subscribe(formData)}
            />
         )} />
      </>

   )
}

export default MailchimpForm