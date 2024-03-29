
export interface ApiServiceInterface {
    _fetch(
      method: string,
      endpoint: string,
      body?: Object,
      query?: Object,
      options?: Object
    ): Promise<Response & any>;
  
    get(
      endpoint: string,
      query: Object | void,
      options: Object | void
    ): Promise<Response & any>;
  
    post(
      endpoint: string,
      body: Object | void,
      query: Object | void,
      options: Object | void
    ): Promise<Response & any>;
  
    put(
      endpoint: string,
      body: Object | void,
      query: Object | void,
      options: Object | void
    ): Promise<Response & any>;
  
    delete(
      endpoint: string,
      query: Object | void,
      body: Object | void,
      options: Object | void
    ): Promise<Response & any>;
  
    patch(
      endpoint: string,
      body: Object | void,
      query: Object | void,
      options: Object | void
    ): Promise<Response & any>;
  
    buildUrl(endpoint: string, query: Object | void): string;
  }
  