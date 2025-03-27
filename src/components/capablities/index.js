import { Briefcase, Clock, Rocket, DollarSign, Users, Handshake } from "lucide-react";

const features = [
  {
    icon: <Briefcase className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform " />,
    title: "Unmatched IT Expertise",
    description: "We deliver a versatile and professional approach, finely tuned to meet the unique needs of every client.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" />,
    title: "Rapid Execution",
    description: "From aligned expectations to swift development, we prioritize efficiency at every step.",
  },
  {
    icon: <Clock className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" />,
    title: "On-Time Excellence",
    description: "Clear communication and diligent planning ensure every project is delivered on schedule.",
  },
  {
    icon: <DollarSign className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" />,
    title: "Value-Driven Solutions",
    description: "Our team ensures optimal outcomes, providing exceptional results for every dollar invested.",
  },
  {
    icon: <Users className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" />,
    title: "Established Leadership",
    description: "With over 10+ years of proven experience, we stand as trusted innovators in the industry.",
  },
  {
    icon: <Handshake className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" />,
    title: "Reliable Partnership",
    description: "Code Masheen Connect Solutions offers steadfast, responsive support you can depend on, every time.",
  },
];

export default function CapabilitiesSection() {
  return (
    <section className=" text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-blue-400 font-semibold text-lg">Our Capabilities</h3>
        <h2 className=" hidden md:block text-3xl text-black font-bold mt-2">
          We Craft Exceptional Websites and Apps Entirely In-House, Ensuring End-To-End Precision and Excellence.
        </h2>
      </div>

      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {features.map((feature, index) => (
          <div key={index} className="flex gap-4 items-start group cursor-pointer hover:bg-gray-900 hover:text-white p-4 rounded-lg transition">
            <div>{feature.icon}</div>
            <div>
              <h4 className="text-lg text-blue-500 font-semibold">{feature.title}</h4>
              <p className="text-black mt-1 hover:text-white ">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
