import { useEffect, Fragment, useContext } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { GlobalContext } from "./context/store";
import IdleTimer from "./IdleTimer";
import LandingPage from "./pages/LandingPage";
import BreedDatabasePage from "./pages/BreedDatabasePage";
import BreedDetailPage from "./pages/BreedDetailsPage";
import MembersPage from "./pages/MembersPage";
import MembersDetailPage from "./pages/MembersDetailPage";
import FarmsPage from "./pages/FarmsPage";
import FarmDetailsPage from "./pages/FarmDetailsPage";
import StudsPage from "./pages/StudsPage";
import StudDetailPage from "./pages/StudDetailPage";
import SignUpPage from "./pages/SignUpPage";
import EventsPage from "./pages/EventsPage";
import MemberProfilePage from "./pages/MemberProfilePage";
import AboutAECPPage from "./pages/AboutAECPPage";
import StudCertificatePage from "./pages/StudCertificatePage";
import LitterInspectionPage from "./pages/LitterInspectionPage";
import LitterRegistrationPage from "./pages/LitterRegistrationPage";
import EventDetailPage from "./pages/EventDetailPage";
import FloatingDrawer from "./components/Navigation/Drawer";
import Navbar from "./components/Navigation/Navbar";
import Footer from "./components/Navigation/Footer";
import { ToastContainer, cssTransition } from "react-toastify";
import "animate.css/animate.min.css";

function App() {
  const bounce = cssTransition({
    enter: "animate__animated animate__bounceInRight",
    exit: "animate__animated animate__bounceOut",
  });
  const AuthContext = useContext(GlobalContext);
  const navigate = useNavigate();
  const { setAuthUser, user, isSearch, isMobileMenu } =
    useContext(GlobalContext);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user")) != undefined) {
      setAuthUser(JSON.parse(localStorage.getItem("user")));
    }
    // setAuthUser(JSON.parse(localStorage.getItem("user")));
    console.log(localStorage.getItem("user"));
  }, []);

  useEffect(() => {
    if (AuthContext.isLoggedIn) {
      const timer = new IdleTimer({
        timeout: 900, //expire after 10 seconds
        onTimeout: () => {
          navigate("/");
          AuthContext.unsetAuthUser();
          // console.log("Time Out");
        },
        onExpired: () => {
          // do something if expired on load
          // console.log("Shouldn't run anyways.");
        },
      });

      return () => {
        timer.cleanUp();
      };
    }
  }, [AuthContext.isLoggedIn]);

  return (
    <Fragment>
      <ToastContainer
        className="toast-container"
        transition={bounce}
        hideProgressBar
        autoClose={false}
        draggable={false}
        style={{
          margin: "auto",
          left: "0%",
          top: "45%",
        }}
      />
      <Navbar user={AuthContext.user} />
      <FloatingDrawer />
      <Routes>
        {/* General Routes Start */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-aecp" element={<AboutAECPPage />} />
        <Route path="/about-aecp/:tab" element={<AboutAECPPage />} />
        <Route path="/breed-database" element={<BreedDatabasePage />} />
        <Route
          path="/breed-database/:breedId"
          element={<BreedDatabasePage showBreedListDetails={true} />}
        />
        <Route
          path="/breed-database/:breedId/:horseId"
          element={<BreedDetailPage />}
        />
        <Route path="/members" element={<MembersPage />} />
        <Route path="/members/:memberId" element={<MembersDetailPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/:eventId" element={<EventDetailPage />} />
        <Route path="/farms" element={<FarmsPage />} />
        <Route path="/farms/:farmId" element={<FarmDetailsPage />} />
        <Route path="/studs" element={<StudsPage />} />
        <Route path="/studs/:studId" element={<StudDetailPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        {/* General Routes End */}

        {/* Member Only Routes Start */}
        <Route path="/member-profile" element={<MemberProfilePage />} />
        <Route path="/stud-certificates" element={<StudCertificatePage />} />
        <Route path="/litter-inspections" element={<LitterInspectionPage />} />
        <Route
          path="/litter-registrations"
          element={<LitterRegistrationPage />}
        />
        {/* Member Only Routes End */}
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
