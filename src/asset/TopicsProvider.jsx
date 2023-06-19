import { useState } from "react";
import TopicsContext from "./TopicsContext";

export default function TopicsProvider({ children }) {
    const [topicsData, setTopicsData] = useState({
      All: [],
      Custom: [],
      ICP: [],
      Mission: [
        {
          topic:
            "The Importance of Establishing a Strong Online Presence for Small Businesses",
          keywords: [
            "online presence",
            "small business",
            "digital marketing",
            "branding",
          ],
        },
        {
          topic:
            "How Fast Turnaround Times in Logo and Website Design Benifit Your Business",
          keywords: [
            "fast turnaround ",
            "logo design",
            "website design",
            "branding",
          ],
        },
        {
          topic: "Affordable Branding Solutions for Startups and Entrepreneurs",
          keywords: [
            "affordable branding",
            "startups",
            "entrepreneurs",
            "logo design",
            "website design",
          ],
        },
        {
          topic:
            "The Benefits of Comprehensive Branding for Smalll to Medium-Sized Businesses",
          keywords: [
            "comprehensive branding",
            "small business",
            "logo design",
            "website design",
            "social media managment",
          ],
        },
        {
          topic:
            "Expert Tips for Choosing the Right Digital Marketing Agency for Your Business",
          keywords: [
            "digital marketing agency",
            "tips",
            "branding",
            "website design",
            "social media management",
          ],
        },
      ],
      Product: [],
    });
  
    // Provide the state and update function to the children components
    return (
      <TopicsContext.Provider value={{ topicsData, setTopicsData }}>
        {children}
      </TopicsContext.Provider>
    );
  };