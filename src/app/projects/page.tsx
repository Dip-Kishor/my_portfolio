import Projects from '@/components/ui/Projects'
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "Dip Kishor Regmi | Software Developer Portfolio",
  description: "Web applications built by Dip Kishor Regmi — HR systems, e-commerce, and hotel management platforms.",
  alternates: { canonical: "https://www.dipkishor.com.np/projects" },
};

const page = () => {
  return (
    <Projects />
  )
}

export default page