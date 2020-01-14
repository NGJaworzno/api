export interface ConfigVariables {
  jwt: JwtConfig;
  signUp: SignUpConfig;
  team: TeamConfig;
}

interface JwtConfig {
  secret: string;
}

interface SignUpConfig {
  open: boolean;
}

interface TeamConfig {
  participants: TeamParticipantsConfig;
}

interface TeamParticipantsConfig {
  min: number;
  max: number;
}

export default interface Config extends ConfigVariables {
  check(): void;
}
