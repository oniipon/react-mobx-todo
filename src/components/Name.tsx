import * as React from 'react';

export interface INamePropType {
  member: string;
}

export class Name extends React.Component<INamePropType> {
  public state: INamePropType;
  constructor(props: INamePropType) {
    super(props);
    this.state = props;
  }

  public render() {
    return (
      <div>
        <h2>{this.state.member}</h2>
      </div>
    );
  }
}
