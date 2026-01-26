import { Injectable } from '@nestjs/common';

@Injectable()
export class CmsService {
    async getPageContent(domain: string, slug: string) {
        // This will eventually interface with @fluxorae/db
        return {
            domain,
            slug,
            content: {
                title: `Welcome to Fluxorae for ${domain}`,
                body: `This is the ${slug} page content.`,
            },
        };
    }
}
