declare module '@allthings/objectdiff' {
  export type ChangeType = 'equal' | 'primitive change' | 'removed' | 'added' | 'object change';

  export interface DiffResult {
    changed: ChangeType;
    value: any;
    removed?: any;
    added?: any;
  }

  interface ObjectDiff {
    diff: (a: object, b: object) => DiffResult;
    diffOwnProperties: (a: object, b: object) => DiffResult;
    convertToXMLString: (changes: DiffResult) => string;
  }

  const objectDiff: ObjectDiff;
  export default objectDiff;
}
