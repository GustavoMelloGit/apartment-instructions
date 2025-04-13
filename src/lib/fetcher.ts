import axios, { Method } from 'axios';
import { env } from './env';

type Options = {
  method: Method;
  headers: Record<string, string>;
  body?: Record<string, unknown>;
  params: Record<string, string>;
};

const defaultOptions: Options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
  body: undefined,
  params: {},
};

function getUrl(url: string, params: Record<string, string>): string {
  const baseUrl = env.NEXT_PUBLIC_API_BASE_URL;
  if (!baseUrl) {
    console.error("A URL base da API não está definida em 'env'.");
    return url; // Retorna a URL original em caso de erro
  }
  const fullUrl = new URL(url, baseUrl);
  const searchParams = new URLSearchParams(params);
  fullUrl.search = searchParams.toString();
  return fullUrl.toString();
}

export interface IFetcher {
  fetch: <T = unknown>(url: string, options?: Partial<Options>) => Promise<T>;
}

export class FetcherImpl implements IFetcher {
  constructor() {}

  async fetch<T = unknown>(
    url: string,
    options: Partial<Options> = defaultOptions
  ): Promise<T> {
    const { headers: optionsHeaders, ...restOptions } = options;
    const { headers: defaultHeaders, ...restDefaultOptions } = defaultOptions;
    const mergedOptions = {
      ...restDefaultOptions,
      ...restOptions,
    };

    const headers: Record<string, string> = {
      ...defaultHeaders,
      ...optionsHeaders,
    };

    const fullUrl = getUrl(url, mergedOptions.params);
    const response = await axios(fullUrl, {
      method: options.method,
      headers,
      ...(options.body && { data: options.body }),
    });

    return response.data;
  }
}

export const Fetcher = new FetcherImpl();
