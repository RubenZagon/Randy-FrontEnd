export interface FakeUser {
  results: [{
    gender: string;
  }, {
    name: {
      title: string;
      first: string;
      last: string;
    };
  }, {
    picture: {
      large: string;
      medium: string;
      thumbnail: string;
    };
  }];
}

export interface HeaderProps {
  className?: string;
}
