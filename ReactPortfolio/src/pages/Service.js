import React from "react";
import "./Service.css";

const services = [
  {
    title: "Social Media Marketing",
    description:
      "Connect with your customers on social media and build a strong online presence.",
  },
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "Improve your website search engine ranking and drive more organic traffic to your site.",
  },
  {
    title: "Content Marketing",
    description:
      "Create valuable digital content that attracts and engages your target audience.",
  },
  {
    title: "Email Marketing",
    description:
      "Reach your customers directly with targeted email campaigns and regular newsletter.",
  },
  {
    title: "Web Design & Optimization",
    description:
      "Create a professional and user-friendly website that helps you stand out from the competition.",
  },
  {
    title: "Web Analytics & Reporting",
    description:
      "Help you set up and manage website analytics and provide regular reporting analysis for improvement.",
  },
];

const steps = [
  {
    step: "01",
    title: "Consultation",
    description:
      "Schedule a consultation to discuss your business goals and digital marketing needs with our team.",
  },
  {
    step: "02",
    title: "Strategy Development",
    description:
      "Our team will develop a customized digital marketing strategy tailored to your business.",
  },
  {
    step: "03",
    title: "Implementation",
    description:
      "We will put the strategy into action and launch your digital marketing campaigns.",
  },
  {
    step: "04",
    title: "Monitoring & Optimization",
    description:
      "We continually monitor and optimize your campaigns to maximize results and ROI.",
  },
  {
    step: "05",
    title: "Reporting & Analysis",
    description:
      "We provide regular reports and analysis on campaign performance.",
  },
];

export default function ServicesAndProcess() {
  return (
    <>
      <section className="services-section">
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button>Read More</button>
            </div>
          ))}
        </div>
      </section>

      <section className="process-section">
        <h2 className="process-title">Our Process Workflow</h2>

        <div className="process-grid">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-circle">{step.step}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
