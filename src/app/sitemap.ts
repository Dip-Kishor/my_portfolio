import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://www.dipkishor.com.np',
            lastModified: new Date(),
        },
        {
            url: 'https://www.dipkishor.com.np/projects',
            lastModified: new Date(),
        },
        {
            url: 'https://www.dipkishor.com.np/about',
            lastModified: new Date(),
        },

        // Add your project pages manually for now
        {
            url: 'https://www.dipkishor.com.np/projects/hms',
            lastModified: new Date(),
        },
        {
            url: 'https://www.dipkishor.com.np/projects/ehajiri',
            lastModified: new Date(),
        },
        {
            url: 'https://www.dipkishor.com.np/projects/furni-emporium',
            lastModified: new Date(),
        },
        {
            url: 'https://www.dipkishor.com.np/projects/wyps',
            lastModified: new Date(),
        },
        {
            url: 'https://www.dipkishor.com.np/projects/eflms',
            lastModified: new Date(),
        },
    ];
}