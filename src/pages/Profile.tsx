import { Calendar, Download, User, Heart } from "lucide-react";
import Navigation from "@/components/Navigation";

const Profile = () => {
  // Placeholder data - customize these with your actual details
  const profileData = {
    name: "Charanraj M",
    dob: "June 30, 2003",  // Date of Birth
    year: "22",  // Year (e.g., birth year or relevant year)
    image: "/4e7f2084-8092-4d1a-a420-a6630b80a446.jpg",  // Path to your profile image in public/
    resumeUrl: "/Charanraj-M-Resume.pdf",  // Updated to match your file name
    about: "Passionate full-stack developer with expertise in modern web technologies. I enjoy building innovative solutions and exploring new tech trends. Always eager to learn and collaborate on exciting projects.",  // Added: Short About (2-3 lines)
    interests: [
      "Exploring new technology, gadgets, and innovations",
      "Listening to music",
      "Watching movies and anime",
    ],  // Added: Interests & Hobbies
  };

  const handleDownloadResume = () => {
    // Trigger download for the resume PDF
    const link = document.createElement("a");
    link.href = profileData.resumeUrl;
    link.download = "Charanraj_M_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="py-20 bg-background grid-background relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none"></div>
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 animate-fade-in text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                <span className="text-primary">&gt;</span> PROFILE
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>

            <div className="terminal-border p-8 bg-card/30 backdrop-blur-sm animate-fade-in">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <img
                    src={profileData.image}
                    alt={`${profileData.name}'s Profile`}
                    className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-primary"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/256?text=No+Image";  // Fallback if image not found
                    }}
                  />
                </div>

                {/* Profile Details */}
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center justify-center md:justify-start">
                    <User className="w-6 h-6 text-primary mr-2" />
                    {profileData.name}
                  </h2>

                  {/* About Section */}
                  <p className="text-muted-foreground leading-relaxed mb-6 text-center md:text-left">
                    {profileData.about}
                  </p>

                  <div className="flex flex-col md:flex-row md:gap-8 text-muted-foreground">
                    <p className="flex items-center justify-center md:justify-start">
                      <Calendar className="w-5 h-5 text-primary mr-2" />
                      <strong>DOB:</strong> {profileData.dob}
                    </p>
                    <p className="flex items-center justify-center md:justify-start">
                      <Calendar className="w-5 h-5 text-primary mr-2" />
                      <strong>Year:</strong> {profileData.year}
                    </p>
                  </div>

                  {/* Interests & Hobbies */}
                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center justify-center md:justify-start">
                      <Heart className="w-5 h-5 text-primary mr-2" />
                      Interests & Hobbies
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground text-center md:text-left">
                      {profileData.interests.map((interest, index) => (
                        <li key={index}>{interest}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Download Resume Button */}
                  <div className="mt-8 text-center md:text-left">
                    <button
                      onClick={handleDownloadResume}
                      className="px-6 py-3 bg-primary text-background font-bold text-sm hover:bg-primary/90 transition-colors flex items-center justify-center md:justify-start gap-2"
                    >
                      <Download className="w-5 h-5" />
                      Download Resume
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
