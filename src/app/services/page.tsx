import Services from '@/components/ui/Services'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Dip Kishor Regmi | Software Developer Portfolio",
    description: "Web development services by Dip Kishor Regmi — full-stack apps, APIs, e-commerce & more.",
    alternates: { canonical: "https://www.dipkishor.com.np/services" },
};
const page = () => {
    return (
        <Services />
    )
}

export default page