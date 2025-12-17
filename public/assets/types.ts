// types.ts
export interface ScriptConfig {
  name: string;
  description: string;
  command: string;
  args?: string[];
  env?: { [key: string]: string };
}

export interface ScriptResult {
  stdout: string;
  stderr: string;
  exitCode: number;
}

export enum ScriptStatus {
  SUCCESS = 'success',
  FAILURE = 'failure',
  RUNNING = 'running',
}

export interface ScriptExecution {
  script: ScriptConfig;
  status: ScriptStatus;
  result?: ScriptResult;
}

export type Scripts = ScriptConfig[];