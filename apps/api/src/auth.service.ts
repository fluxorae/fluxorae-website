import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {
  private readonly domainAllowList = {
    'fluxorae.in': ['fluxorae@gmail.com'],
    'fluxorae.com': ['workspace@fluxorae.com'],
  };

  async validateUser(email: string, domain: string): Promise<boolean> {
    const allowedEmails = this.domainAllowList[domain];
    if (!allowedEmails) {
      throw new UnauthorizedException(`Domain ${domain} is not registered.`);
    }

    if (!allowedEmails.includes(email)) {
      throw new UnauthorizedException(`Login with ${email} is not allowed on ${domain}.`);
    }

    return true;
  }
}
