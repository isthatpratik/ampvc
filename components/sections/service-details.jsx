import ServiceLayout from "@/components/layout/service-layout";

export default function ServiceDetails({ service, onBack }) {
  return (
    <ServiceLayout
      title={service.title}
      subtitle={service.subtitle}
      content={
        <p>
          Detailed information about <strong>{service.title}</strong>. This
          section can include features, benefits, and any relevant content.
        </p>
      }
      onBack={onBack}
    />
  );
}
