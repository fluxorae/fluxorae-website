import { Injectable } from '@nestjs/common';

@Injectable()
export class LeadService {
    async captureLead(domain: string, email: string, data: any) {
        // This will eventually save to @fluxorae/db
        console.log(`Lead captured from ${domain}: ${email}`, data);
        return { success: true, message: 'Lead captured successfully' };
    }
}
