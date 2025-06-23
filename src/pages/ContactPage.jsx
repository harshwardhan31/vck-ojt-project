import Header from "../components/Header/Header";

const ContactPage = () => {
  return (
     <div className="style-color">
    
        <h2><Header/></h2>
        <div className="page-style">
        <h1><font color="blue">Contact Us</font></h1>
        <p align="left">We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p><hr></hr>

        <h3 align="left">General Enquiries</h3>
       <p align="left"><b>Vivekanand College Main Campus</b><br></br>
       [Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071] <br></br>India<br></br><br></br>
       Phone: <b>+91 12345 67890</b><br></br>
       Email:<b> info@vivekanandcollege.edu</b><br></br>
       Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST</p><hr></hr>

        <h3 align="left">Admissions Office</h3>
        <p align="left">For all admission-related queries regarding undergraduate or postgraduate programs:<br></br>
        Phone: +91 98765 43210<br></br>
        Email: admissions@vivekanandcollege.edu</p><hr></hr>

        <h3 align="left">Student Support Services</h3>
        <p align="left">For current student support, academic advising, or general assistance:<br></br>
        Phone: +91 87654 32109<br></br>
        Email: studentsupport@vivekanandcollege.edu</p><hr></hr>

        <h3 align="left">Find Us on the Map</h3>
        <p><a href="https://maps.google.com/?q=Vivekanand+College" target="_blank" rel="noopener noreferrer">View on Google Maps</a></p><hr></hr>

        <h3 align="left">Send Us a Message</h3>
        <p align="left">[A contact form with fields for Name, Email, Subject, Message can be added here.]</p>
        
   </div>
  </div>
    
  )
}
export default ContactPage;