import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const HomePage = () => {
  return (
    
   <div className="style-color">
      <div class="body">
        <h2><Header /></h2>
        <div class="inner-body">
          <div className="page-style">
            <span align="center">
              <div className="text">


                <img src="\images\vckbanner.png" width="120%" height="300px"></img>
                <h1>Welcome to Vivekanand College !</h1>
                <h2>Your journey to excellence starts here.</h2>
                <a href="/admissions" align="center"><h2><button>Apply Now!</button></h2></a><hr></hr>

              </div>
            </span>


            <p align="left">
              <b>Vivekanand College</b> is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in 1980, we have proudly served generations of students, empowering them to achieve their full potential.
            </p>
            <p align="left">At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.
            </p><hr></hr>
            <h3 align="left">Why Choose Vivekanand College?</h3>
            <ul>
              <li><b>Legacy of Excellence:</b> Decades of commitment to quality education.</li>
              <li><b>Experienced Faculty:</b>Learn from renowned experts and passionate educators.</li>
              <li><b>Modern Facilities: </b>Well-equipped labs, expansive library, and comfortable campus.</li>
              <li><b>Holistic Development:</b>Focus on co-curricular activities, sports, and community service.</li>
              <li><b>Strong Placements:</b>Excellent career opportunities with leading companies.</li>
            </ul><hr></hr>

            <h3 align="left">Campus Life & Facilities</h3>
            <img alt="library" src="images\library.jpg" height="186px" width="50%"></img><img alt="vckhead" src="images\vckhead.jpg" height="200px" width="50%"></img>
            <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>

            <p>Ready to explore our courses?</p>
            <a href="/courses" align="center"><center><button>Explore Courses</button></center></a>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    
  )
}
export default HomePage;