/// <reference types="next" />
/// <reference types="next/types/global" />

interface IMessage {
  id: string;
  name: string;
  subject: string;
  owner: string;
  users: Array<string>;
}

interface Isubmenu {
  id: string;
  name: string;
}

interface Imenu {
  id: string;
  name: string;
  subMenus: Array<Isubmenu>;
}

interface IContext {
  data: Array<IMessage>;
  setData: (data: Array<IMessage>) => void;
}
