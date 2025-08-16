import { cn } from "@/lib/utils";

const services = [
    { name: 'Social Media Marketing.' },
    { name: 'Content Creation.' },
    { name: 'Branding & Packaging.' },
    { name: 'photoshoot & videoshoot.' },
    { name: 'influencer marketing.' },
    { name: 'ads management.' },
];

const ServiceItem = ({ name }: { name: string }) => (
    <div className="flex items-center gap-2 text-sm mx-4 flex-shrink-0">
        <span className="font-semibold text-background">{name}</span>
    </div>
);


export function StockTicker() {
  const extendedServices = [...services, ...services, ...services, ...services];

  return (
    <div className="relative w-full overflow-hidden bg-gray-900 py-2 border-b border-border">
        <div className="flex animate-scroll">
            {extendedServices.map((service, index) => (
                <ServiceItem key={index} {...service} />
            ))}
        </div>
    </div>
  );
}
