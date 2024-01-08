import { environment } from 'src/environments/environment';

export function urlBuilder(url: string): string {
  return environment.api.base + url;
}
