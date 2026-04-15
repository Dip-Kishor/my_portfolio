import AboutMe from '@/components/ui/AboutMe'
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "About Me",
  description: "Learn about Dip Kishor Regmi, a Full-Stack Developer from Kathmandu, Nepal.",
  alternates: { canonical: "https://www.dipkishor.com.np/about" },
};

const page = () => {
  return (
    <AboutMe />
  )
}

export default page