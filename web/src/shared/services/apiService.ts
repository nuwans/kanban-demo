import type { ApiServiceInterface } from './apiServiceInterFace';
import { serialize } from '../../shared/helpers/url';
export class ApiService implements ApiServiceInterface {
  METHOD_GET = 'GET';
  METHOD_PUT = 'PUT';
  METHOD_POST = 'POST';
  METHOD_DELETE = 'DELETE';
  METHOD_PATCH = 'PATCH';

  defaultOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  _baseUrl: string;
  constructor() {
    this._baseUrl = process.env.REACT_APP_API_URL
      ? process.env.REACT_APP_API_URL
      : '';
  }
  get baseUrl() {
    return this._baseUrl;
  }
  _formatApiEndpoint(baseUrl: string): string {
    return baseUrl.replace(/\/$/, '');
  }

  get(
    endpoint: string,
    query: Object = {},
    options: Object = {}
  ): Promise<Response & any> {
    return this._fetch(this.METHOD_GET, endpoint, {}, query, options);
  }

  post(
    endpoint: string,
    body: Object = {},
    query: Object = {},
    options: Object = {},
  ): Promise<Response & any> {
    return this._fetch(this.METHOD_POST, endpoint, body, query, options);
  }

  put(
    endpoint: string,
    body: Object = {},
    query: Object = {},
    options: Object = {}
  ): Promise<Response & any> {
    return this._fetch(this.METHOD_PUT, endpoint, body, query, options);
  }

  delete(
    endpoint: string,
    query: Object = {},
    body: Object = {},
    options: Object = {}
  ): Promise<Response & any> {
    return this._fetch(this.METHOD_DELETE, endpoint, body, query, options);
  }

  patch(
    endpoint: string,
    body: Object = {},
    query: Object = {},
    options: Object = {}
  ): Promise<Response & any> {
    return this._fetch(this.METHOD_PATCH, endpoint, body, query, options);
  }

  buildUrl(endpoint: string, query: Object = {}): string {
    if (Object.keys(query).length > 0) {
      endpoint = `${endpoint}?${serialize(query)}`;
    }
    return `${this._baseUrl}${endpoint}`;
  }

  _fetch(
    method: string,
    endpoint: string,
    body: any = {},
    query: any = {},
    options: any = {}
  ): Promise<Response & any> {
    const url = this.buildUrl(endpoint, query);
    options = { ...this.defaultOptions, ...options, method };
    if (Object.keys(body).length > 0) {
      options.body = typeof body === 'object' ? JSON.stringify(body) : body;
    }

    if (body instanceof FormData) {
      //When you're sending a form with fetch in the frontend, don't set Content-Type header yourself.
      options = { headers: {}, method };
      options.body = body;
    }
    return fetch(url, options).then((response) => response.json());
  }
}
