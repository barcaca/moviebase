export class HTTPRequest {
  constructor(
    public url: string,
    public method: string,
    public headers: Record<string, string>,
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    public queryParams: Record<string, any>,
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    public body: any,
    public timeout: number,
    public retries: number,
    public validateStatus: boolean,
    public cache: boolean | undefined,
    public followRedirect: boolean
  ) {}
}

export class RequestBuilder {
  private url = ''
  private method = 'GET'
  private headers: Record<string, string> = {}
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  private body: any = null
  private timeout = 5000
  private retries = 0

  setURL(url: string): RequestBuilder {
    this.url = url
    return this
  }
  setMethod(method: string): RequestBuilder {
    this.method = method
    return this
  }
  addHeaders(key: string, value: string): RequestBuilder {
    this.headers[key] = value
    return this
  }
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  setBody(body: any): RequestBuilder {
    this.body = body
    return this
  }
  setTimeout(timeout: number): RequestBuilder {
    this.timeout = timeout
    return this
  }
  setRetries(retries: number): RequestBuilder {
    this.retries = retries
    return this
  }
  build(): HTTPRequest {
    return new HTTPRequest(
      this.url,
      this.method,
      this.headers,
      {}, // queryParams
      this.body,
      this.timeout,
      this.retries,
      true, // validateStatus
      undefined, // cache
      false // followRedirect
    )
  }
}
