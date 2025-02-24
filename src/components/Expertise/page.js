import { FaGraduationCap, FaUniversity, FaPlane, FaBriefcaseMedical, FaBuilding, FaShoppingCart, FaLaptopCode, FaCode, FaFilm } from "react-icons/fa";

const experiences = [
  { title: "Education", icon: FaGraduationCap },
  { title: "Fintech", icon: FaUniversity },
  { title: "Travel & Hospitality", icon: FaPlane },
  { title: "Healthcare", icon: FaBriefcaseMedical },
  { title: "Real Estate", icon: FaBuilding },
  { title: "E-Commerce", icon: FaShoppingCart },
  { title: "SaaS Products", icon: FaLaptopCode },
  { title: "Enterprise Apps", icon: FaCode },
  { title: "Entertainment", icon: FaFilm },
];

const ExperienceSection = () => {
  return (
    <div className="py-16  w-screen h-auto">
      <div className="max-w-6xl mx-auto px-6 h-auto">
        <h2 className="text-2xl font-semibold text-center mb-8">Our Experience</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col cursor-pointer items-center p-6 bg-white hover:bg-gray-200 shadow-lg rounded-lg border">
              <div className="p-4 bg-blue-100 rounded-full">
                <exp.icon className="w-12 h-12 text-blue-500" />
              </div>
              <p className="mt-4 text-lg font-medium text-gray-800">{exp.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
