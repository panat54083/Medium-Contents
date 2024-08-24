import { Inject, Injectable } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}
  getHello(): string {
    return 'Hello World!';
  }

  async getCache(key: string) {
    return await this.cacheManager.get(key);
  }

  async setCache(key: string, value: string) {
    await this.cacheManager.set(key, value);
  }

  async deleteCache(key: string) {
    await this.cacheManager.del(key);
  }

  async resetCache() {
    await this.cacheManager.reset();
  }
}
