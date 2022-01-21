interface addEventListenerReturn {
  remove: () => void;
}

interface requestConfig {
  input: RequestInfo;
  init?: RequestInit;
}
type mode = 'replace' | 'merge';
interface ExtendInfo {
  requestMode?: mode;
  requestHeader?: object | undefined;
  requestData?: unknown | undefined;
  reponsetMode?: mode;
  reponseHeader?: object | undefined;
  reponseData?: unknown | undefined;
}
interface RuleSet {
  url: string;
  isEffective: boolean;
  isProxyRequest?: boolean;
  isProxyReponse?: boolean;
  extendInfo: ExtendInfo;
}
type EventKey = 'api_proxy_open';
interface PostMessage {
  key: EventKey;
  date: any;
}
