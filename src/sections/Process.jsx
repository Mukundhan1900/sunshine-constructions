export default function Process() {
  const steps = [
    {
      title: "Consultation",
      desc: "Understand your requirements and discuss project goals."
    },
    {
      title: "Planning",
      desc: "Site analysis, budgeting, and scheduling."
    },
    {
      title: "Design",
      desc: "Create architectural drawings and 3D concepts."
    },
    {
      title: "Cost Estimation",
      desc: "Transparent quotation with material breakdown."
    },
    {
      title: "Construction",
      desc: "Execute the project with quality materials."
    },
    {
      title: "Inspection",
      desc: "Quality checks and safety inspections."
    },
    {
      title: "Project Handover",
      desc: "Final walkthrough and key handover."
    }
  ];

  return (
    <section id="process" className="process">
      <h2>Our Construction Process</h2>

      <div className="process-grid">
        {steps.map((step, index) => (
          <div className="process-card" key={index}>
            <div className="step-number">
              {String(index + 1).padStart(2, "0")}
            </div>

            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}