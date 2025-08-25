import { cn } from "@/lib/utils";

const services = [
    { name: 'Social Media Marketing.' },
    { name: 'Content Creation.' },
    { name: 'Branding & Packaging.' },
    { name: 'Photoshoot & Videoshoot.' },
    { name: 'Influencer Marketing.' },
    { name: 'Ads Management.' },
];

const ServiceItem = ({ name }: { name: string }) => (
    <div className="flex items-center gap-2 text-sm mx-4 flex-shrink-0">
        <span className="font-semibold text-background">{name}</span>
    </div>
);


export function StockTicker() {
  const extendedServices = [...services, ...services];

  return (
    <div className="relative w-full overflow-hidden bg-gray-900 py-2 border-b border-border group flex">
        <div className="flex animate-scroll group-hover:paused">
            {extendedServices.map((service, index) => (
                <ServiceItem key={index} {...service} />
            ))}
        </div>
    </div>
  );
}
