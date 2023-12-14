const stravaApiPath = "https://www.strava.com/api/v3";

export type AthleteInformationResponse = {
  id: number;
  username: string;
  // resourceState: number; //indicates level of detail. Possible values: 1 -> "meta", 2 -> "summary", 3 -> "detail"
  firstname: string;
  lastname: string;
  city: string;
  // state: string;
  country: string;
  sex: string;
  // premium: boolean; //has premium subscription
  // createdAt: Date;
  // updatedAt: Date;
  // badgeTypeID: number;
  // profileMedium: string;
  profile: string;
  // friend: null;
  // follower: null;
  // followerCount: number;
  // friendCount: number;
  // mutualFriendCount: number;
  // athleteType: number;
  datePreference: string;
  measurementPreference: string;
  // clubs: Array<any>;
  // ftp: number; //functional threshold power
  weight: number;
  // bikes: Array<Bike>;
  shoes: Array<Shoe>;
};

type Shoe = {
  id: string;
  primary: boolean;
  name: string;
  resourceState: number;
  distance: number;
};

export const fetchAthleteInformation =
  async (): Promise<AthleteInformationResponse> => {
    const options: RequestInit = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_STRAVA_API_ACCESS_TOKEN}`,
      },
    };

    const response = await fetch(`${stravaApiPath}/athlete`, options);

    return (await response.json()) as AthleteInformationResponse;
  };
