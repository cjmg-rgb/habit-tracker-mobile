export interface IProfile {
  id: number;
  firstName: string;
  lastName: string;
  role: "USER" | "ADMIN";
  gender: "MALE" | "FEMALE";
  user: IUser;
  userStats: IUserStats;
  habits?: IHabit[];
  habitLogs?: IHabitLog[];
  notifications?: INotification[];
  groupsOwned?: IGroup[];
  groups?: IGroupMember[];
}

export interface IUser {
  id: number;
  email: string;
  password: string;
  profile: IProfile | null;
  createdAt: Date;
}

export interface IUserStats {}
export interface IHabit {}
export interface IHabitLog {}
export interface INotification {}
export interface IGroup {}
export interface IGroupMember {}

export interface ICredentials {
  creds: IUser;
  token: string;
}

export interface IAuth {
  auth: IUser | null;
  setCredentials: (credentials: ICredentials) => Promise<void>;
  removeCredentials: () => Promise<void>;
}

export interface ILoginResponse {
  user: IUser;
  token: string;
}
